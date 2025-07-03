'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Button,
  IconButton,
  Grid,
  CircularProgress
} from '@mui/material';
import { 
  DocumentScanner,
  ArrowBack,
  CameraAlt,
  Check,
  LocationOn,
  Info,
  ErrorOutline,
  ReceiptLong
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ClientHeader, ClientBottomBar } from '@/components/client';
import { Scanner } from '@yudiel/react-qr-scanner';

export default function ReceiptScanPage() {
  const router = useRouter();
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [reward, setReward] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scanError, setScanError] = useState<string | null>(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  // Comprobar si el dispositivo tiene cámara
  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.mediaDevices) {
      navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          const videoDevices = devices.filter(device => device.kind === 'videoinput');
          setHasCamera(videoDevices.length > 0);
        })
        .catch(err => {
          console.error('Error accediendo a los dispositivos:', err);
          setHasCamera(false);
        });
    } else {
      setHasCamera(false);
    }
  }, []);

  // Manejar resultado exitoso de escaneo
  const handleScanSuccess = (result: any) => {
    // Si el resultado es un array, tomamos el primer elemento, sino usamos el resultado directamente
    const rawValue = Array.isArray(result) && result.length > 0 
      ? result[0].rawValue || result[0] 
      : result.rawValue || result;
    
    setScanning(false);
    setScanned(true);
    setShowScanner(false);
    setScanResult(rawValue);
    
    // Generar una recompensa basada en la boleta escaneada
    const rewards = [
      "¡Felicidades! Has ganado $2.000 en tu billetera por escanear tu boleta.",
      "¡Genial! Has recibido 15 puntos para canjear por productos.",
      "¡Enhorabuena! Has desbloqueado un 10% de descuento en tu próxima compra."
    ];
    setReward(rewards[Math.floor(Math.random() * rewards.length)]);
  };

  // Manejar error de escaneo
  const handleScanError = (error: unknown) => {
    console.error('Error en el escaneo:', error);
    setScanError(`Error al escanear: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    setScanning(false);
  };

  // Iniciar el proceso de escaneo
  const handleScan = () => {
    setScanError(null);
    setScanning(true);
    setShowScanner(true);
  };

  // Reiniciar el escaneo
  const handleReset = () => {
    setScanned(false);
    setReward(null);
    setScanResult(null);
    setScanError(null);
    setShowScanner(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: '90px', // Espacio para el top bar fijo
          mb: '90px',  // Espacio para el bottom bar fijo
          flex: 1 
        }}
      >
        {/* Header con botón de regreso */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton 
            onClick={() => router.back()}
            sx={{ mr: 2, border: '2px solid #ddd' }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ReceiptLong /> Escanear Boleta
          </Typography>
        </Box>

        {/* Información de cómo funciona - Primero */}
        <Paper sx={{ p: 3, mb: 3, border: '2px solid #ddd', boxShadow: 'none' }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Info color="primary" /> ¿Cómo funciona?
          </Typography>
          
          <Typography variant="body2" paragraph>
            1. Toma una boleta o recibo de cualquier compra en CasaMia.
          </Typography>
          <Typography variant="body2" paragraph>
            2. Escanea el código de barras PDF417 ubicado en la parte inferior de la boleta.
          </Typography>
          <Typography variant="body2" paragraph>
            3. Recibe recompensas como saldo en tu billetera, descuentos o puntos para canjear.
          </Typography>
          <Typography variant="body2" paragraph>
            4. Cada boleta se puede escanear una única vez.
          </Typography>
        </Paper>

        {/* Área de escaneo */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 3, 
            border: '2px solid #ddd', 
            boxShadow: 'none', 
            textAlign: 'center',
            borderRadius: 2
          }}
        >
          {!scanned ? (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Escanea el código de barras de tu boleta
              </Typography>
              
              <Box 
                sx={{ 
                  width: '100%', 
                  height: showScanner ? '350px' : '250px', 
                  position: 'relative', 
                  bgcolor: '#f0f0f0', 
                  borderRadius: 1,
                  mb: 3,
                  border: '1px dashed #212121',
                  overflow: 'hidden'
                }}
              >
                {showScanner ? (
                  <Scanner
                    onScan={(result) => handleScanSuccess(result)}
                    onError={(error) => handleScanError(error)}
                    styles={{
                      container: {
                        width: '100%',
                        height: '100%',
                        padding: 0,
                        margin: 0,
                        borderRadius: '4px',
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
                      finder: true, // Muestra el marco para encontrar el código de barras
                      torch: true,  // Muestra el botón de linterna
                      zoom: true    // Muestra el control de zoom
                    }}
                    sound={true}    // Reproduce un sonido al escanear con éxito
                    formats={['pdf417']} // Especificamos solo el formato PDF417
                  />
                ) : (
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      bottom: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <DocumentScanner sx={{ fontSize: 60, color: '#aaa', mb: 2 }} />
                    <Typography variant="body1" color="text.secondary">
                      Presiona el botón para activar la cámara
                    </Typography>
                  </Box>
                )}
                
                {scanning && !showScanner && (
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      bottom: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(0,0,0,0.05)',
                    }}
                  >
                    <CircularProgress size={40} sx={{ mb: 2 }} />
                    <Typography variant="body1">
                      Iniciando cámara...
                    </Typography>
                  </Box>
                )}
              </Box>
              
              {scanError && (
                <Box sx={{ mb: 2, p: 2, bgcolor: '#ffebee', borderRadius: 1 }}>
                  <Typography color="error" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ErrorOutline fontSize="small" /> {scanError}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                    Asegúrate de conceder permisos de cámara en tu navegador y de estar usando HTTPS o localhost.
                  </Typography>
                </Box>
              )}
              
              <Button 
                variant="contained" 
                size="large"
                onClick={handleScan}
                disabled={scanning}
                startIcon={<DocumentScanner />}
                sx={{ py: 1.5, px: 4, mb: 2 }}
              >
                {showScanner ? 'Escaneando...' : 'Activar cámara para escanear'}
              </Button>
              
              <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                <LocationOn fontSize="small" /> 
                {scanError ? 
                  "Por favor, permite el acceso a la cámara cuando el navegador lo solicite" : 
                  "Asegúrate de enfocar correctamente el código de barras"}
              </Typography>
            </>
          ) : (
            <Box sx={{ py: 3 }}>
              <Check sx={{ fontSize: 80, color: '#4caf50', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, color: '#4caf50', fontWeight: 'bold' }}>
                ¡Boleta escaneada con éxito!
              </Typography>
              
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  bgcolor: '#e8f5e9', 
                  border: '1px solid #a5d6a7',
                  borderRadius: 2,
                  mb: 3,
                  maxWidth: '80%',
                  mx: 'auto'
                }}
              >
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {reward}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                  {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
                </Typography>
                {scanResult && (
                  <Box sx={{ 
                    wordBreak: 'break-word',
                    bgcolor: '#f1f8e9',
                    p: 2,
                    borderRadius: 1,
                    mt: 2,
                    border: '1px solid #c5e1a5'
                  }}>
                    <Typography variant="subtitle2" color="primary" sx={{ mb: 0.5 }}>
                      Datos de la boleta:
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      fontFamily: 'monospace',
                      maxHeight: '80px',
                      overflowY: 'auto'
                    }}>
                      {scanResult}
                    </Typography>
                  </Box>
                )}
                
                <Box sx={{ mt: 2, p: 2, bgcolor: '#f1f8e9', borderRadius: 1, border: '1px dashed #a5d6a7' }}>
                  <Typography variant="caption" display="block" sx={{ fontWeight: 'bold' }}>
                    Detalles de la transacción:
                  </Typography>
                  <Typography variant="caption" display="block">
                    Tienda: {Math.floor(Math.random() * 50) + 1}
                  </Typography>
                  <Typography variant="caption" display="block">
                    Monto: ${(Math.random() * 50000 + 5000).toFixed(0)}
                  </Typography>
                  <Typography variant="caption" display="block">
                    Fecha: {new Date().toLocaleDateString()}
                  </Typography>
                </Box>
              </Paper>
              
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button 
                    variant="outlined" 
                    onClick={handleReset}
                  >
                    Escanear Otra Boleta
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                    variant="contained" 
                    onClick={() => router.push('/client')}
                  >
                    Volver al Inicio
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Paper>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
