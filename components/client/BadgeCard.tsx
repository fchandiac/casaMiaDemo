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
  type: 'bronze' | 'silver' | 'gold' | 'special' | 'expired';
  category: 'purchase' | 'location' | 'time' | 'achievement' | 'social';
  isEarned: boolean;
  isExpired?: boolean; // Nueva prop para insignias vencidas
  earnedDate?: string;
  expiryDate?: string; // Nueva prop para fecha de vencimiento
  benefit?: string; // Nueva prop para el beneficio
  validUntil?: string; // Nueva prop para vencimiento de beneficio
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
  benefit,
  validUntil,
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
        opacity: isEarned ? 1 : 0.7,
        width: '100%',
        mb: 2
      }}
      onClick={onClick}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Icono de la insignia */}
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: badgeColor,
              border: '3px solid #ddd',
              flexShrink: 0
            }}
          >
            {getBadgeIcon(category)}
          </Avatar>

          {/* Contenido principal */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            {/* Nombre de la insignia */}
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 'bold',
                mb: 0.5,
                color: isEarned ? 'text.primary' : 'text.secondary'
              }}
            >
              {name}
            </Typography>

            {/* Descripción */}
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 1,
                color: 'text.secondary'
              }}
            >
              {description}
            </Typography>

            {/* Beneficio (solo para insignias habilitadas) */}
            {isEarned && !isExpired && benefit && (
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 1,
                  color: '#4caf50',
                  fontWeight: 'bold'
                }}
              >
                Beneficio: {benefit}
              </Typography>
            )}

            {/* Progreso para insignias no obtenidas */}
            {!isEarned && maxProgress > 0 && (
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
                  {progress}/{maxProgress} - {progressPercentage.toFixed(0)}% completado
                </Typography>
              </Box>
            )}
          </Box>

          {/* Estado y fechas */}
          <Box sx={{ textAlign: 'center', minWidth: 120, flexShrink: 0 }}>
            {/* Estado */}
            {isEarned && isExpired ? (
              <Box sx={{ mb: 1 }}>
                <Timer sx={{ color: '#f44336', fontSize: 18, mb: 0.5 }} />
                <Chip 
                  label="Vencida" 
                  size="small" 
                  sx={{ 
                    bgcolor: '#f44336',
                    color: 'white',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                />
              </Box>
            ) : isEarned ? (
              <Box sx={{ mb: 1 }}>
                <CheckCircle sx={{ color: '#4caf50', fontSize: 18, mb: 0.5 }} />
                <Chip 
                  label="Para Lucir" 
                  size="small" 
                  sx={{ 
                    bgcolor: '#4caf50',
                    color: 'white',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                />
              </Box>
            ) : (
              <Box sx={{ mb: 1 }}>
                <Chip 
                  label={`${progress}/${maxProgress}`}
                  size="small" 
                  variant="outlined"
                  sx={{ 
                    borderColor: badgeColor,
                    color: badgeColor,
                    display: 'block'
                  }}
                />
              </Box>
            )}

            {/* Fechas */}
            {isEarned && isExpired && expiryDate ? (
              <Typography variant="caption" color="error" sx={{ display: 'block' }}>
                Venció: {expiryDate}
              </Typography>
            ) : isEarned && earnedDate ? (
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                Obtenida: {earnedDate}
              </Typography>
            ) : null}

            {/* Vencimiento del beneficio o tipo de insignia */}
            {isEarned && !isExpired && validUntil ? (
              <Typography 
                variant="caption" 
                sx={{ 
                  fontWeight: 'bold',
                  color: '#ff9800',
                  display: 'block',
                  mt: 0.5
                }}
              >
                Vence: {validUntil}
              </Typography>
            ) : (
              <Typography 
                variant="caption" 
                sx={{ 
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: badgeColor,
                  display: 'block',
                  mt: 0.5
                }}
              >
                {type}
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
