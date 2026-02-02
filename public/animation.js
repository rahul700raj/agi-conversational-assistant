// Character Animation System
class CharacterAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.currentAnimation = 'idle';
    this.frame = 0;
    this.animationSpeed = 5;
    
    this.setupCanvas();
    this.startAnimationLoop();
  }

  setupCanvas() {
    this.canvas.width = 300;
    this.canvas.height = 400;
  }

  startAnimationLoop() {
    const animate = () => {
      this.frame++;
      this.draw();
      requestAnimationFrame(animate);
    };
    animate();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw based on current animation
    switch(this.currentAnimation) {
      case 'idle':
        this.drawIdle();
        break;
      case 'smile':
        this.drawSmile();
        break;
      case 'think':
        this.drawThink();
        break;
      case 'sad':
        this.drawSad();
        break;
      case 'jump':
        this.drawJump();
        break;
      case 'gasp':
        this.drawGasp();
        break;
      case 'bow':
        this.drawBow();
        break;
      case 'tilt_head':
        this.drawTiltHead();
        break;
      default:
        this.drawIdle();
    }
  }

  drawIdle() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const breathe = Math.sin(this.frame * 0.05) * 3;

    // Head
    this.ctx.fillStyle = '#FFD1DC';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 50 + breathe, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Hair
    this.ctx.fillStyle = '#4A4A4A';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 70 + breathe, 65, Math.PI, Math.PI * 2);
    this.ctx.fill();

    // Eyes
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.beginPath();
    this.ctx.arc(centerX - 20, centerY - 60 + breathe, 5, 0, Math.PI * 2);
    this.ctx.arc(centerX + 20, centerY - 60 + breathe, 5, 0, Math.PI * 2);
    this.ctx.fill();

    // Smile
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 40 + breathe, 20, 0, Math.PI);
    this.ctx.stroke();

    // Body
    this.ctx.fillStyle = '#667eea';
    this.ctx.fillRect(centerX - 40, centerY + 20 + breathe, 80, 100);

    // Arms
    this.ctx.strokeStyle = '#FFD1DC';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - 40, centerY + 30 + breathe);
    this.ctx.lineTo(centerX - 70, centerY + 80 + breathe);
    this.ctx.moveTo(centerX + 40, centerY + 30 + breathe);
    this.ctx.lineTo(centerX + 70, centerY + 80 + breathe);
    this.ctx.stroke();
  }

  drawSmile() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const bounce = Math.abs(Math.sin(this.frame * 0.1)) * 10;

    // Head
    this.ctx.fillStyle = '#FFD1DC';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 50 - bounce, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Hair
    this.ctx.fillStyle = '#4A4A4A';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 70 - bounce, 65, Math.PI, Math.PI * 2);
    this.ctx.fill();

    // Happy eyes
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(centerX - 20, centerY - 60 - bounce, 8, 0, Math.PI);
    this.ctx.arc(centerX + 20, centerY - 60 - bounce, 8, 0, Math.PI);
    this.ctx.stroke();

    // Big smile
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 35 - bounce, 25, 0, Math.PI);
    this.ctx.stroke();

    // Body
    this.ctx.fillStyle = '#667eea';
    this.ctx.fillRect(centerX - 40, centerY + 20, 80, 100);

    // Raised arms
    this.ctx.strokeStyle = '#FFD1DC';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - 40, centerY + 30);
    this.ctx.lineTo(centerX - 60, centerY);
    this.ctx.moveTo(centerX + 40, centerY + 30);
    this.ctx.lineTo(centerX + 60, centerY);
    this.ctx.stroke();
  }

  drawThink() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    // Head tilted
    this.ctx.save();
    this.ctx.translate(centerX, centerY - 50);
    this.ctx.rotate(0.1);
    
    this.ctx.fillStyle = '#FFD1DC';
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Hair
    this.ctx.fillStyle = '#4A4A4A';
    this.ctx.beginPath();
    this.ctx.arc(0, -20, 65, Math.PI, Math.PI * 2);
    this.ctx.fill();

    // Thinking eyes
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.beginPath();
    this.ctx.arc(-20, -10, 4, 0, Math.PI * 2);
    this.ctx.arc(20, -10, 4, 0, Math.PI * 2);
    this.ctx.fill();

    // Thinking mouth
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(-15, 10);
    this.ctx.lineTo(15, 10);
    this.ctx.stroke();

    this.ctx.restore();

    // Thought bubble
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.ctx.beginPath();
    this.ctx.arc(centerX + 80, centerY - 100, 30, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(centerX + 60, centerY - 70, 10, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(centerX + 50, centerY - 60, 5, 0, Math.PI * 2);
    this.ctx.fill();

    // Body
    this.ctx.fillStyle = '#667eea';
    this.ctx.fillRect(centerX - 40, centerY + 20, 80, 100);

    // Hand on chin
    this.ctx.strokeStyle = '#FFD1DC';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX + 40, centerY + 30);
    this.ctx.lineTo(centerX + 30, centerY - 20);
    this.ctx.stroke();
  }

  drawSad() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    // Head
    this.ctx.fillStyle = '#FFD1DC';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 50, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Hair
    this.ctx.fillStyle = '#4A4A4A';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 70, 65, Math.PI, Math.PI * 2);
    this.ctx.fill();

    // Sad eyes
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - 25, centerY - 65);
    this.ctx.lineTo(centerX - 15, centerY - 60);
    this.ctx.moveTo(centerX + 15, centerY - 60);
    this.ctx.lineTo(centerX + 25, centerY - 65);
    this.ctx.stroke();

    // Sad mouth
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 25, 20, Math.PI, 0);
    this.ctx.stroke();

    // Tear
    this.ctx.fillStyle = '#3498DB';
    this.ctx.beginPath();
    this.ctx.arc(centerX - 25, centerY - 50, 3, 0, Math.PI * 2);
    this.ctx.fill();

    // Body
    this.ctx.fillStyle = '#667eea';
    this.ctx.fillRect(centerX - 40, centerY + 20, 80, 100);

    // Drooping arms
    this.ctx.strokeStyle = '#FFD1DC';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - 40, centerY + 30);
    this.ctx.lineTo(centerX - 50, centerY + 90);
    this.ctx.moveTo(centerX + 40, centerY + 30);
    this.ctx.lineTo(centerX + 50, centerY + 90);
    this.ctx.stroke();
  }

  drawJump() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const jump = Math.abs(Math.sin(this.frame * 0.15)) * 40;

    // Head
    this.ctx.fillStyle = '#FFD1DC';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 50 - jump, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Hair
    this.ctx.fillStyle = '#4A4A4A';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 70 - jump, 65, Math.PI, Math.PI * 2);
    this.ctx.fill();

    // Excited eyes
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.beginPath();
    this.ctx.arc(centerX - 20, centerY - 60 - jump, 7, 0, Math.PI * 2);
    this.ctx.arc(centerX + 20, centerY - 60 - jump, 7, 0, Math.PI * 2);
    this.ctx.fill();

    // Open mouth
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 35 - jump, 15, 0, Math.PI);
    this.ctx.fill();

    // Body
    this.ctx.fillStyle = '#667eea';
    this.ctx.fillRect(centerX - 40, centerY + 20 - jump, 80, 100);

    // Arms up
    this.ctx.strokeStyle = '#FFD1DC';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - 40, centerY + 30 - jump);
    this.ctx.lineTo(centerX - 70, centerY - 10 - jump);
    this.ctx.moveTo(centerX + 40, centerY + 30 - jump);
    this.ctx.lineTo(centerX + 70, centerY - 10 - jump);
    this.ctx.stroke();
  }

  drawGasp() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    // Head
    this.ctx.fillStyle = '#FFD1DC';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 50, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Hair
    this.ctx.fillStyle = '#4A4A4A';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 70, 65, Math.PI, Math.PI * 2);
    this.ctx.fill();

    // Wide eyes
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.beginPath();
    this.ctx.arc(centerX - 20, centerY - 60, 8, 0, Math.PI * 2);
    this.ctx.arc(centerX + 20, centerY - 60, 8, 0, Math.PI * 2);
    this.ctx.fill();

    // O mouth
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY - 35, 12, 0, Math.PI * 2);
    this.ctx.stroke();

    // Body
    this.ctx.fillStyle = '#667eea';
    this.ctx.fillRect(centerX - 40, centerY + 20, 80, 100);

    // Surprised arms
    this.ctx.strokeStyle = '#FFD1DC';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - 40, centerY + 30);
    this.ctx.lineTo(centerX - 80, centerY + 40);
    this.ctx.moveTo(centerX + 40, centerY + 30);
    this.ctx.lineTo(centerX + 80, centerY + 40);
    this.ctx.stroke();
  }

  drawBow() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    // Head bowing
    this.ctx.save();
    this.ctx.translate(centerX, centerY - 30);
    this.ctx.rotate(0.3);
    
    this.ctx.fillStyle = '#FFD1DC';
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Hair
    this.ctx.fillStyle = '#4A4A4A';
    this.ctx.beginPath();
    this.ctx.arc(0, -20, 65, Math.PI, Math.PI * 2);
    this.ctx.fill();

    // Closed eyes
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(-25, -10);
    this.ctx.lineTo(-15, -10);
    this.ctx.moveTo(15, -10);
    this.ctx.lineTo(25, -10);
    this.ctx.stroke();

    // Small smile
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(0, 10, 15, 0, Math.PI);
    this.ctx.stroke();

    this.ctx.restore();

    // Body
    this.ctx.fillStyle = '#667eea';
    this.ctx.fillRect(centerX - 40, centerY + 40, 80, 100);

    // Arms in front
    this.ctx.strokeStyle = '#FFD1DC';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - 40, centerY + 50);
    this.ctx.lineTo(centerX - 20, centerY + 80);
    this.ctx.moveTo(centerX + 40, centerY + 50);
    this.ctx.lineTo(centerX + 20, centerY + 80);
    this.ctx.stroke();
  }

  drawTiltHead() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    // Head tilted
    this.ctx.save();
    this.ctx.translate(centerX, centerY - 50);
    this.ctx.rotate(-0.2);
    
    this.ctx.fillStyle = '#FFD1DC';
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Hair
    this.ctx.fillStyle = '#4A4A4A';
    this.ctx.beginPath();
    this.ctx.arc(0, -20, 65, Math.PI, Math.PI * 2);
    this.ctx.fill();

    // Confused eyes
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(-20, -10, 5, 0, Math.PI * 2);
    this.ctx.moveTo(15, -15);
    this.ctx.lineTo(25, -10);
    this.ctx.stroke();

    // Confused mouth
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(-10, 10);
    this.ctx.quadraticCurveTo(0, 15, 10, 10);
    this.ctx.stroke();

    this.ctx.restore();

    // Question mark
    this.ctx.fillStyle = 'rgba(102, 126, 234, 0.5)';
    this.ctx.font = 'bold 40px Arial';
    this.ctx.fillText('?', centerX + 70, centerY - 80);

    // Body
    this.ctx.fillStyle = '#667eea';
    this.ctx.fillRect(centerX - 40, centerY + 20, 80, 100);

    // One arm raised
    this.ctx.strokeStyle = '#FFD1DC';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - 40, centerY + 30);
    this.ctx.lineTo(centerX - 60, centerY + 70);
    this.ctx.moveTo(centerX + 40, centerY + 30);
    this.ctx.lineTo(centerX + 50, centerY);
    this.ctx.stroke();
  }

  play(animationType) {
    this.currentAnimation = animationType;
    setTimeout(() => {
      this.currentAnimation = 'idle';
    }, 3000); // Return to idle after 3 seconds
  }
}

// Initialize animation when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.characterAnimation = new CharacterAnimation('characterCanvas');
  });
} else {
  window.characterAnimation = new CharacterAnimation('characterCanvas');
}
