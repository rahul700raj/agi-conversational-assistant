const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const Brain = require('./core/brain');
const MemorySystem = require('./core/memory');
const EmotionEngine = require('./core/emotions');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize core systems
const memorySystem = new MemorySystem();
const emotionEngine = new EmotionEngine();
const brain = new Brain(memorySystem, emotionEngine);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui', 'interface.html'));
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, userId = 'default' } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Process message through brain
    const response = await brain.process(message, userId);
    
    res.json({
      success: true,
      response: response.text,
      emotion: response.emotion,
      animation: response.animation,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Failed to process message',
      details: error.message 
    });
  }
});

// Memory endpoint
app.get('/api/memory/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const memory = memorySystem.getMemory(userId);
    res.json({ success: true, memory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Clear memory endpoint
app.delete('/api/memory/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    memorySystem.clearMemory(userId);
    res.json({ success: true, message: 'Memory cleared' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🤖 AGI Assistant running on http://localhost:${PORT}`);
  console.log(`🧠 Memory system initialized`);
  console.log(`💭 Emotion engine ready`);
  console.log(`🎨 Animation system loaded`);
});

module.exports = app;
