import React from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  return (
    <div className="typing-animation">
      <div className="typing-indicator">
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
      </div>
      <span className="typing-text">AI is thinking...</span>
    </div>
  );
};

export default TypingAnimation;