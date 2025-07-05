import React from 'react';
import { SvgIcon } from '@mui/material';

interface CollectionIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function CollectionCardIcon({ size = 24, className, style }: CollectionIconProps) {
  return (
    <SvgIcon
      className={className}
      style={{ ...style, width: size, height: size }}
      viewBox="0 0 24 24"
    >
      <path d="M21,2 L3,2 C1.9,2 1,2.9 1,4 L1,20 C1,21.1 1.9,22 3,22 L21,22 C22.1,22 23,21.1 23,20 L23,4 C23,2.9 22.1,2 21,2 Z M21,20 L3,20 L3,4 L21,4 L21,20 Z" />
      <circle fill="currentColor" cx="6" cy="16" r="1.5" />
      <circle fill="currentColor" cx="11" cy="16" r="1.5" />
      <circle stroke="currentColor" fill="none" cx="16" cy="16" r="1.5" />
    </SvgIcon>
  );
}
