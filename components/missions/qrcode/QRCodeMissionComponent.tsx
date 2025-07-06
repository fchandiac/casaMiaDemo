import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  Alert,
  AlertTitle
} from '@mui/material';
import { QrCodeScanner, LocationOn } from '@mui/icons-material';
import BaseMissionComponent from '../BaseMissionComponent';
import { QRCodeMissionProps } from '../MissionInterfaces';
import { Scanner } from '@yudiel/react-qr-scanner';

const QRCodeMissionComponent: React.FC<QRCodeMissionProps> = ({
  mission,
  storeInfo,
  onComplete,
  onCancel,
  onScanQR,
  isCompleted = false
}) => {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const handleScan = () => {
    setScanning(true);
    setError(null);
    setScanResult(null);
  };
  
  const handleScanSuccess = (result: any) => {
    // Normalizar el resultado del escaneo (diferentes librerías pueden devolver formatos diferentes)
    const rawValue = Array.isArray(result) && result.length > 0 
      ? result[0].rawValue || result[0] 
      : result.rawValue || result;
    
    setScanResult(rawValue);
    setScanning(false);
    
    try {
      onScanQR(rawValue);
      setSuccess(true);
      setTimeout(() => {
        onComplete(mission.id);
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Código QR no válido para esta misión');
    }
  };
  
  const handleScanError = (error: any) => {
    setScanning(false);
    setError('Error al escanear: ' + (error.message || 'Error desconocido'));
  };
  
  const ActionButton = (
    <Button 
      variant="contained" 
      color="primary"
      onClick={handleScan}
      startIcon={<QrCodeScanner />}
    >
      Escanear Código QR
    </Button>
  );
  
  return (
    <BaseMissionComponent
      mission={mission}
      onComplete={onComplete}
      onCancel={onCancel}
      isCompleted={isCompleted}
      actionButton={!isCompleted && !success ? ActionButton : undefined}
    >
      {isCompleted ? (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="h6" color="success.main" sx={{ fontWeight: 'bold', mb: 1 }}>
            ¡Has encontrado el código QR oculto!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Felicidades por completar esta misión de búsqueda.
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
              Encuentra el Código QR Oculto
            </Typography>
            
            <Paper elevation={0} sx={{ p: 2, border: '1px solid #eee' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">{storeInfo.name}</Typography>
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {storeInfo.address}
              </Typography>
              
              <Divider sx={{ my: 1 }} />
              
              <Typography variant="body2">
                Busca un código QR especial escondido en esta tienda y escanéalo para completar la misión.
              </Typography>
            </Paper>
          </Box>
          
          {scanning && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Escanea el código QR
              </Typography>
              
              <Box 
                sx={{ 
                  height: 300, 
                  width: '100%', 
                  overflow: 'hidden',
                  borderRadius: 1,
                  border: '1px solid #ddd'
                }}
              >
                <Scanner
                  onScan={handleScanSuccess}
                  onError={handleScanError}
                  styles={{
                    container: {
                      width: '100%',
                      height: '100%',
                    },
                    video: {
                      width: '100%',
                      height: '100%',
                    }
                  }}
                  constraints={{
                    facingMode: 'environment' // usa la cámara trasera cuando esté disponible
                  }}
                  components={{
                    finder: true, // Muestra el marco para encontrar el código QR
                    torch: true,  // Muestra el botón de linterna
                    zoom: true    // Muestra el control de zoom
                  }}
                  sound={true}    // Reproduce un sonido al escanear con éxito
                />
              </Box>
            </Box>
          )}
          
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          
          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              <AlertTitle>¡Código QR encontrado!</AlertTitle>
              Has encontrado el código QR correcto. ¡Misión completada!
            </Alert>
          )}
          
          {scanResult && !success && !error && (
            <Alert severity="info" sx={{ mb: 3 }}>
              <AlertTitle>Código escaneado</AlertTitle>
              El código QR escaneado no corresponde a esta misión. Intenta con otro.
            </Alert>
          )}
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Para completar esta misión, explora la tienda y encuentra el código QR oculto. Una vez que lo encuentres, escanéalo con tu dispositivo.
          </Typography>
        </>
      )}
    </BaseMissionComponent>
  );
};

export default QRCodeMissionComponent;
