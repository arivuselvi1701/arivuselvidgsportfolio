import React, { useRef, useEffect } from 'react';

const ParticleText = ({ text }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    let particlesArray = [];
    let mouse = { x: null, y: null, radius: 80 }; // Radius of the interaction hover
    let animationFrameId;

    class Particle {
      constructor(x, y, dpr = 1) {
        this.x = x;
        this.y = y;
        this.size = 1.2 * dpr;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 1;
        this.dpr = dpr;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update() {
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;
            
            this.x -= directionX;
            this.y -= directionY;
          } else {
            // Spring back if outside radius
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx / 15;
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy / 15;
            }
          }
        } else {
          // Spring back if no mouse
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      particlesArray = [];
      
            let fontSize = 180 * dpr;
      ctx.font = `800 ${fontSize}px "Cormorant Garamond", serif`;
      
      // Iteratively shrink font size until it fits within 95% of the canvas width
      while (ctx.measureText(text).width > canvas.width * 0.70 && fontSize > 10 * dpr) {
        fontSize -= 2 * dpr;
        ctx.font = `800 ${fontSize}px "Cormorant Garamond", serif`;
      }
      
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Adjust sample rate based on DPR to maintain density
      const sampleRate = Math.max(3, Math.floor(3 * dpr));

      for (let y = 0, y2 = textCoordinates.height; y < y2; y += sampleRate) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x += sampleRate) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            // Store particles in physical coordinates
            particlesArray.push(new Particle(x, y, dpr));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Ensure fonts are loaded before drawing text on canvas
    document.fonts.load('800 10px "Cormorant Garamond"').then(() => {
      init();
      animate();
    });

        const handleMouseMove = (e) => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * dpr;
      mouse.y = (e.clientY - rect.top) * dpr;
      mouse.radius = 80 * dpr;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouse.x = (touch.clientX - rect.left) * dpr;
      mouse.y = (touch.clientY - rect.top) * dpr;
      mouse.radius = 80 * dpr;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      init();
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleMouseLeave);
    canvas.addEventListener('touchstart', handleTouchMove, { passive: false });
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [text]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default ParticleText;
