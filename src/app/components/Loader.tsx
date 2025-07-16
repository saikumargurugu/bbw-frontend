import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import badmintonLoader from "@/public/loaderRedRotate.json";

interface LoaderProps {
  show?: boolean;
  overlayClassName?: string;
  size?: number | string;
  speed?: number; // Optional speed prop (default 0.3x)
}

const Loader: React.FC<LoaderProps> = ({
  show = true,
  overlayClassName = "",
  size = 240,
  speed = 0.5,
}) => {
  const [visible, setVisible] = useState(show);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (show) {
      setVisible(true);
      timer = setTimeout(() => {
        if (!show) setVisible(false);
      }, 500);
    } else {
      timer = setTimeout(() => setVisible(false), 500); // was 2000
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [show]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-30 ${overlayClassName}`}
      style={{ pointerEvents: "auto" }}
    >
      <div style={{ width: size, height: size }}>
        <Lottie
          lottieRef={lottieRef}
          animationData={badmintonLoader}
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Loader;
