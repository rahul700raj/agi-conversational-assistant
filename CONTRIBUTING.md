# 🤝 Contributing to AGI Conversational Assistant

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🌟 Ways to Contribute

1. **Report Bugs**: Submit detailed bug reports
2. **Suggest Features**: Propose new features or improvements
3. **Write Code**: Submit pull requests with fixes or features
4. **Improve Documentation**: Enhance README, guides, or code comments
5. **Share Feedback**: Provide user experience feedback

## 🐛 Reporting Bugs

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to recreate the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, Node version, browser, etc.
- **Screenshots**: If applicable
- **Error Messages**: Full error logs

**Example Bug Report**:
```markdown
**Bug**: Animation freezes after 5 minutes

**Steps to Reproduce**:
1. Open the application
2. Chat for 5 minutes
3. Notice animation stops

**Expected**: Animation should continue
**Actual**: Animation freezes
**Environment**: Windows 11, Node 18.0, Chrome 120
```

## 💡 Suggesting Features

Feature requests should include:

- **Use Case**: Why is this feature needed?
- **Description**: What should it do?
- **Benefits**: How does it improve the project?
- **Implementation Ideas**: (Optional) How could it work?

## 🔧 Development Setup

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/agi-conversational-assistant.git
cd agi-conversational-assistant
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/rahul700raj/agi-conversational-assistant.git
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 5. Install Dependencies

```bash
npm install
```

### 6. Make Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Test your changes thoroughly

### 7. Commit Changes

```bash
git add .
git commit -m "Add: Brief description of changes"
```

**Commit Message Format**:
- `Add:` New feature
- `Fix:` Bug fix
- `Update:` Improvements to existing features
- `Docs:` Documentation changes
- `Refactor:` Code refactoring
- `Test:` Adding tests

### 8. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 9. Create Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template
5. Submit!

## 📝 Code Style Guidelines

### JavaScript

```javascript
// Use const/let, not var
const userName = 'Aisha';
let messageCount = 0;

// Use arrow functions
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Use async/await
async function fetchData() {
  try {
    const response = await api.getData();
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Add comments for complex logic
// Calculate emotion score based on keyword frequency
const emotionScore = keywords.reduce((score, keyword) => {
  return score + (text.includes(keyword) ? 1 : 0);
}, 0);
```

### File Organization

```
src/
├── core/           # Core logic (brain, memory, emotions)
├── integrations/   # External API integrations
├── ui/             # User interface files
└── utils/          # Utility functions (future)
```

### Naming Conventions

- **Files**: `camelCase.js` (e.g., `memorySystem.js`)
- **Classes**: `PascalCase` (e.g., `EmotionEngine`)
- **Functions**: `camelCase` (e.g., `analyzeEmotion`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_MEMORY_SIZE`)
- **Variables**: `camelCase` (e.g., `userName`)

## 🧪 Testing

Before submitting:

1. **Manual Testing**: Test all affected features
2. **Error Handling**: Verify error cases work
3. **Cross-browser**: Test in Chrome, Firefox, Safari
4. **Mobile**: Test responsive design
5. **Performance**: Check for memory leaks or slowdowns

## 📚 Documentation

When adding features:

1. Update README.md if needed
2. Add JSDoc comments to functions
3. Update FEATURES.md for new capabilities
4. Include usage examples

**JSDoc Example**:
```javascript
/**
 * Analyzes text for emotional content
 * @param {string} text - The text to analyze
 * @returns {string} The detected emotion
 */
analyze(text) {
  // Implementation
}
```

## 🎨 Adding New Animations

To add a new character animation:

1. Open `public/animation.js`
2. Add a new draw method:

```javascript
drawYourAnimation() {
  const centerX = this.canvas.width / 2;
  const centerY = this.canvas.height / 2;
  
  // Your animation code here
  // Draw head, body, arms, etc.
}
```

3. Add to the switch statement in `draw()`:

```javascript
case 'your_animation':
  this.drawYourAnimation();
  break;
```

4. Update emotion mapping in `src/core/brain.js`:

```javascript
const animationMap = {
  // ... existing animations
  your_emotion: 'your_animation'
};
```

## 🔍 Code Review Process

Pull requests will be reviewed for:

- **Functionality**: Does it work as intended?
- **Code Quality**: Is it clean and maintainable?
- **Performance**: Does it impact performance?
- **Documentation**: Is it well-documented?
- **Testing**: Has it been tested?

## 🚀 Release Process

1. Features are merged to `main` branch
2. Version is bumped in `package.json`
3. CHANGELOG is updated
4. Release is tagged
5. NPM package is published (future)

## 📋 Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] Tested in multiple browsers
- [ ] No console errors

## Screenshots
(If applicable)

## Additional Notes
Any additional information
```

## 🎯 Priority Areas

We especially welcome contributions in:

1. **New Animations**: More character expressions
2. **Emotion Detection**: Improved sentiment analysis
3. **Performance**: Optimization improvements
4. **Mobile Experience**: Better mobile UX
5. **Accessibility**: Screen reader support, keyboard navigation
6. **Internationalization**: More language support
7. **Testing**: Unit and integration tests
8. **Documentation**: Tutorials, examples, guides

## 💬 Communication

- **GitHub Issues**: For bugs and features
- **Pull Requests**: For code contributions
- **Email**: rm2778643@gmail.com for questions

## 📜 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow
- Follow project guidelines

## 🏆 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## ❓ Questions?

If you have questions:
1. Check existing documentation
2. Search closed issues
3. Open a new issue
4. Email the maintainer

Thank you for contributing! 🎉

---

**Happy Coding!** 🚀
