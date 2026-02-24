import { useState, useEffect } from "react";
import { publicUrl } from "@/lib/utils";

/** Speed: degrees of rotation per pixel scrolled (negative = counter-clockwise). */
const ROTATE_SPEED = -0.12;

const ScrollRotateMandala = () => {
  const [rotateZ, setRotateZ] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setRotateZ(window.scrollY * ROTATE_SPEED);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-20 pointer-events-none select-none"
      aria-hidden
    >
      <div
        className="w-[min(45vmin,280px)] h-[min(45vmin,280px)] opacity-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(-35%, -35%) rotateZ(${rotateZ}deg)`,
        }}
      >
        <img
          src={publicUrl("mandalaart2.png")}
          alt=""
          className="w-full h-full object-contain"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ScrollRotateMandala;
