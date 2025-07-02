import React, { useState, useRef, useEffect } from 'react';
import { getMediaUrl } from '../lib/mediaUrl';

interface Clip {
  id: number;
  src: string;
  caption: string;
  description?: string;
}

interface ClipViewerProps {
  clips: Clip[];
}

export default function ClipViewer({ clips }: ClipViewerProps) {
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentClip = clips[currentClipIndex];

  useEffect(() => {
    // Reset video when clip changes
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [currentClipIndex]);

  const handleNextClip = () => {
    setCurrentClipIndex(prevIndex => 
      Math.min(prevIndex + 1, clips.length - 1)
    );
  };

  const handlePrevClip = () => {
    setCurrentClipIndex(prevIndex => 
      Math.max(prevIndex - 1, 0)
    );
  };

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLVideoElement>) => {
    if (videoRef.current && !isPlaying) {
      const rect = videoRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const progress = x / rect.width;
      videoRef.current.currentTime = progress * videoRef.current.duration;
    }
  };

  return (
    <div className="clip-viewer">
      <div className="video-container">
        <video
          ref={videoRef}
          src={getMediaUrl(currentClip.src)}
          className="clip-video"
          onMouseMove={handleMouseMove}
          onClick={togglePlayback}
          muted
          playsInline
        />
        
        <div className="video-controls">
          <button 
            onClick={handlePrevClip}
            disabled={currentClipIndex === 0}
            className="nav-button prev-button"
          >
            ←
          </button>
          
          <div className="clip-info">
            <span className="clip-counter">
              {currentClipIndex + 1} / {clips.length}
            </span>
            <p className="clip-caption">{currentClip.caption}</p>
          </div>
          
          <button 
            onClick={handleNextClip}
            disabled={currentClipIndex === clips.length - 1}
            className="nav-button next-button"
          >
            →
          </button>
        </div>
      </div>

      <style jsx>{`
        .clip-viewer {
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
        }

        .video-container {
          position: relative;
          background: #000;
          border-radius: 8px;
          overflow: hidden;
        }

        .clip-video {
          width: 100%;
          height: auto;
          display: block;
          cursor: pointer;
        }

        .video-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          padding: 2rem 1rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .nav-button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.4);
        }

        .nav-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .clip-info {
          flex: 1;
          text-align: center;
          color: white;
        }

        .clip-counter {
          font-size: 0.9rem;
          opacity: 0.8;
          display: block;
          margin-bottom: 0.5rem;
        }

        .clip-caption {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .video-controls {
            flex-direction: column;
            gap: 0.5rem;
            padding: 1rem;
          }

          .nav-button {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .clip-info {
            order: -1;
          }

          .clip-counter {
            margin-bottom: 0.25rem;
          }

          /* Disable scrubbing on mobile */
          .clip-video {
            pointer-events: none;
          }
        }

        @media (hover: none) {
          /* Disable scrubbing on touch devices */
          .clip-video {
            pointer-events: none;
          }
        }
      `}</style>
    </div>
  );
}