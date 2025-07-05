import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export default function LoyaltyCardIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {/* Contorno exterior de la tarjeta */}
      <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z" />
      
      {/* Banda magnética */}
      <path d="M4 8h16v2H4z" />
      
      {/* Logotipo esquemático */}
      <path d="M14 16.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v1z" />
      
      {/* Chip de la tarjeta */}
      <path d="M8 14h2v2H8z" />
      
      {/* Puntos de colección / Sellos */}
      <circle cx="19" cy="14.5" r=".5" />
      <circle cx="17" cy="14.5" r=".5" />
      <circle cx="15" cy="14.5" r=".5" />
      
      {/* Información de usuario (esquemática) */}
      <path d="M6 11h6v.5H6z" />
      <path d="M6 12h4v.5H6z" />
    </SvgIcon>
  );
}
