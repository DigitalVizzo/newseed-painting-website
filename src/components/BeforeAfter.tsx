"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import LeafWatermark from "./LeafWatermark";

type LeafConfig = {
  top: string;
  left: string;
  size: number;
  rotateRange: [number, number];
  xRange: [number, number];
  yRange: [number, number];
};

function LeafParallax({
  leaf,
  scrollYProgress,
}: {
  leaf: LeafConfig;
  scrollYProgress: MotionValue<number>;
}) {
  const x = useTransform(scrollYProgress, [0, 1], leaf.xRange);
  const y = useTransform(scrollYProgress, [0, 1], leaf.yRange);
  const rotate = useTransform(scrollYProgress, [0, 1], leaf.rotateRange);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: leaf.top,
        left: leaf.left,
        zIndex: 0,
        x,
        y,
        rotate,
        pointerEvents: "none",
      }}
    >
      <LeafWatermark opacity={0.15} size={leaf.size} />
    </motion.div>
  );
}

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = () => {
    isDragging.current = true;
  };
  const handlePointerUp = () => {
    isDragging.current = false;
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leaves: LeafConfig[] = [
    // → right & ↓ down
    {
      top: "5%",
      left: "0%",
      size: 66,
      rotateRange: [-60, 80],
      xRange: [-50, 400],
      yRange: [-30, 250],
    },
    // ← left & ↑ up
    {
      top: "10%",
      left: "75%",
      size: 33,
      rotateRange: [40, -70],
      xRange: [100, -350],
      yRange: [150, -200],
    },
    // → right & ↑ up
    {
      top: "60%",
      left: "5%",
      size: 77,
      rotateRange: [-45, 90],
      xRange: [-100, 500],
      yRange: [200, -150],
    },
    // ← left & ↓ down
    {
      top: "0%",
      left: "85%",
      size: 34,
      rotateRange: [-80, 40],
      xRange: [150, -300],
      yRange: [-100, 300],
    },
    // ← left & ↑ up (fast)
    {
      top: "70%",
      left: "80%",
      size: 67,
      rotateRange: [30, -60],
      xRange: [200, -600],
      yRange: [300, -400],
    },
    // → right & ↓ down (big sweep)
    {
      top: "40%",
      left: "0%",
      size: 99,
      rotateRange: [-50, 70],
      xRange: [-300, 500],
      yRange: [-200, 400],
    },
    // ↓ down only (drops)
    {
      top: "0%",
      left: "35%",
      size: 70,
      rotateRange: [60, -90],
      xRange: [-20, 30],
      yRange: [-300, 500],
    },
    // ↑ up only (rises)
    {
      top: "75%",
      left: "10%",
      size: 80,
      rotateRange: [-70, 50],
      xRange: [30, -20],
      yRange: [400, -300],
    },
    // ← left & ↓ down (diagonal)
    {
      top: "5%",
      left: "90%",
      size: 75,
      rotateRange: [20, -80],
      xRange: [200, -500],
      yRange: [-150, 350],
    },
    // → right & ↑ up (diagonal)
    {
      top: "80%",
      left: "60%",
      size: 65,
      rotateRange: [-40, 60],
      xRange: [-100, 400],
      yRange: [350, -200],
    },
    // ← left (mostly horizontal)
    {
      top: "30%",
      left: "85%",
      size: 85,
      rotateRange: [50, -40],
      xRange: [300, -600],
      yRange: [-30, 50],
    },
    // → right (mostly horizontal)
    {
      top: "10%",
      left: "55%",
      size: 35,
      rotateRange: [-90, 120],
      xRange: [-200, 500],
      yRange: [20, -30],
    },
    // ↑ up & ← left (fast small)
    {
      top: "85%",
      left: "70%",
      size: 25,
      rotateRange: [80, -100],
      xRange: [150, -400],
      yRange: [500, -300],
    },
    // ↓ down & → right (fast small)
    {
      top: "0%",
      left: "15%",
      size: 30,
      rotateRange: [-60, 100],
      xRange: [-100, 400],
      yRange: [-400, 500],
    },
    // spiraling in from bottom-center
    {
      top: "90%",
      left: "40%",
      size: 20,
      rotateRange: [100, -180],
      xRange: [200, -300],
      yRange: [300, -500],
    },
    // spiraling in from top-left
    {
      top: "5%",
      left: "5%",
      size: 28,
      rotateRange: [-150, 100],
      xRange: [-200, 400],
      yRange: [-100, 500],
    },
    // ↑ up fast (tiny)
    {
      top: "85%",
      left: "50%",
      size: 15,
      rotateRange: [-120, 150],
      xRange: [-30, 50],
      yRange: [500, -600],
    },
    // ↓ down fast (tiny)
    {
      top: "0%",
      left: "0%",
      size: 18,
      rotateRange: [90, -130],
      xRange: [40, -30],
      yRange: [-500, 600],
    },
    // diagonal ← ↑ (tiny fast)
    {
      top: "90%",
      left: "90%",
      size: 12,
      rotateRange: [-80, 160],
      xRange: [300, -500],
      yRange: [400, -600],
    },
    // diagonal → ↓ (tiny fast)
    {
      top: "5%",
      left: "45%",
      size: 22,
      rotateRange: [140, -90],
      xRange: [-300, 500],
      yRange: [-400, 600],
    },
    // Bottom-right cluster
    {
      top: "75%",
      left: "75%",
      size: 90,
      rotateRange: [-30, 50],
      xRange: [100, -300],
      yRange: [50, -200],
    },
    {
      top: "85%",
      left: "85%",
      size: 55,
      rotateRange: [40, -60],
      xRange: [200, -400],
      yRange: [150, -300],
    },
    {
      top: "80%",
      left: "70%",
      size: 40,
      rotateRange: [-50, 80],
      xRange: [-50, 350],
      yRange: [200, -250],
    },
    {
      top: "90%",
      left: "80%",
      size: 30,
      rotateRange: [70, -100],
      xRange: [150, -350],
      yRange: [100, -400],
    },
    {
      top: "70%",
      left: "90%",
      size: 70,
      rotateRange: [-60, 40],
      xRange: [250, -200],
      yRange: [-50, 300],
    },
    {
      top: "88%",
      left: "65%",
      size: 20,
      rotateRange: [100, -120],
      xRange: [-100, 400],
      yRange: [300, -500],
    },
    {
      top: "78%",
      left: "95%",
      size: 45,
      rotateRange: [-40, 70],
      xRange: [300, -250],
      yRange: [100, -350],
    },
    {
      top: "92%",
      left: "75%",
      size: 15,
      rotateRange: [80, -150],
      xRange: [-200, 300],
      yRange: [400, -300],
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#FAFAF8",
        padding: "7rem 0",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {leaves.map((leaf, i) => (
        <LeafParallax key={i} leaf={leaf} scrollYProgress={scrollYProgress} />
      ))}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <AnimateOnScroll
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p
            style={{
              color: "#E8A824",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            THE TRANSFORMATION
          </p>
          <h2
            className="font-serif"
            style={{
              color: "#1A1A1A",
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
            }}
          >
            Before &amp; After
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleIn">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onPointerMove={handlePointerMove}
            onClick={(e) => updateSlider(e.clientX)}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: 20,
              overflow: "hidden",
              cursor: "ew-resize",
              userSelect: "none",
              touchAction: "none",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            {/* After (full) */}
            <Image
              src="/newseed-painting-website/images/depois.jpg"
              alt="House after premium exterior painting by New Seed Painting Group, Sydney"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 960px"
            />

            {/* Before (clipped) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <Image
                src="/newseed-painting-website/images/antes.jpg"
                alt="House before painting showing weathered exterior, Northern Beaches Sydney"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 960px"
              />
              {/* Before overlay for contrast */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.05)",
                }}
              />
            </div>

            {/* Slider handle */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                transform: "translateX(-50%)",
                width: 3,
                background: "white",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                zIndex: 2,
              }}
            >
              {/* Drag handle circle */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="#1A1A1A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="#1A1A1A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                color: "white",
                padding: "6px 16px",
                borderRadius: 9999,
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                zIndex: 3,
              }}
            >
              Before
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "rgba(232,168,36,0.9)",
                color: "#1A1A1A",
                padding: "6px 16px",
                borderRadius: 9999,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                zIndex: 3,
              }}
            >
              After
            </motion.div>
          </div>

          {/* Caption */}
          <p
            style={{
              color: "#999",
              fontSize: "0.85rem",
              textAlign: "center",
              marginTop: 20,
              fontStyle: "italic",
            }}
          >
            Full exterior repaint, Northern Beaches
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
