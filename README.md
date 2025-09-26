# AI-Based Interview Application

A comprehensive AI-powered interview system with real-time voice interaction, webcam support, and intelligent conversation memory using Google Gemini API.

## 🚀 Features

### Backend Features:
- **Gemini AI Integration**: Uses Google's Gemini API for intelligent interview conversations
- **RAG (Retrieval-Augmented Generation)**: AI remembers all past interview context and adapts questions accordingly
- **Real-time Communication**: WebSocket support for instant messaging
- **Interview Memory System**: Tracks conversation phases and topics
- **Session Management**: Each interview session maintains its own context

### Frontend Features:
- **Chat Interface**: Clean, modern chat UI showing AI and user messages
- **Voice Recording**: Speech-to-text functionality for natural conversation
- **Text-to-Speech**: AI responses are converted to speech automatically
- **Webcam Integration**: Live video feed during interviews
- **Typing Animation**: Visual feedback when AI is processing responses
- **Responsive Design**: Works on desktop and mobile devices
- **Interview Phases**: Visual indicators for different interview stages

### User Experience:
- **Login System**: Secure authentication (currently hardcoded for demo)
- **Dashboard**: Overview of interview stats and quick access to AI interview
- **Real-time Mock Interview**: Simulates actual interview conditions
- **Adaptive Questions**: AI adjusts difficulty and topics based on responses
- **Professional Interface**: Modern, clean design with smooth animations

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Google Gemini API key

### 1. Clone and Install Dependencies

```bash
# Backend setup
cd backend
npm install

# Frontend setup
cd ..
npm install
```

### 2. Environment Configuration

The `.env` file contains:

```env
# Environment Variables
GEMINI_API_KEY="YOUR_ACTUAL_GEMINI_API_KEY_HERE"
NODE_ENV=development
PORT=3001
CORS_ORIGIN=http://localhost:5174
```

**Important**: Replace the API key with your actual Google Gemini API key.

### 3. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key
5. Replace the placeholder in your `.env` file

### 4. Start the Application

#### Start Backend Server:
```bash
cd backend
npm run dev
```
The backend will run on http://localhost:3001

#### Start Frontend Server:
```bash
npm run dev
```
The frontend will run on http://localhost:5174

### 5. Access the Application

1. Open your browser and go to http://localhost:5174
2. Login with any username/password (authentication is hardcoded for demo)
3. From the dashboard, click "AI Interview" or "Start AI Interview"
4. Allow microphone and camera permissions when prompted
5. Start your AI-powered mock interview!

## 🎯 How to Use

### Starting an Interview:
1. **Login**: Use any credentials to access the dashboard
2. **Navigate**: Click the "AI Interview" button in sidebar or "Start AI Interview" banner
3. **Permissions**: Allow microphone and camera access
4. **Begin**: The AI will greet you and start the interview

### During the Interview:
- **Voice Input**: Click the microphone button and speak your answers
- **Text Input**: Type responses in the chat box
- **AI Responses**: Listen to AI questions (auto-played) or read them in chat
- **Webcam**: Your video feed shows during the interview for realistic simulation
- **Real-time**: AI adapts questions based on your previous responses

### Interview Phases:
1. **Introduction**: Basic introductory questions
2. **Technical**: Skills and experience-focused questions  
3. **Behavioral**: Situational and behavioral questions
4. **Closing**: Final questions and wrap-up

## 🏗️ Technical Architecture

### Backend Stack:
- **Express.js**: Web framework
- **Socket.io**: Real-time communication
- **Google Gemini API**: AI conversation engine
- **Node.js**: Runtime environment

### Frontend Stack:
- **React**: UI framework
- **Socket.io Client**: Real-time client
- **Web Speech API**: Voice recognition and synthesis
- **MediaDevices API**: Webcam access
- **React Router**: Navigation

### Key Components:
- **InterviewPage**: Main interview interface
- **ChatInterface**: Message display and input
- **VoiceRecorder**: Speech-to-text functionality
- **WebcamCapture**: Video feed management
- **TypingAnimation**: AI thinking indicator

---

**Note**: This application uses the Google Gemini API. Make sure you have an active API key and understand the usage limits and pricing associated with the service.  
- **Database:** [PostgreSQL](https://www.postgresql.org/) (Serverless via [Neon](https://neon.tech/))  
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)  

---

## 📦 Getting Started  

Follow these steps to set up the project locally:  

```bash
# Clone the repository
git clone https://github.com/modamaan/Ai-mock-Interview.git  

# Navigate into the project directory
cd ai-mock-interview  

# Install dependencies
npm install   # or yarn install  

# Start the development server
npm run dev   # or yarn dev  
