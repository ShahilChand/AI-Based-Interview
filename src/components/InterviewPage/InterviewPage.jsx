import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import WebcamCapture from './WebcamCapture';
import VoiceRecorder from './VoiceRecorder';
import ChatInterface from './ChatInterface';
import TypingAnimation from './TypingAnimation';
import PreInterviewSetup from './PreInterviewSetup';
import './InterviewPage.css';

const InterviewPage = () => {
  const [socket, setSocket] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [interviewPhase, setInterviewPhase] = useState('introduction');
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  
  const messagesEndRef = useRef(null);
  const speechSynthesisRef = useRef(null);

  useEffect(() => {
    // Only initialize socket connection after interview starts
    if (!interviewStarted) return;

    // Initialize socket connection
    const newSocket = io('http://localhost:3001');
    
    newSocket.on('connect', () => {
      console.log('Connected to server');
      setSocket(newSocket);
    });

    newSocket.on('ai-response', (data) => {
      setIsAiTyping(true);
      
      // Simulate typing delay
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now(),
          role: 'ai',
          message: data.message,
          timestamp: new Date(),
          phase: data.phase
        }]);
        setInterviewPhase(data.phase);
        setIsAiTyping(false);
        
        // Convert AI response to speech only if enabled
        if (isSpeechEnabled) {
          speakText(data.message);
        }
      }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
    });

    newSocket.on('error', (data) => {
      setError(data.message);
      setIsAiTyping(false);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Start interview session with user profile
    newSocket.emit('start-interview', userProfile);

    return () => {
      newSocket.disconnect();
      // Stop any ongoing speech synthesis
      if (speechSynthesisRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, [interviewStarted, userProfile]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAiTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Enhanced voice settings for more natural speech
      utterance.rate = 0.85; // Slightly slower for clarity
      utterance.pitch = 1.1; // Slightly higher pitch for friendliness
      utterance.volume = 0.9; // Good volume level
      
      // Function to find the best available voice
      const findBestVoice = () => {
        const voices = speechSynthesis.getVoices();
        
        // Priority order for more natural voices
        const preferredVoices = [
          // Google voices (very natural)
          'Google UK English Female',
          'Google UK English Male', 
          'Google US English Female',
          'Google US English Male',
          // Microsoft voices (natural sounding)
          'Microsoft Zira - English (United States)',
          'Microsoft David - English (United States)',
          'Microsoft Hazel - English (Great Britain)',
          'Microsoft Susan - English (Great Britain)',
          // Samantha (Mac - very natural)
          'Samantha',
          'Alex',
          // Fallback to any English voice
          ...voices.filter(voice => voice.lang.includes('en')),
        ];

        // Find the first available preferred voice
        for (const preferred of preferredVoices) {
          const voice = voices.find(v => 
            v.name.includes(preferred) || 
            v.name === preferred
          );
          if (voice) return voice;
        }

        // Enhanced fallback - prefer female voices as they often sound more natural
        const femaleVoice = voices.find(voice => 
          voice.lang.includes('en') && 
          (voice.name.toLowerCase().includes('female') || 
           voice.name.toLowerCase().includes('woman') ||
           voice.name.includes('Zira') ||
           voice.name.includes('Hazel') ||
           voice.name.includes('Samantha'))
        );
        
        if (femaleVoice) return femaleVoice;
        
        // Final fallback to any English voice
        return voices.find(voice => voice.lang.includes('en')) || voices[0];
      };

      // Wait for voices to load if not already loaded
      if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = () => {
          const voice = findBestVoice();
          if (voice) {
            utterance.voice = voice;
            console.log(`Using voice: ${voice.name} (${voice.lang})`);
          }
          speechSynthesisRef.current = utterance;
          speechSynthesis.speak(utterance);
        };
      } else {
        const voice = findBestVoice();
        if (voice) {
          utterance.voice = voice;
          console.log(`Using voice: ${voice.name} (${voice.lang})`);
        }
        speechSynthesisRef.current = utterance;
        speechSynthesis.speak(utterance);
      }

      // Add pauses for more natural speech
      utterance.onend = () => {
        console.log('Speech finished');
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
      };
    }
  };

  const sendMessage = (message) => {
    if (!message.trim() || !socket) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      message: message.trim(),
      timestamp: new Date(),
      phase: interviewPhase
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsAiTyping(true);

    // Send to server
    socket.emit('user-message', {
      message: message.trim(),
      sessionId: sessionId
    });
  };

  const handleSpeechResult = (transcript) => {
    if (transcript.trim()) {
      sendMessage(transcript);
    }
  };

  const handleStartInterview = (profileData) => {
    setUserProfile(profileData);
    setInterviewStarted(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(currentMessage);
    }
  };

  const getPhaseDisplay = (phase) => {
    const phaseMap = {
      introduction: { text: 'Introduction', color: '#00F2C3' },
      'technical-basic': { text: 'Basic Questions', color: '#4CAF50' },
      'technical-intermediate': { text: 'Technical Skills', color: '#FFB84D' },
      'technical-advanced': { text: 'Advanced Technical', color: '#FF9800' },
      behavioral: { text: 'Behavioral Questions', color: '#FF6B9D' },
      closing: { text: 'Interview Closing', color: '#8B5CF6' }
    };
    return phaseMap[phase] || phaseMap.introduction;
  };

  const phaseInfo = getPhaseDisplay(interviewPhase);

  // Show pre-interview setup if interview hasn't started
  if (!interviewStarted) {
    return <PreInterviewSetup onStartInterview={handleStartInterview} />;
  }

  return (
    <div className="interview-page">
      {/* Header */}
      <div className="interview-header">
        <h1>AI Mock Interview</h1>
        <div className="header-controls">
          <div className="interview-phase">
            <span 
              className="phase-indicator" 
              style={{ backgroundColor: phaseInfo.color }}
            ></span>
            <span className="phase-text">{phaseInfo.text}</span>
          </div>
          <button 
            className={`speech-toggle ${isSpeechEnabled ? 'enabled' : 'disabled'}`}
            onClick={() => {
              setIsSpeechEnabled(!isSpeechEnabled);
              if (!isSpeechEnabled) {
                // Stop any ongoing speech when disabling
                speechSynthesis.cancel();
              }
            }}
            title={isSpeechEnabled ? 'Click to mute AI voice' : 'Click to enable AI voice'}
          >
            {isSpeechEnabled ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12S16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12S18.01 4.14 14 3.23Z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.21 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z"/>
              </svg>
            )}
            <span>{isSpeechEnabled ? 'Voice On' : 'Voice Off'}</span>
          </button>
        </div>
      </div>

      <div className="interview-container">
        {/* Webcam Section */}
        <div className="webcam-section">
          <WebcamCapture />
          <div className="controls-section">
            <VoiceRecorder
              onSpeechResult={handleSpeechResult}
              isRecording={isRecording}
              setIsRecording={setIsRecording}
              setIsListening={setIsListening}
            />
            <div className="recording-status">
              {isListening && (
                <div className="listening-indicator">
                  <div className="pulse-dot"></div>
                  <span>Listening...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="chat-section">
          <ChatInterface
            messages={messages}
            currentMessage={currentMessage}
            setCurrentMessage={setCurrentMessage}
            onSendMessage={sendMessage}
            onKeyPress={handleKeyPress}
            messagesEndRef={messagesEndRef}
          />
          
          {/* Typing Animation */}
          {isAiTyping && (
            <div className="ai-typing-container">
              <div className="ai-message">
                <div className="ai-avatar">AI</div>
                <div className="message-bubble ai-bubble">
                  <TypingAnimation />
                </div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="error-message">
              <span>{error}</span>
              <button onClick={() => setError('')} className="error-close">×</button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Instructions */}
      <div className="interview-footer">
        <div className="instructions">
          <div className="instruction-item">
            <span className="instruction-icon">💬</span>
            <span><strong>Type your responses</strong> in the chat box below (always available)</span>
          </div>
          <div className="instruction-item">
            <span className="instruction-icon">🎤</span>
            <span><strong>Optional:</strong> Click the microphone to speak your answers</span>
          </div>
          <div className="instruction-item">
            <span className="instruction-icon">🤖</span>
            <span>The AI remembers everything and adapts questions accordingly</span>
          </div>
          <div className="instruction-item">
            <span className="instruction-icon">🔊</span>
            <span>AI responses are spoken aloud automatically</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;