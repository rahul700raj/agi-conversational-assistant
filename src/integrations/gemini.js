const { GoogleGenerativeAI } = require('@google/generative-ai');

class GeminiIntegration {
  constructor() {
    this.apiKey = process.env.GEMINI_API_KEY;
    
    if (!this.apiKey) {
      console.warn('⚠️  GEMINI_API_KEY not found. Please set it in .env file');
    }
    
    this.genAI = new GoogleGenerativeAI(this.apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
    this.chatSessions = new Map();
  }

  async chat(message, context = '') {
    try {
      if (!this.apiKey) {
        return 'I need a Gemini API key to function. Please configure GEMINI_API_KEY in your .env file.';
      }

      // Create prompt with context
      const prompt = context ? `${context}\n\nUser: ${message}` : message;

      // Generate response
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return text;
    } catch (error) {
      console.error('Gemini API error:', error);
      
      if (error.message.includes('API key')) {
        return 'There seems to be an issue with the API key. Please check your configuration.';
      }
      
      return 'I apologize, but I encountered an error processing your request. Please try again.';
    }
  }

  async startChatSession(userId, history = []) {
    try {
      const chat = this.model.startChat({
        history: history.map(entry => ({
          role: entry.role || 'user',
          parts: [{ text: entry.text }]
        })),
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.9,
          topP: 0.8,
          topK: 40
        }
      });

      this.chatSessions.set(userId, chat);
      return chat;
    } catch (error) {
      console.error('Error starting chat session:', error);
      throw error;
    }
  }

  async sendMessage(userId, message) {
    try {
      let chat = this.chatSessions.get(userId);
      
      if (!chat) {
        chat = await this.startChatSession(userId);
      }

      const result = await chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  clearSession(userId) {
    this.chatSessions.delete(userId);
  }

  async generateWithImage(prompt, imageData) {
    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
      
      const result = await model.generateContent([
        prompt,
        {
          inlineData: {
            data: imageData,
            mimeType: 'image/jpeg'
          }
        }
      ]);

      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating with image:', error);
      throw error;
    }
  }
}

module.exports = GeminiIntegration;
