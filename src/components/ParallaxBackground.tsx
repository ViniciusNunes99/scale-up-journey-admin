import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  duration: 8 + Math.random() * 7,
  delay: Math.random() * 5,
  opacity: 0.3 + Math.random() * 0.5,
}));

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, -600]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -1000]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2a0000 0%, #7a0000 25%, #cc0000 50%, #7a0000 75%, #2a0000 100%)",
        }}
      />
      {/* Layer 1 — slow */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        <div
          className="absolute w-full"
          style={{
            height: "200%",
            background:
              "radial-gradient(ellipse at 80% 10%, rgba(255,60,60,0.95) 0%, transparent 55%), " +
              "radial-gradient(ellipse at 30% 25%, rgba(220,0,0,0.85) 0%, transparent 50%)",
          }}
        />
      </motion.div>
      {/* Layer 2 — faster */}
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        <div
          className="absolute w-full"
          style={{
            height: "200%",
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(255,80,80,0.90) 0%, transparent 50%), " +
              "radial-gradient(ellipse at 90% 40%, rgba(230,10,10,0.95) 0%, transparent 55%)",
          }}
        />
      </motion.div>
      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `rgba(255, ${80 + Math.random() * 60}, ${80 + Math.random() * 60}, ${p.opacity})`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity, p.opacity * 0.7, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
