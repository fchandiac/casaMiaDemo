import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar
} from '@mui/material';
import {
  EmojiEvents,
  Star,
  LocalCafe,
  ShoppingCart,
  LocationOn,
  Timer,
  CheckCircle
} from '@mui/icons-material';

interface BadgeCardProps {
  id: string;
  name: string;
  description: string;
  type: 'bronze' | 'silver' | 'gold' | 'special';
  category: 'purchase' | 'location' | 'time' | 'achievement' | 'social';
  isEarned: boolean;
  isExpired?: boolean; // Nueva prop para insignias vencidas
  earnedDate?: string;
  expiryDate?: string; // Nueva prop para fecha de vencimiento
  progress?: number;
  maxProgress?: number;
  onClick?: () => void;
}

const getBadgeIcon = (category: string) => {
  switch (category) {
    case 'purchase':
      return <ShoppingCart />;
    case 'location':
      return <LocationOn />;
    case 'time':
      return <Timer />;
    case 'achievement':
      return <Star />;
    case 'social':
      return <EmojiEvents />;
    default:
      return <EmojiEvents />;
  }
};

const getBadgeColor = (type: string, isEarned: boolean, isExpired = false) => {
  if (!isEarned) return '#bdbdbd';
  if (isExpired) return '#9e9e9e'; // Color gris para vencidas
  
  switch (type) {
    case 'bronze':
      return '#cd7f32';
    case 'silver':
      return '#c0c0c0';
    case 'gold':
      return '#ffd700';
    case 'special':
      return '#9c27b0';
    default:
      return '#ff9800';
  }
};

export default function BadgeCard({
  id,
  name,
  description,
  type,
  category,
  isEarned,
  isExpired = false,
  earnedDate,
  expiryDate,
  progress = 0,
  maxProgress = 100,
  onClick
}: BadgeCardProps) {
  const badgeColor = getBadgeColor(type, isEarned, isExpired);
  const progressPercentage = maxProgress > 0 ? (progress / maxProgress) * 100 : 0;

  return (
    <Card 
      sx={{ 
        border: '2px solid #ddd', 
        boxShadow: 'none',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s',
        '&:hover': onClick ? {
          transform: 'translateY(-2px)',
          borderColor: '#1976d2'
        } : {},
        opacity: isEarned ? 1 : 0.7
      }}
      onClick={onClick}
    >
      <CardContent sx={{ textAlign: 'center', p: 2 }}>
        {/* Icono de la insignia */}
        <Avatar
          sx={{
            width: 60,
            height: 60,
            bgcolor: badgeColor,
            mx: 'auto',
            mb: 2,
            border: '3px solid #ddd'
          }}
        >
          {getBadgeIcon(category)}
        </Avatar>

        {/* Nombre de la insignia */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '1rem',
            fontWeight: 'bold',
            mb: 1,
            color: isEarned ? 'text.primary' : 'text.secondary'
          }}
        >
          {name}
        </Typography>

        {/* Descripción */}
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2,
            color: 'text.secondary',
            minHeight: '2.5em'
          }}
        >
          {description}
        </Typography>

        {/* Estado y progreso */}
        <Box sx={{ mb: 1 }}>
          {isEarned && isExpired ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Timer sx={{ color: '#f44336', fontSize: 18 }} />
              <Chip 
                label="Vencida" 
                size="small" 
                sx={{ 
                  bgcolor: '#f44336',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
            </Box>
          ) : isEarned ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: '#4caf50', fontSize: 18 }} />
              <Chip 
                label="Para Lucir" 
                size="small" 
                sx={{ 
                  bgcolor: '#4caf50',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
            </Box>
          ) : (
            <Chip 
              label={`${progress}/${maxProgress}`}
              size="small" 
              variant="outlined"
              sx={{ 
                borderColor: badgeColor,
                color: badgeColor
              }}
            />
          )}
        </Box>

        {/* Fecha de obtención, vencimiento o progreso */}
        {isEarned && isExpired && expiryDate ? (
          <Typography variant="caption" color="error">
            Venció: {expiryDate}
          </Typography>
        ) : isEarned && earnedDate ? (
          <Typography variant="caption" color="text.secondary">
            Obtenida: {earnedDate}
          </Typography>
        ) : !isEarned && maxProgress > 0 ? (
          <Box sx={{ mt: 1 }}>
            <Box 
              sx={{ 
                width: '100%', 
                height: 4, 
                bgcolor: '#f0f0f0', 
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Box 
                sx={{ 
                  width: `${progressPercentage}%`, 
                  height: '100%', 
                  bgcolor: badgeColor,
                  transition: 'width 0.3s ease'
                }}
              />
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
              {progressPercentage.toFixed(0)}% completado
            </Typography>
          </Box>
        ) : null}

        {/* Tipo de insignia */}
        <Typography 
          variant="caption" 
          sx={{ 
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: badgeColor,
            display: 'block',
            mt: 1
          }}
        >
          {type}
        </Typography>
      </CardContent>
    </Card>
  );
}
