import React from 'react';
import { SvgIconProps } from '@mui/material';
import Image from 'next/image';

export default function CollectionCardIcon(props: SvgIconProps) {
  const { className, style, fontSize } = props;
  
  // Determinar el tamaño basado en el fontSize
  const size = fontSize === 'small' ? 20 : 
               fontSize === 'large' ? 35 : 
               fontSize === 'inherit' ? 24 : 
               typeof fontSize === 'string' ? parseInt(fontSize) || 24 : 24;
  
  return (
    <div className={className} style={style}>
      <Image 
        src="/icons/collection-card-icon.svg"
        alt="Tarjeta de Colección"
        width={size}
        height={size}
      />
    </div>
  );
}
