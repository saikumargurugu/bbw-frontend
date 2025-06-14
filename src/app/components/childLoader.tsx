import React from "react";
import Lottie from "lottie-react";
import badmintonLoader from "@/public/lottie-loader_transparent.json";

interface InlineLoaderProps {
  show?: boolean;
  size?: number | string;
  className?: string;
}

const InlineLoader: React.FC<InlineLoaderProps> = ({
  show = true,
  size = 80,
  className = "",
}) => {
  if (!show) return null;
  return (
    <div
      className={`flex items-center justify-center bg-black bg-opacity-80 rounded ${className}`}
      style={{ width: size, height: size }}
    >
      <Lottie animationData={badmintonLoader} loop autoplay style={{ width: size, height: size }} />
    </div>
  );
};

export default InlineLoader;