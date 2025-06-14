import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import badmintonLoader from "@/public/lottie-loader_transparent.json";

interface LoaderProps {
  show?: boolean;
  overlayClassName?: string;
  size?: number | string;
}

const Loader: React.FC<LoaderProps> = ({
  show = true,
  overlayClassName = "",
  size = 240, // 1.5x of 160
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (show) {
      setVisible(true);
      timer = setTimeout(() => {
        if (!show) setVisible(false);
      }, 2000);
    } else {
      timer = setTimeout(() => setVisible(false), 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [show]);

  if (!visible) return null;
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-30 ${overlayClassName}`}
      style={{ pointerEvents: "auto" }}
    >
      <div style={{ width: size, height: size }}>
        <Lottie animationData={badmintonLoader} loop autoplay />
      </div>
    </div>
  );
};

export default Loader;