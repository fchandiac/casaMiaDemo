import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
  Button
} from '@mui/material';
import { MissionComponentProps } from './MissionInterfaces';

/**
 * Versión del BaseMissionComponent específica para diálogos
 * No incluye el encabezado para evitar duplicación con el título del diálogo
 */
const DialogMissionComponent: React.FC<
  MissionComponentProps & { 
    children: React.ReactNode;
    actionButton?: React.ReactNode;
  }
> = ({ 
  mission, 
  onComplete, 
  onCancel, 
  isCompleted = false,
  children,
  actionButton
}) => {
  return (
    <Card 
      sx={{ 
        border: 'none',
        boxShadow: 'none',
        borderRadius: 0,
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Encabezado de la misión */}
        <Box 
          sx={{ 
            bgcolor: isCompleted ? '#4caf50' : '#2196f3', 
            color: 'white',
            p: 2
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', pr: 5 }}>
            {mission.name}
          </Typography>
          
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {mission.description}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <Chip 
              label={isCompleted ? "Completada" : "Activa"} 
              size="small" 
              sx={{ 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
            {mission.rewardId && (
              <Chip 
                label="Recompensa disponible" 
                size="small" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  color: 'white' 
                }} 
              />
            )}
          </Box>
        </Box>
        
        {/* Contenido específico de cada tipo de misión */}
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
        
        {/* Acciones de la misión */}
        {!isCompleted && (
          <>
            <Divider />
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
              {onCancel && (
                <Button 
                  variant="text" 
                  color="inherit" 
                  onClick={onCancel}
                  sx={{ color: 'text.secondary' }}
                >
                  Cancelar
                </Button>
              )}
              
              <Box sx={{ ml: 'auto' }}>
                {actionButton}
              </Box>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DialogMissionComponent;
