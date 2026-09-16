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
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1.2; // Fine particle size
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 1; // Used for speed of repulsion
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
      // Fit canvas to parent container
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      particlesArray = [];
      
      // Exact calculation of clamp(4rem, 14vw, 14rem) based on 16px rem
      const fontSize = Math.max(90, Math.min(window.innerWidth * 0.20, 300));
      
      ctx.fillStyle = 'white';
      ctx.font = `800 ${fontSize}px "Cormorant Garamond", serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Draw text exactly in the center of the canvas container
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      // Scan the canvas for pixels
      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create particles from pixel data (sampling every 4th pixel for performance/density)
      for (let y = 0, y2 = textCoordinates.height; y < y2; y += 3) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x += 3) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            let positionX = x;
            let positionY = y;
            particlesArray.push(new Particle(positionX, positionY));
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
    document.fonts.ready.then(() => {
      init();
      animate();
    });

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
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
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [text]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default ParticleText;
