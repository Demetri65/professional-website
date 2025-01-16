import "./style.css";
import { useId } from "react";

export type AnimatedBlobProps = {
  size: string;
  gradient: string[];
  x: string;
  y: string;
  rotate?: number;
};

export const AnimatedBlob = ({size, x, y, gradient, rotate }: AnimatedBlobProps) => {
  const id = useId();
  return (
    <div className="svg-container" style={{width: size, height: size, left: x, top: y}}>
      <svg style={{width: "100%", height: "100%", transform: `rotate(${rotate}deg)`}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradient[0]} stopOpacity="1" />
            <stop offset="100%" stopColor={gradient[1]} stopOpacity="1" />
          </linearGradient>
        </defs>
        <ellipse className="circle" cx="100" cy="100" rx="50" ry="50" fill={`url(#gradient-${id})`} />
      </svg>
    </div>
  );
};