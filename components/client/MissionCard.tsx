import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Button
} from '@mui/material';

interface MissionCardProps {
  title: string;
  description: string;
  reward: string;
  imageEmoji?: string;
  isCompleted?: boolean;
  progress?: number;
  onComplete?: () => void;
}

export default function MissionCard({ 
  title, 
  description, 
  reward,
  imageEmoji = "🎯",
  isCompleted = false,
  progress = 0,
  onComplete
}: MissionCardProps) {
  return (
    <Card 
      sx={{ 
        border: '2px solid #ddd', 
        boxShadow: 'none',
        borderRadius: 2,
        overflow: 'hidden',
        opacity: isCompleted ? 0.7 : 1
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Imagen/Icono a la izquierda */}
          <Box
            sx={{
              width: 60,
              height: 60,
              bgcolor: '#f5f5f5',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ddd',
              flexShrink: 0
            }}
          >
            <Typography variant="h3" sx={{ fontSize: '2rem' }}>
              {imageEmoji}
            </Typography>
          </Box>

          {/* Contenido principal */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'text.secondary',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                display: 'block',
                mb: 0.5
              }}
            >
              Misión disponible
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold',
                mb: 1,
                lineHeight: 1.2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {title}
            </Typography>

            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                mb: 1.5,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {description}
            </Typography>

            {/* Recompensa y botón */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip 
                  label={reward}
                  color={isCompleted ? "success" : "primary"}
                  variant={isCompleted ? "filled" : "outlined"}
                  size="small"
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: '0.75rem'
                  }}
                />
                {progress > 0 && (
                  <Typography variant="caption" color="text.secondary">
                    {progress}% completado
                  </Typography>
                )}
              </Box>
              
              {!isCompleted && onComplete && (
                <Button 
                  variant="contained" 
                  size="small"
                  onClick={onComplete}
                  sx={{ 
                    minWidth: 'auto',
                    px: 2,
                    py: 0.5,
                    fontSize: '0.75rem'
                  }}
                >
                  Completar
                </Button>
              )}
              
              {isCompleted && (
                <Chip 
                  label="Completada" 
                  color="success" 
                  size="small"
                  sx={{ fontWeight: 'bold' }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
