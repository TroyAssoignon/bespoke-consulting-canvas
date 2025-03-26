
import React from "react";

interface ImageWithEffectProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithEffect: React.FC<ImageWithEffectProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -right-4 -bottom-4 w-full h-full border border-luxe-gold"></div>
      <img
        src={src}
        alt={alt}
        className="relative w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageWithEffect;
