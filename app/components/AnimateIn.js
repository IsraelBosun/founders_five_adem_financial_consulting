"use client";
import { useEffect, useRef, useState } from "react";

const variants = {
  fadeUp:    { opacity: 0, transform: "translateY(30px)" },
  fadeDown:  { opacity: 0, transform: "translateY(-20px)" },
  fadeIn:    { opacity: 0, transform: "translateY(0px)" },
  fadeLeft:  { opacity: 0, transform: "translateX(-36px)" },
  fadeRight: { opacity: 0, transform: "translateX(36px)" },
  scaleUp:   { opacity: 0, transform: "scale(0.93) translateY(14px)" },
};

export default function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 720,
  className = "",
  style: extraStyle,
  threshold = 0.08,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -24px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const from = variants[variant] || variants.fadeUp;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...extraStyle,
        opacity: visible ? 1 : from.opacity,
        transform: visible ? "none" : from.transform,
        transition: visible
          ? `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
