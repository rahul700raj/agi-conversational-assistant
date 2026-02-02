# 🤖 AGI Conversational Assistant

An AGI-inspired conversational AI system with human-like memory, emotions, Google Gemini integration, and an animated girl interface.

## ✨ Features

- 🧠 **Human-like Memory System**: Stores and recalls conversations with context
- 💭 **Emotional Intelligence**: Understands and responds with appropriate emotions
- 🤖 **Google Gemini Integration**: Powered by advanced AI capabilities
- 👧 **Animated Girl Interface**: Interactive animated character that responds visually
- 💬 **Natural Conversations**: Context-aware dialogue system
- 📊 **Conversation Analytics**: Track and analyze interaction patterns
- 🎨 **Customizable Personality**: Adjust tone, style, and behavior

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/rahul700raj/agi-conversational-assistant.git
cd agi-conversational-assistant

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Google Gemini API key to .env

# Run the application
npm start
```

## 📁 Project Structure

```
agi-conversational-assistant/
├── src/
│   ├── core/
│   │   ├── memory.js          # Memory management system
│   │   ├── emotions.js        # Emotion processing engine
│   │   └── brain.js           # Core AI logic
│   ├── integrations/
│   │   └── gemini.js          # Google Gemini API integration
│   ├── ui/
│   │   ├── animation.js       # Animated character controller
│   │   └── interface.html     # Web interface
│   └── index.js               # Main application entry
├── public/
│   ├── assets/
│   │   └── character/         # Animation sprites
│   └── styles/
│       └── main.css
├── package.json
└── README.md
```

## 🔑 Environment Variables

Create a `.env` file with:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
MEMORY_STORAGE=./data/memory.json
```

## 🎯 Usage

1. Open your browser to `http://localhost:3000`
2. Start chatting with the animated assistant
3. The system will remember your conversations and respond with emotions

## 🧠 Memory System

The memory system stores:
- Conversation history
- User preferences
- Contextual information
- Emotional states
- Learning patterns

## 💡 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animation**: Canvas API / Live2D
- **AI**: Google Gemini API
- **Backend**: Node.js, Express
- **Storage**: JSON-based memory system

## 📝 License

MIT License - feel free to use and modify!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Created by Rahul Mishra - rm2778643@gmail.com
