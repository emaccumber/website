import React, { useEffect, useRef } from 'react';

interface VimeoPlayerProps {
  vimeoId: string;
}

export default function VimeoPlayer({ vimeoId }: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Optional: Add any Vimeo Player API initialization here if needed
  }, [vimeoId]);

  return (
    <div className="vimeo-container">
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Vimeo video player"
        className="vimeo-iframe"
      />
      
      <style jsx>{`
        .vimeo-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 8px;
        }

        .vimeo-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .vimeo-container {
            padding-bottom: 75%; /* 4:3 aspect ratio on mobile */
          }
        }
      `}</style>
    </div>
  );
}