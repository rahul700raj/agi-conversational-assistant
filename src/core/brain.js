const GeminiIntegration = require('../integrations/gemini');

class Brain {
  constructor(memorySystem, emotionEngine) {
    this.memory = memorySystem;
    this.emotions = emotionEngine;
    this.gemini = new GeminiIntegration();
    this.personality = {
      name: 'Aisha',
      traits: ['friendly', 'helpful', 'empathetic', 'curious'],
      style: 'conversational'
    };
  }

  async process(message, userId) {
    try {
      // Retrieve conversation history
      const history = this.memory.getConversation(userId);
      
      // Analyze emotion in user's message
      const userEmotion = this.emotions.analyze(message);
      
      // Build context for Gemini
      const context = this.buildContext(history, userEmotion);
      
      // Get response from Gemini
      const geminiResponse = await this.gemini.chat(message, context);
      
      // Determine appropriate emotion for response
      const responseEmotion = this.emotions.determineResponse(
        userEmotion, 
        geminiResponse
      );
      
      // Select animation based on emotion
      const animation = this.selectAnimation(responseEmotion);
      
      // Store in memory
      this.memory.addToConversation(userId, {
        user: message,
        assistant: geminiResponse,
        userEmotion,
        responseEmotion,
        timestamp: new Date().toISOString()
      });
      
      return {
        text: geminiResponse,
        emotion: responseEmotion,
        animation: animation
      };
    } catch (error) {
      console.error('Brain processing error:', error);
      return {
        text: 'I apologize, I encountered an error processing your message.',
        emotion: 'apologetic',
        animation: 'sad'
      };
    }
  }

  buildContext(history, userEmotion) {
    const recentHistory = history.slice(-5); // Last 5 exchanges
    
    let context = `You are ${this.personality.name}, an AI assistant with the following traits: ${this.personality.traits.join(', ')}.\n\n`;
    
    if (recentHistory.length > 0) {
      context += 'Recent conversation:\n';
      recentHistory.forEach(entry => {
        context += `User: ${entry.user}\n`;
        context += `You: ${entry.assistant}\n`;
      });
    }
    
    context += `\nUser's current emotional state: ${userEmotion}\n`;
    context += 'Respond naturally and empathetically, matching the conversation tone.\n';
    
    return context;
  }

  selectAnimation(emotion) {
    const animationMap = {
      happy: 'smile',
      excited: 'jump',
      sad: 'sad',
      neutral: 'idle',
      thinking: 'think',
      surprised: 'gasp',
      apologetic: 'bow',
      confused: 'tilt_head'
    };
    
    return animationMap[emotion] || 'idle';
  }

  updatePersonality(traits) {
    this.personality.traits = traits;
  }
}

module.exports = Brain;
