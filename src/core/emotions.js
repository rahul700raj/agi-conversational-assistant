class EmotionEngine {
  constructor() {
    this.sensitivity = parseFloat(process.env.EMOTION_SENSITIVITY) || 0.7;
    this.emotionKeywords = {
      happy: ['happy', 'joy', 'excited', 'great', 'wonderful', 'amazing', 'love', 'awesome', '😊', '😄', '🎉'],
      sad: ['sad', 'unhappy', 'depressed', 'down', 'terrible', 'awful', 'cry', '😢', '😭', '☹️'],
      angry: ['angry', 'mad', 'furious', 'annoyed', 'frustrated', 'hate', '😠', '😡', '🤬'],
      surprised: ['wow', 'amazing', 'surprised', 'shocked', 'unbelievable', '😮', '😲', '🤯'],
      confused: ['confused', 'don\'t understand', 'what', 'huh', 'unclear', '🤔', '😕'],
      neutral: ['okay', 'fine', 'alright', 'sure', 'yes', 'no']
    };
  }

  analyze(text) {
    const lowerText = text.toLowerCase();
    const emotionScores = {};

    // Calculate scores for each emotion
    for (const [emotion, keywords] of Object.entries(this.emotionKeywords)) {
      let score = 0;
      keywords.forEach(keyword => {
        if (lowerText.includes(keyword)) {
          score += 1;
        }
      });
      emotionScores[emotion] = score;
    }

    // Find dominant emotion
    let maxScore = 0;
    let dominantEmotion = 'neutral';

    for (const [emotion, score] of Object.entries(emotionScores)) {
      if (score > maxScore) {
        maxScore = score;
        dominantEmotion = emotion;
      }
    }

    // Check for question marks (curiosity)
    if (text.includes('?')) {
      dominantEmotion = 'curious';
    }

    return dominantEmotion;
  }

  determineResponse(userEmotion, responseText) {
    // Mirror or complement user's emotion
    const emotionMap = {
      happy: 'happy',
      sad: 'empathetic',
      angry: 'calm',
      surprised: 'excited',
      confused: 'helpful',
      curious: 'thinking',
      neutral: 'neutral'
    };

    let responseEmotion = emotionMap[userEmotion] || 'neutral';

    // Analyze response text for emotion cues
    const responseAnalysis = this.analyze(responseText);
    
    // Blend emotions
    if (responseAnalysis !== 'neutral') {
      responseEmotion = responseAnalysis;
    }

    return responseEmotion;
  }

  getEmotionIntensity(text) {
    // Count exclamation marks and caps
    const exclamations = (text.match(/!/g) || []).length;
    const capsRatio = (text.match(/[A-Z]/g) || []).length / text.length;
    
    let intensity = 'low';
    
    if (exclamations > 2 || capsRatio > 0.5) {
      intensity = 'high';
    } else if (exclamations > 0 || capsRatio > 0.2) {
      intensity = 'medium';
    }

    return intensity;
  }

  generateEmotionalResponse(emotion, intensity = 'medium') {
    const responses = {
      happy: {
        low: 'I\'m glad to hear that!',
        medium: 'That\'s wonderful! 😊',
        high: 'That\'s absolutely amazing! I\'m so happy for you! 🎉'
      },
      sad: {
        low: 'I understand how you feel.',
        medium: 'I\'m sorry to hear that. I\'m here for you.',
        high: 'I\'m really sorry you\'re going through this. Please know I\'m here to help.'
      },
      excited: {
        low: 'That sounds interesting!',
        medium: 'That\'s exciting! 😄',
        high: 'Wow! That\'s incredibly exciting! 🚀'
      },
      neutral: {
        low: 'I see.',
        medium: 'Understood.',
        high: 'Got it!'
      }
    };

    return responses[emotion]?.[intensity] || responses.neutral.medium;
  }
}

module.exports = EmotionEngine;
