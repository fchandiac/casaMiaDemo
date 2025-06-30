import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar
} from '@mui/material';

interface CollectionCardProps {
  productName: string;
  completedCount: number;
  totalCount: number;
}

export default function CollectionCard({ 
  productName, 
  completedCount, 
  totalCount 
}: CollectionCardProps) {
  return (
    <Card 
      sx={{ 
        border: '2px solid #ddd', 
        boxShadow: 'none',
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Imagen/Icono del producto (placeholder) */}
          <Box
            sx={{
              width: 60,
              height: 60,
              bgcolor: '#f5f5f5',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ddd'
            }}
          >
            <Typography variant="h4" sx={{ color: '#8B4513' }}>
              ☕
            </Typography>
          </Box>

          {/* Contenido principal */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'text.secondary',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Tarjeta de colección
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold',
                mt: 0.5,
                lineHeight: 1.2
              }}
            >
              {productName}
            </Typography>

            {/* Círculos de progreso */}
            <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
              {Array.from({ length: totalCount }).map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: index < completedCount ? '#4caf50' : 'transparent',
                    border: '2px solid #4caf50',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
              <Typography 
                variant="caption" 
                sx={{ 
                  ml: 1, 
                  color: 'text.secondary',
                  fontWeight: 'medium'
                }}
              >
                {completedCount}/{totalCount}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
