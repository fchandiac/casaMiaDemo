import React from 'react';

interface CollectionIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function SimpleCollectionCardIcon({ 
  size = 24, 
  className, 
  style,
  color = 'currentColor'
}: CollectionIconProps) {
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" fill="none" fillRule="evenodd" strokeWidth="1">
          <g>
            <path d="M21,2 L3,2 C1.9,2 1,2.9 1,4 L1,20 C1,21.1 1.9,22 3,22 L21,22 C22.1,22 23,21.1 23,20 L23,4 C23,2.9 22.1,2 21,2 Z M21,20 L3,20 L3,4 L21,4 L21,20 Z" id="card-outline" fill={color} fillRule="nonzero"></path>
            <circle id="progress-circle-1" fill={color} fillRule="nonzero" cx="11" cy="16" r="1.5"></circle>
            <circle id="progress-circle-2" fill={color} fillRule="nonzero" cx="6" cy="16" r="1.5"></circle>
            <rect id="Rectángulo" fill={color} x="4" y="6" width="16" height="3"></rect>
            <circle id="progress-circle-empty-1" stroke={color} cx="6" cy="16" r="1.5"></circle>
            <circle id="progress-circle-empty-2" stroke={color} cx="11" cy="16" r="1.5"></circle>
            <circle id="progress-circle-empty-3" stroke={color} cx="16" cy="16" r="1.5"></circle>
          </g>
        </g>
      </svg>
    </span>
  );
}
