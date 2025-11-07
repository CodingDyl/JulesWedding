"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface DraggableCardContainerProps {
  className?: string;
  children: React.ReactNode;
}

interface DraggableCardBodyProps {
  className?: string;
  children: React.ReactNode;
}

export function DraggableCardContainer({
  className = "",
  children,
}: DraggableCardContainerProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export function DraggableCardBody({
  className = "",
  children,
}: DraggableCardBodyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [bounds, setBounds] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isDragging) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      x.set(0);
      y.set(0);
    }
  };

  useEffect(() => {
    if (!ref.current) return;

    const updateBounds = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const container = ref.current.parentElement;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      setBounds({
        left: containerRect.left - rect.left,
        right: containerRect.right - rect.right,
        top: containerRect.top - rect.top,
        bottom: containerRect.bottom - rect.bottom,
      });
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isDragging ? 0 : rotateX,
        rotateY: isDragging ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      drag
      dragConstraints={bounds}
      dragElastic={0.1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`cursor-grab active:cursor-grabbing ${className}`}
      whileDrag={{ scale: 1.05 }}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

