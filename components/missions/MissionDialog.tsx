import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  IconButton, 
  Box,
  Typography,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Close } from '@mui/icons-material';
import MissionFactory from './MissionFactory';
import { Mission } from '@/types/mission';
import { getMissionTypeFromString } from './MissionUtils';
import './MissionDialog.css'; // Importar estilos CSS

interface MissionDialogProps {
  open: boolean;
  onClose: () => void;
  mission: Mission | null;
  onComplete: (missionId: string) => void;
}

/**
 * Componente de diálogo para mostrar y completar misiones
 * Se utiliza en lugar de navegar a una página nueva
 */
const MissionDialog: React.FC<MissionDialogProps> = ({
  open,
  onClose,
  mission,
  onComplete
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // Ya no usamos fullScreen para que siempre tengamos márgenes
  const fullScreen = false;

  // Si no hay misión seleccionada, no mostramos nada
  if (!mission) {
    return null;
  }

  const handleComplete = (missionId: string) => {
    onComplete(missionId);
    // Cerramos el diálogo después de completar la misión
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  // Clonar la misión y agregar una propiedad que indica que está en un diálogo
  const missionWithDialogFlag = {
    ...mission
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxHeight: '90vh',
          overflow: 'hidden', // Evita el scroll en el diálogo
          mx: { xs: 3, sm: 4, md: 'auto' }, // Margen horizontal mejorado en dispositivos móviles
          width: { xs: 'calc(100% - 48px)', sm: 'calc(100% - 64px)', md: '100%' }, // Ancho ajustado en móviles
          maxWidth: { xs: '100%', sm: '600px', md: '900px' }, // Ancho máximo responsivo
          boxShadow: { xs: '0px 8px 24px rgba(0,0,0,0.15)', sm: '0px 12px 32px rgba(0,0,0,0.2)' } // Sombra mejorada
        }
      }}
    >
      {/* Encabezado personalizado */}
      <Box 
        sx={{ 
          bgcolor: '#2196f3', 
          color: 'white',
          p: { xs: 2, sm: 3 },
          position: 'relative'
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
            label="Activa" 
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

        {/* Botón de cerrar */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: { xs: 8, sm: 12 },
            top: { xs: 8, sm: 12 },
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.2)',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.3)'
            },
            width: { xs: 32, sm: 36 },
            height: { xs: 32, sm: 36 }
          }}
        >
          <Close />
        </IconButton>
      </Box>
      
      <DialogContent 
        className="mission-dialog-content"
        sx={{ 
          p: 0,
          '&:first-of-type': {
            pt: 0
          }
        }}
      >
        <Box sx={{ p: 0 }}>
          <MissionFactory
            mission={missionWithDialogFlag}
            onComplete={handleComplete}
            onCancel={onClose}
            isCompleted={false}
            inDialog={true}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default MissionDialog;
