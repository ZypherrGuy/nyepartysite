import React, { useRef, useEffect, useState } from "react";
import "./Cursor.css"; 

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const cursor = cursorRef.current;
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
        setIsMoving(true);

        // Remove the "is-moving" class after a delay
        const timer = setTimeout(() => setIsMoving(false), 300);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isMoving ? "is-moving" : ""}`}
    />
  );
};

export default CursorEffect;
