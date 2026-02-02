# 🚀 Deployment Guide

This guide covers multiple deployment options for the AGI Conversational Assistant.

## 📋 Table of Contents

1. [GitHub Pages (Static Demo)](#github-pages)
2. [StackBlitz (Instant Online IDE)](#stackblitz)
3. [Vercel (Recommended)](#vercel)
4. [Netlify](#netlify)
5. [Render](#render)
6. [Railway](#railway)
7. [Heroku](#heroku)
8. [Local Development](#local-development)

---

## 🌐 GitHub Pages

**Best for**: Static demo version

### Live Demo
**URL**: https://rahul700raj.github.io/agi-conversational-assistant/

### Features
- ✅ Instant deployment
- ✅ No server required
- ✅ Client-side only
- ⚠️ Requires user to provide their own Gemini API key

### Setup
Already deployed! Just visit the URL above.

---

## 💻 StackBlitz

**Best for**: Quick testing and development

### Live IDE
**URL**: https://stackblitz.com/github/rahul700raj/agi-conversational-assistant

### Features
- ✅ Instant online IDE
- ✅ No local setup needed
- ✅ Live preview
- ✅ Full code editing

### How to Use
1. Click the StackBlitz URL
2. Wait for project to load
3. Add your Gemini API key in `.env`
4. Click "Run" to start the server

---

## ⚡ Vercel

**Best for**: Production deployment with serverless functions

### Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rahul700raj/agi-conversational-assistant)

### Manual Deployment

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd agi-conversational-assistant
vercel
```

4. **Add Environment Variables**
```bash
vercel env add GEMINI_API_KEY
```

5. **Deploy to Production**
```bash
vercel --prod
```

### Configuration
The `vercel.json` file is already configured.

---

## 🎯 Netlify

**Best for**: JAMstack deployment

### Deploy Button
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rahul700raj/agi-conversational-assistant)

### Manual Deployment

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Initialize**
```bash
cd agi-conversational-assistant
netlify init
```

4. **Deploy**
```bash
netlify deploy --prod
```

5. **Set Environment Variables**
```bash
netlify env:set GEMINI_API_KEY your_api_key_here
```

---

## 🎨 Render

**Best for**: Full-stack apps with databases

### Deploy Button
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/rahul700raj/agi-conversational-assistant)

### Manual Deployment

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: agi-assistant
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your API key
6. Click "Create Web Service"

---

## 🚂 Railway

**Best for**: Easy deployment with automatic CI/CD

### Deploy Button
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/rahul700raj/agi-conversational-assistant)

### Manual Deployment

1. **Install Railway CLI**
```bash
npm install -g @railway/cli
```

2. **Login**
```bash
railway login
```

3. **Initialize Project**
```bash
cd agi-conversational-assistant
railway init
```

4. **Add Environment Variables**
```bash
railway variables set GEMINI_API_KEY=your_api_key_here
```

5. **Deploy**
```bash
railway up
```

6. **Open in Browser**
```bash
railway open
```

---

## 💜 Heroku

**Best for**: Traditional PaaS deployment

### Prerequisites
- Heroku account
- Heroku CLI installed

### Deployment Steps

1. **Login to Heroku**
```bash
heroku login
```

2. **Create App**
```bash
cd agi-conversational-assistant
heroku create agi-assistant-app
```

3. **Set Environment Variables**
```bash
heroku config:set GEMINI_API_KEY=your_api_key_here
```

4. **Deploy**
```bash
git push heroku main
```

5. **Open App**
```bash
heroku open
```

### Procfile
Create a `Procfile` in the root:
```
web: npm start
```

---

## 🏠 Local Development

**Best for**: Development and testing

### Quick Start

1. **Clone Repository**
```bash
git clone https://github.com/rahul700raj/agi-conversational-assistant.git
cd agi-conversational-assistant
```

2. **Install Dependencies**
```bash
npm install
```

3. **Setup Environment**
```bash
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY
```

4. **Run Development Server**
```bash
npm run dev
```

5. **Open Browser**
```
http://localhost:3000
```

---

## 🔑 Environment Variables

All deployment platforms require these environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | ✅ Yes |
| `PORT` | Server port (auto-set by most platforms) | ⚠️ Optional |
| `NODE_ENV` | Environment (production/development) | ⚠️ Optional |
| `MEMORY_STORAGE` | Path to memory file | ⚠️ Optional |

### Getting Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with Google account
3. Click "Create API Key"
4. Copy the key
5. Add to your deployment platform

---

## 📊 Comparison Table

| Platform | Free Tier | Setup Time | Best For |
|----------|-----------|------------|----------|
| **GitHub Pages** | ✅ Unlimited | 1 min | Static demo |
| **StackBlitz** | ✅ Yes | 30 sec | Quick testing |
| **Vercel** | ✅ Generous | 2 min | Production |
| **Netlify** | ✅ Good | 2 min | JAMstack |
| **Render** | ✅ Limited | 3 min | Full-stack |
| **Railway** | ✅ $5 credit | 2 min | Easy deploy |
| **Heroku** | ⚠️ Paid only | 5 min | Traditional |

---

## 🔧 Troubleshooting

### Common Issues

**1. API Key Not Working**
- Verify key is correct
- Check if key has proper permissions
- Ensure no extra spaces in .env file

**2. Port Already in Use**
- Change PORT in environment variables
- Kill existing process on that port

**3. Memory Not Persisting**
- Check if platform supports file system writes
- Consider using a database for production

**4. Build Failures**
- Ensure Node version is 18+
- Check all dependencies are installed
- Review build logs for specific errors

---

## 🎯 Recommended Deployment

For **production use**, we recommend:

1. **Vercel** - Best overall experience
2. **Railway** - Easiest setup
3. **Render** - Good for full-stack needs

For **quick demo**:
- Use GitHub Pages or StackBlitz

---

## 📞 Support

Need help with deployment?
- Check [INSTALLATION.md](INSTALLATION.md)
- Open an issue on GitHub
- Email: rm2778643@gmail.com

---

**Happy Deploying! 🚀**
