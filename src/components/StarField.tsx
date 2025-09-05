import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseHue: number;
  opacity: number;
  speed: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const center = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < 400; i++) {
        const opacity = Math.random() * 0.35 + 0.65,
          size = 1.2 * Math.random() + 0.7;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          baseHue: Math.random() * 0.91,
          opacity,
          speed: 1.5 * Math.random() + 0.1 * (opacity + size),
        });
      }
      starsRef.current = stars;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.123;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${
          star.baseHue <= 0.6
            ? star.baseHue * 90 + 10
            : star.baseHue * 100 + 120
        }, 100%, ${Math.random() * 30 + 70}%, ${star.opacity})`;
        ctx.fill();

        // Slow movement
        star.x +=
          (star.speed * (star.x - center.x)) /
          Math.sqrt((star.x - center.x) ** 2 + (star.y - center.y) ** 2);
        star.y +=
          (star.speed * (star.y - center.y)) /
          Math.sqrt((star.x - center.x) ** 2 + (star.y - center.y) ** 2);

        // Wrap around screen
        if (
          star.x < 0 ||
          star.x > canvas.width ||
          star.y < 0 ||
          star.y > canvas.height
        ) {
          star.x = Math.random() * 500 + center.x - 250;
          star.y = Math.random() * 500 + center.y - 250;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createStars();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, #1e3a8a 0%, #0f172a 70%, #000000 100%)",
      }}
    />
  );
};

export default StarField;
