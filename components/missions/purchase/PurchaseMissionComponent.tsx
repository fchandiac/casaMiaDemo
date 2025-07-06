import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  Alert,
  AlertTitle,
  Chip,
  Avatar
} from '@mui/material';
import { ReceiptLong, ShoppingBag } from '@mui/icons-material';
import BaseMissionComponent from '../BaseMissionComponent';
import { PurchaseMissionProps } from '../MissionInterfaces';
import { Scanner } from '@yudiel/react-qr-scanner';

const PurchaseMissionComponent: React.FC<PurchaseMissionProps> = ({
  mission,
  product,
  onComplete,
  onCancel,
  onScanReceipt,
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
    // Normalizar el resultado del escaneo
    const rawValue = Array.isArray(result) && result.length > 0 
      ? result[0].rawValue || result[0] 
      : result.rawValue || result;
    
    setScanResult(rawValue);
    setScanning(false);
    
    try {
      onScanReceipt(rawValue);
      setSuccess(true);
      setTimeout(() => {
        onComplete(mission.id);
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo validar la compra con este recibo');
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
      startIcon={<ReceiptLong />}
    >
      Escanear Boleta
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
            ¡Compra de {product.name} Verificada!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tu compra ha sido validada correctamente.
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
              Producto a Comprar
            </Typography>
            
            <Paper elevation={0} sx={{ p: 2, border: '1px solid #eee' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Avatar 
                  src={product.imageUrl} 
                  variant="rounded"
                  sx={{ 
                    width: 60, 
                    height: 60,
                    bgcolor: '#f0f0f0'
                  }}
                >
                  <ShoppingBag />
                </Avatar>
                
                <Box>
                  <Typography variant="h6" sx={{ mb: 0.5 }}>{product.name}</Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {product.description}
                  </Typography>
                  
                  <Chip 
                    label="Pendiente de validación" 
                    color="warning" 
                    size="small" 
                    variant="outlined"
                  />
                </Box>
              </Box>
            </Paper>
          </Box>
          
          {scanning && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Escanea el código de la boleta (PDF417)
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
                    finder: true,
                    torch: true,
                    zoom: true
                  }}
                  sound={true}
                  formats={['pdf417']} // Especificamos solo el formato PDF417 para boletas
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
              <AlertTitle>¡Compra verificada!</AlertTitle>
              Se ha validado tu compra del producto {product.name}.
            </Alert>
          )}
          
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="body2" color="text.secondary">
            Para completar esta misión, compra el producto indicado y luego escanea el código PDF417 de tu boleta para validar la compra.
          </Typography>
        </>
      )}
    </BaseMissionComponent>
  );
};

export default PurchaseMissionComponent;
