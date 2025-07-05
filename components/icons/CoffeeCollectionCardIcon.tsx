import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export default function CoffeeCollectionCardIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {/* Contorno de la tarjeta */}
      <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H3V4h18v16z" />
      
      {/* Taza de café */}
      <path d="M14.5 7h-5c-.83 0-1.5.67-1.5 1.5v2c0 1.66 1.34 3 3 3h2c1.66 0 3-1.34 3-3v-2c0-.83-.67-1.5-1.5-1.5zm1 3.5c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v2z" />
      
      {/* Vapor del café */}
      <path d="M15 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      
      {/* Espacios para coleccionar sellos */}
      <circle cx="6" cy="16" r="1" />
      <circle cx="9" cy="16" r="1" />
      <circle cx="12" cy="16" r="1" />
      <circle cx="15" cy="16" r="1" />
      <circle cx="18" cy="16" r="1" />
    </SvgIcon>
  );
}
