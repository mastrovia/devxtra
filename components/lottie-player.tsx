// components/LottiePlayer.js
import React, { FC } from 'react';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false } // Disable SSR for the Lottie player
);

interface LottiePlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  autoplay?: boolean;
  loop?: boolean;
}

export const LottiePlayer: FC<LottiePlayerProps> = ({
  src,
  style = {},
  className = '',
  autoplay = true,
  loop = true,
  ...rest
}) => {
  return (
    <DotLottieReact autoplay={autoplay} loop={loop} className={className} src={src} style={style} {...rest} />
  );
};
