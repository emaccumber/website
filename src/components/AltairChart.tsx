import React, { useEffect, useRef } from 'react';

interface AltairChartProps {
  spec: object | string;
  width?: number;
  height?: number;
  className?: string;
}

declare global {
  interface Window {
    vegaEmbed: any;
  }
}

export default function AltairChart({ spec, width, height, className }: AltairChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for vegaEmbed to be available
    const embedChart = async () => {
      // Check if vegaEmbed is available
      if (typeof window === 'undefined' || !window.vegaEmbed || !containerRef.current) {
        console.log('Waiting for vegaEmbed or container...');
        return;
      }

      console.log('vegaEmbed is available, embedding chart...');

      try {
        let chartSpec: object;
        
        // Parse spec if it's a string
        if (typeof spec === 'string') {
          chartSpec = JSON.parse(spec);
        } else {
          chartSpec = spec;
        }

        // Ensure the spec is properly formatted
        if (!chartSpec.$schema) {
          // Add Vega-Lite schema if missing
          chartSpec.$schema = 'https://vega.github.io/schema/vega-lite/v5.json';
        }

        // Calculate container width if using responsive sizing
        let chartWidth = width;
        if (!width || width === 'container') {
          const containerWidth = containerRef.current.clientWidth;
          chartWidth = containerWidth > 0 ? containerWidth - 40 : 600; // Subtract padding
        }

        // Add responsive width if not specified
        const finalSpec = {
          ...chartSpec,
          width: chartWidth,
          height: height || 300
        };

        console.log('Final spec:', finalSpec);

        // Embed the chart - pass the container element directly
        const result = await window.vegaEmbed(containerRef.current, finalSpec, {
          actions: false,
          theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light',
          renderer: 'svg'
        });
        
        console.log('Chart embedded successfully!');
      } catch (error) {
        console.error('Error embedding chart:', error);
      }
    };

    // Try to embed immediately
    embedChart();

    // If vegaEmbed isn't available yet, poll for it
    const checkInterval = setInterval(() => {
      if (window.vegaEmbed) {
        clearInterval(checkInterval);
        embedChart();
      }
    }, 100);

    // Cleanup
    return () => {
      clearInterval(checkInterval);
    };
  }, [spec, width, height]);

  // Re-render when dark mode changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (window.vegaEmbed && containerRef.current) {
        // Re-embed chart with new theme
        const embedChart = async () => {
          try {
            let chartSpec = typeof spec === 'string' ? JSON.parse(spec) : spec;
            
            let chartWidth = width;
            if (!width || width === 'container') {
              const containerWidth = containerRef.current.clientWidth;
              chartWidth = containerWidth > 0 ? containerWidth - 40 : 600;
            }

            const finalSpec = {
              ...chartSpec,
              width: chartWidth,
              height: height || 300
            };

            await window.vegaEmbed(containerRef.current, finalSpec, {
              actions: false,
              theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light',
              renderer: 'svg'
            });
          } catch (error) {
            console.error('Error re-embedding chart:', error);
          }
        };
        embedChart();
      }
    });

    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    return () => observer.disconnect();
  }, [spec, width, height]);

  return (
    <div 
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        minHeight: height || 300,
        marginTop: '1rem',
        marginBottom: '1rem'
      }}
    />
  );
}