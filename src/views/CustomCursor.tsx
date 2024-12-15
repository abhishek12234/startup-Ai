import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorInnerRef = useRef<HTMLDivElement | null>(null);
  const cursorOuterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursorInner = cursorInnerRef.current;
    const cursorOuter = cursorOuterRef.current;

    if (!cursorInner || !cursorOuter) return;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    let animationFrame: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (animationFrame) return;
      animationFrame = requestAnimationFrame(() => {
        cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        if (!isHovering) {
          cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
        animationFrame = null;
      });
    };

    const handleMouseEnter = () => {
      cursorInner.classList.add("cursor-hover");
      cursorOuter.classList.add("cursor-hover");
      isHovering = true;
    };

    const handleMouseLeave = () => {
      cursorInner.classList.remove("cursor-hover");
      cursorOuter.classList.remove("cursor-hover");
      isHovering = false;
    };

    const attachListeners = () => {
      const interactiveElements = document.querySelectorAll("a, .cursor-pointer");
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Attach event listeners to interactive elements initially
    attachListeners();

    // Monitor DOM for dynamically added interactive elements
    const observer = new MutationObserver(() => {
      attachListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Attach mousemove listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      const interactiveElements = document.querySelectorAll("a, .cursor-pointer");
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorOuterRef} className="mouse-cursor cursor-outer"></div>
      <div ref={cursorInnerRef} className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default CustomCursor;
