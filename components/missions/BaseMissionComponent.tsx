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
 * Componente base para todas las misiones
 * Proporciona la estructura común y el diseño para todas las misiones
 */
const BaseMissionComponent: React.FC<
  MissionComponentProps & { 
    children: React.ReactNode;
    actionButton?: React.ReactNode;
    hideHeader?: boolean; // Nueva prop para ocultar el encabezado
  }
> = ({ 
  mission, 
  onComplete, 
  onCancel, 
  isCompleted = false,
  children,
  actionButton,
  hideHeader = false // Por defecto, se muestra el encabezado
}) => {
  return (
    <Card 
      sx={{ 
        border: `2px solid ${isCompleted ? '#4caf50' : '#2196f3'}`, 
        boxShadow: 'none',
        borderRadius: 2,
        overflow: 'hidden',
        mb: 3
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Encabezado de la misión - Se muestra solo si hideHeader es false */}
        {!hideHeader && (
          <Box 
            sx={{ 
              bgcolor: isCompleted ? '#4caf50' : '#2196f3', 
              color: 'white',
              p: 2
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
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
        )}
        
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
              
              {actionButton ? (
                actionButton
              ) : (
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => onComplete(mission.id)}
                >
                  Completar Misión
                </Button>
              )}
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default BaseMissionComponent;
