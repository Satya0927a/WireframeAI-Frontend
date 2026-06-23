import { useRef, useEffect } from "react";

// ── ANTIGRAVITY COLOR-SHIFTING LIGHT GRID ──
function AntiGravityGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get the parent element container instead of the whole window
    const container = canvas.parentElement;
    if (!container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Grid Settings matching Google Antigravity spacing
    const DOT_SPACING = 36; 
    const DOT_RADIUS = 1.2;  
    const MOUSE_RADIUS = 220; // Wide interactive warp pull
    const RESTRAINT = 9;     // Elasticity coefficient

    let dots = [];
    const mouse = { x: -1000, y: -1000 };

    function initGrid() {
      if (!container || !canvas) return;
      dots = [];
      
      // Measure the actual bounded hero container block size
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;

      for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
        for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
          // Base color regions mapped perfectly to your container space
          let defaultColor = "rgba(180, 180, 185, 0.3)";
          let activeColor = "rgba(99, 102, 241, 0.85)"; // Default indigo

          if (x < width * 0.4 && y > height * 0.4) {
            activeColor = "rgba(37, 99, 235, 0.9)"; // Blue gradient zone
          } else if (x < width * 0.5 && y < height * 0.5) {
            activeColor = "rgba(168, 85, 247, 0.9)"; // Purple gradient zone
          } else if (y > height * 0.6) {
            activeColor = "rgba(249, 115, 22, 0.9)"; // Orange/Yellow zone
          }

          dots.push({
            baseX: x,
            baseY: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            defaultColor,
            activeColor
          });
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_RADIUS) {
          // Antigravity dynamic warp formula
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          const angle = Math.atan2(dy, dx);
          
          // Pull and stretch points relative to cursor paths
          const targetX = dot.x - Math.cos(angle) * force * 32;
          const targetY = dot.y - Math.sin(angle) * force * 32;

          dot.vx += (targetX - dot.x) * 0.12;
          dot.vy += (targetY - dot.y) * 0.12;
        }

        // Return physics to home point
        const homeDx = dot.baseX - dot.x;
        const homeDy = dot.baseY - dot.y;
        
        dot.vx += homeDx / RESTRAINT;
        dot.vy += homeDy / RESTRAINT;
        
        // Damping fluid motion
        dot.vx *= 0.82;
        dot.vy *= 0.82;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Render dot engine values
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, distance < MOUSE_RADIUS ? DOT_RADIUS * 1.5 : DOT_RADIUS, 0, Math.PI * 2);
        
        if (distance < MOUSE_RADIUS) {
          ctx.fillStyle = dot.activeColor;
        } else {
          ctx.fillStyle = dot.defaultColor;
        }
        
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      // Calculate mouse position relative strictly to the container space
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Use ResizeObserver to reliably monitor size changes of the container
    const resizeObserver = new ResizeObserver(() => {
      initGrid();
    });
    resizeObserver.observe(container);

    initGrid();
    animate();

    // Listen to mouse actions inside the hero element boundary only
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90"
    />
  );
}

export default AntiGravityGrid;