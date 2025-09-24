import React from 'react';
import './shiny-text.css';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-muted-foreground ${disabled ? 'disabled' : 'shiny-text'} ${className}`}
      style={{ animationDuration: animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
