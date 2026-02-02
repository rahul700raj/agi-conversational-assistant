# 🤖 AGI Conversational Assistant

An AGI-inspired conversational AI system with human-like memory, emotions, Google Gemini integration, and an animated girl interface.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rahul700raj/agi-conversational-assistant)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rahul700raj/agi-conversational-assistant)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/rahul700raj/agi-conversational-assistant)

## 🌐 Live Demos

- **GitHub Pages Demo**: https://rahul700raj.github.io/agi-conversational-assistant/
- **StackBlitz IDE**: https://stackblitz.com/github/rahul700raj/agi-conversational-assistant
- **Repository**: https://github.com/rahul700raj/agi-conversational-assistant

## ✨ Features

- 🧠 **Human-like Memory System**: Stores and recalls conversations with context
- 💭 **Emotional Intelligence**: Understands and responds with appropriate emotions
- 🤖 **Google Gemini Integration**: Powered by advanced AI capabilities
- 👧 **Animated Girl Interface**: Interactive animated character that responds visually
- 💬 **Natural Conversations**: Context-aware dialogue system
- 📊 **Conversation Analytics**: Track and analyze interaction patterns
- 🎨 **Customizable Personality**: Adjust tone, style, and behavior

## 🚀 Quick Start

### Option 1: Try Online (Fastest)

Click any deployment button above or visit:
- **Live Demo**: https://rahul700raj.github.io/agi-conversational-assistant/
- **StackBlitz**: https://stackblitz.com/github/rahul700raj/agi-conversational-assistant

### Option 2: Local Installation

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

Open your browser to `http://localhost:3000`

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
│   │   └── interface.html     # Web interface
│   └── index.js               # Main application entry
├── public/
│   ├── assets/
│   │   └── character/         # Animation sprites
│   ├── styles/
│   │   └── main.css          # Styling
│   └── animation.js          # Character animations
├── docs/
│   └── index.html            # GitHub Pages demo
├── package.json
├── vercel.json               # Vercel deployment config
├── netlify.toml              # Netlify deployment config
├── render.yaml               # Render deployment config
└── README.md
```

## 🔑 Environment Variables

Create a `.env` file with:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
MEMORY_STORAGE=./data/memory.json
```

**Get your Gemini API key**: https://makersuite.google.com/app/apikey

## 🎯 Usage

1. Open your browser to the application URL
2. Start chatting with the animated assistant
3. The system will remember your conversations and respond with emotions
4. Watch Aisha (the animated character) react to different emotions

## 🧠 Memory System

The memory system stores:
- Conversation history
- User preferences
- Contextual information
- Emotional states
- Learning patterns

## 💡 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animation**: Canvas API
- **AI**: Google Gemini API
- **Backend**: Node.js, Express
- **Storage**: JSON-based memory system

## 📚 Documentation

- [Installation Guide](INSTALLATION.md) - Detailed setup instructions
- [Features Documentation](FEATURES.md) - Complete feature list
- [Deployment Guide](DEPLOYMENT.md) - Multiple deployment options
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute

## 🚀 Deployment Options

Multiple deployment options available:

| Platform | Status | Link |
|----------|--------|------|
| GitHub Pages | ✅ Live | [Demo](https://rahul700raj.github.io/agi-conversational-assistant/) |
| StackBlitz | ✅ Live | [IDE](https://stackblitz.com/github/rahul700raj/agi-conversational-assistant) |
| Vercel | 🚀 Ready | [Deploy](https://vercel.com/new/clone?repository-url=https://github.com/rahul700raj/agi-conversational-assistant) |
| Netlify | 🚀 Ready | [Deploy](https://app.netlify.com/start/deploy?repository=https://github.com/rahul700raj/agi-conversational-assistant) |
| Railway | 🚀 Ready | [Deploy](https://railway.app/new/template?template=https://github.com/rahul700raj/agi-conversational-assistant) |
| Render | 🚀 Ready | [Deploy](https://render.com/deploy?repo=https://github.com/rahul700raj/agi-conversational-assistant) |

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 🎨 Character Animations

Aisha has 8+ different animations:
- 🧍 Idle - Default breathing animation
- 😊 Smile - Happy expression
- 🤔 Think - Thoughtful pose
- 😢 Sad - Sad expression
- 🎉 Jump - Excited animation
- 😮 Gasp - Surprised reaction
- 🙏 Bow - Apologetic gesture
- 🤷 Tilt Head - Confused look

## 🔮 Upcoming Features

- [ ] Voice Input/Output
- [ ] Image Understanding (Gemini Vision)
- [ ] Multi-user Support
- [ ] Custom Character Skins
- [ ] Plugin System
- [ ] Export Conversations
- [ ] Advanced Analytics Dashboard
- [ ] Mobile Apps (iOS/Android)

## 📝 License

MIT License - feel free to use and modify!

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📧 Contact

Created by **Rahul Mishra**
- Email: rm2778643@gmail.com
- GitHub: [@rahul700raj](https://github.com/rahul700raj)

## 🌟 Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

**Built with ❤️ using Google Gemini AI**
