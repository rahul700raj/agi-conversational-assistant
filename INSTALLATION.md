# 📦 Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (comes with Node.js)
- **Git**
- **Google Gemini API Key** (Get it from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rahul700raj/agi-conversational-assistant.git
cd agi-conversational-assistant
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- `@google/generative-ai` - Google Gemini API client
- `express` - Web server framework
- `dotenv` - Environment variable management
- `cors` - Cross-origin resource sharing
- `body-parser` - Request body parsing
- `ws` - WebSocket support

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file and add your Google Gemini API key:

```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=3000
HOST=localhost
MEMORY_STORAGE=./data/memory.json
CONVERSATION_LIMIT=100
EMOTION_SENSITIVITY=0.7
DEFAULT_EMOTION=neutral
ANIMATION_FPS=60
CHARACTER_SPRITE_PATH=./public/assets/character/
```

### 4. Get Your Google Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key
5. Paste it in your `.env` file

### 5. Create Data Directory

```bash
mkdir data
```

This directory will store conversation memory.

### 6. Run the Application

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

### 7. Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the AGI Assistant interface with the animated character Aisha!

## 🔧 Troubleshooting

### Issue: "Cannot find module '@google/generative-ai'"

**Solution**: Run `npm install` again to ensure all dependencies are installed.

### Issue: "API key not valid"

**Solution**: 
1. Check that your API key is correctly copied in the `.env` file
2. Ensure there are no extra spaces or quotes around the key
3. Verify the key is active in Google AI Studio

### Issue: "Port 3000 already in use"

**Solution**: Change the PORT in your `.env` file to a different number (e.g., 3001, 8080)

### Issue: Memory not persisting

**Solution**: 
1. Ensure the `data` directory exists
2. Check file permissions for the data directory
3. Verify MEMORY_STORAGE path in `.env`

## 🚀 Advanced Configuration

### Custom Port

Change the PORT in `.env`:
```env
PORT=8080
```

### Adjust Memory Limit

Increase or decrease conversation history:
```env
CONVERSATION_LIMIT=200
```

### Emotion Sensitivity

Adjust how sensitive the emotion detection is (0.0 to 1.0):
```env
EMOTION_SENSITIVITY=0.8
```

## 📱 Mobile Access

To access from mobile devices on the same network:

1. Find your computer's local IP address:
   - **Windows**: `ipconfig`
   - **Mac/Linux**: `ifconfig` or `ip addr`

2. Update `.env`:
```env
HOST=0.0.0.0
```

3. Access from mobile:
```
http://YOUR_LOCAL_IP:3000
```

## 🐳 Docker Installation (Optional)

Coming soon! Docker support will be added in future updates.

## 📝 Next Steps

After installation:
1. Test the chat functionality
2. Try different emotions and animations
3. Explore the memory system
4. Customize the personality in `src/core/brain.js`
5. Add your own animations in `public/animation.js`

## 🆘 Need Help?

- Check the [README.md](README.md) for feature documentation
- Open an issue on GitHub
- Contact: rm2778643@gmail.com

Happy chatting with Aisha! 🤖✨
