document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Logic
    const cursor = document.querySelector('.site-cursor');
    const cursorLabel = document.querySelector('.site-cursor-label');
    const cursorArrow = document.querySelector('.site-cursor-arrow');
    
    // Hide default cursor
    document.documentElement.classList.add('has-custom-cursor');
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
        cursor.style.visibility = 'visible';
        
        // Directly transform the cursor (with an offset)
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
    
    // Handle Hover States
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor]');
    
    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            const cursorType = el.getAttribute('data-cursor');
            
            if (cursorType === 'link') {
                cursorLabel.textContent = '';
                cursorLabel.style.display = 'none';
                cursor.classList.remove('is-polaroid');
            } else if (cursorType === 'view') {
                cursorLabel.style.display = 'grid';
                cursorLabel.textContent = 'View';
                cursorArrow.style.display = 'none';
                cursor.classList.remove('is-polaroid');
            } else if (cursorType === 'polaroid') {
                cursorLabel.style.display = 'grid';
                cursorLabel.textContent = 'Arivu';
                cursorArrow.style.display = 'none';
                cursor.classList.add('is-polaroid');
            }
        });
        
        el.addEventListener('mouseleave', () => {
            cursorLabel.textContent = '';
            cursorLabel.style.display = 'none';
            cursorArrow.style.display = 'block';
            cursor.classList.remove('is-polaroid');
        });
    });

    // Handle mouse leaving the window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursor.style.visibility = 'hidden';
    });
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursor.style.visibility = 'visible';
    });
    
    // Grid Generation for the Hero background
    const gridContainer = document.getElementById('grid-container');
    if (gridContainer) {
        for (let i = 0; i < 96; i++) {
            const mark = document.createElement('div');
            mark.className = 'hero-system-mark';
            gridContainer.appendChild(mark);
        }
    }
    
    // Polaroid 3D Tilt Effect
    const polaroid = document.getElementById('polaroid');
    if (polaroid) {
        polaroid.addEventListener('mousemove', (e) => {
            const rect = polaroid.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width - 0.5) * 10;
            const yPercent = (y / rect.height - 0.5) * -10;
            
            polaroid.style.transform = `rotateX(${yPercent}deg) rotateY(${xPercent}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        polaroid.addEventListener('mouseleave', () => {
            polaroid.style.transform = `rotate(-1.8deg)`;
        });
    }
});
