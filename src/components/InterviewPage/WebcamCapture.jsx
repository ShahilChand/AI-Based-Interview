import React, { useRef, useEffect, useState } from 'react';
import './WebcamCapture.css';

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startWebcam();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startWebcam = async () => {
    try {
      setIsLoading(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        },
        audio: false
      });
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setError('');
      setIsLoading(false);
    } catch (err) {
      console.error('Error accessing webcam:', err);
      setError('Unable to access webcam. Please check permissions.');
      setIsLoading(false);
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  return (
    <div className="webcam-container">
      <div className="webcam-header">
        <h3>Video Feed</h3>
        <div className="webcam-controls">
          {stream ? (
            <button onClick={stopWebcam} className="webcam-btn stop-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
              Stop
            </button>
          ) : (
            <button onClick={startWebcam} className="webcam-btn start-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
              Start
            </button>
          )}
        </div>
      </div>
      
      <div className="video-wrapper">
        {isLoading && (
          <div className="webcam-loading">
            <div className="loading-spinner"></div>
            <p>Starting webcam...</p>
          </div>
        )}
        
        {error && (
          <div className="webcam-error">
            <div className="error-icon">📷</div>
            <p>{error}</p>
            <button onClick={startWebcam} className="retry-btn">
              Try Again
            </button>
          </div>
        )}
        
        {!error && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`webcam-video ${isLoading ? 'loading' : ''}`}
          />
        )}
        
        {stream && !isLoading && (
          <div className="recording-indicator">
            <div className="red-dot"></div>
            <span>LIVE</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;