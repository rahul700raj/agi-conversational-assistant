const fs = require('fs');
const path = require('path');

class MemorySystem {
  constructor() {
    this.memoryPath = process.env.MEMORY_STORAGE || './data/memory.json';
    this.conversationLimit = parseInt(process.env.CONVERSATION_LIMIT) || 100;
    this.memory = this.loadMemory();
  }

  loadMemory() {
    try {
      const dir = path.dirname(this.memoryPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      if (fs.existsSync(this.memoryPath)) {
        const data = fs.readFileSync(this.memoryPath, 'utf8');
        return JSON.parse(data);
      }
    } catch (error) {
      console.error('Error loading memory:', error);
    }
    
    return {
      users: {},
      globalContext: {
        createdAt: new Date().toISOString(),
        totalConversations: 0
      }
    };
  }

  saveMemory() {
    try {
      fs.writeFileSync(
        this.memoryPath, 
        JSON.stringify(this.memory, null, 2),
        'utf8'
      );
    } catch (error) {
      console.error('Error saving memory:', error);
    }
  }

  getConversation(userId) {
    if (!this.memory.users[userId]) {
      this.memory.users[userId] = {
        conversations: [],
        preferences: {},
        metadata: {
          firstInteraction: new Date().toISOString(),
          totalMessages: 0
        }
      };
    }
    return this.memory.users[userId].conversations;
  }

  addToConversation(userId, entry) {
    const userMemory = this.memory.users[userId];
    
    if (!userMemory) {
      this.getConversation(userId);
    }

    this.memory.users[userId].conversations.push(entry);
    this.memory.users[userId].metadata.totalMessages++;
    this.memory.globalContext.totalConversations++;

    // Limit conversation history
    if (this.memory.users[userId].conversations.length > this.conversationLimit) {
      this.memory.users[userId].conversations = 
        this.memory.users[userId].conversations.slice(-this.conversationLimit);
    }

    this.saveMemory();
  }

  getMemory(userId) {
    return this.memory.users[userId] || null;
  }

  clearMemory(userId) {
    if (this.memory.users[userId]) {
      delete this.memory.users[userId];
      this.saveMemory();
    }
  }

  setPreference(userId, key, value) {
    if (!this.memory.users[userId]) {
      this.getConversation(userId);
    }
    this.memory.users[userId].preferences[key] = value;
    this.saveMemory();
  }

  getPreference(userId, key) {
    return this.memory.users[userId]?.preferences[key];
  }

  searchMemory(userId, query) {
    const conversations = this.getConversation(userId);
    return conversations.filter(entry => 
      entry.user.toLowerCase().includes(query.toLowerCase()) ||
      entry.assistant.toLowerCase().includes(query.toLowerCase())
    );
  }

  getStats() {
    return {
      totalUsers: Object.keys(this.memory.users).length,
      totalConversations: this.memory.globalContext.totalConversations,
      createdAt: this.memory.globalContext.createdAt
    };
  }
}

module.exports = MemorySystem;
