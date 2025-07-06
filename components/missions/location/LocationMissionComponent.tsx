import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  CircularProgress,
  Alert,
  AlertTitle
} from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import BaseMissionComponent from '../BaseMissionComponent';
import { LocationMissionProps } from '../MissionInterfaces';

const LocationMissionComponent: React.FC<LocationMissionProps> = ({
  mission,
  storeLocation,
  onComplete,
  onCancel,
  onVerifyLocation,
  isCompleted = false
}) => {
  const [verifying, setVerifying] = useState(false);
  const [userLocation, setUserLocation] = useState<{latitude: number; longitude: number} | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  
  // Función para calcular la distancia entre dos puntos en km usando la fórmula de Haversine
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radio de la tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distancia en km
    return distance;
  };
  
  const handleVerifyLocation = () => {
    setVerifying(true);
    setError(null);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
          setUserLocation({ latitude: userLat, longitude: userLon });
          
          // Calcular distancia entre la ubicación del usuario y la tienda
          const distance = calculateDistance(
            userLat, 
            userLon, 
            storeLocation.latitude, 
            storeLocation.longitude
          );
          
          // Convertir el radio de metros a km para la comparación
          const radiusInKm = storeLocation.radius / 1000;
          
          if (distance <= radiusInKm) {
            // El usuario está dentro del radio permitido
            setVerified(true);
            onVerifyLocation();
            setTimeout(() => {
              onComplete(mission.id);
            }, 1500);
          } else {
            setError(`Estás a ${(distance * 1000).toFixed(0)} metros de ${storeLocation.name}. Necesitas estar a menos de ${storeLocation.radius} metros.`);
          }
          
          setVerifying(false);
        },
        (error) => {
          setVerifying(false);
          switch(error.code) {
            case error.PERMISSION_DENIED:
              setError("No has dado permiso para acceder a tu ubicación. Por favor, habilita el acceso a la ubicación.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("La información de tu ubicación no está disponible.");
              break;
            case error.TIMEOUT:
              setError("La solicitud para obtener tu ubicación ha expirado.");
              break;
            default:
              setError("Ha ocurrido un error desconocido al obtener tu ubicación.");
              break;
          }
        },
        {
          enableHighAccuracy: true, // Mayor precisión
          timeout: 10000,           // Tiempo de espera: 10 segundos
          maximumAge: 0             // No usar caché
        }
      );
    } else {
      setVerifying(false);
      setError("Tu navegador no soporta geolocalización, lo cual es necesario para esta misión.");
    }
  };
  
  const ActionButton = (
    <Button 
      variant="contained" 
      color="primary"
      onClick={handleVerifyLocation}
      disabled={verifying}
      startIcon={verifying ? <CircularProgress size={20} color="inherit" /> : <LocationOn />}
    >
      {verifying ? "Verificando..." : "Verificar mi Ubicación"}
    </Button>
  );
  
  return (
    <BaseMissionComponent
      mission={mission}
      onComplete={onComplete}
      onCancel={onCancel}
      isCompleted={isCompleted}
      actionButton={!isCompleted && !verified ? ActionButton : undefined}
    >
      {isCompleted ? (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="h6" color="success.main" sx={{ fontWeight: 'bold', mb: 1 }}>
            ¡Has visitado {storeLocation.name}!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gracias por tu visita a nuestra tienda.
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
              Ubicación a Visitar
            </Typography>
            
            <Paper elevation={0} sx={{ p: 2, border: '1px solid #eee' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">{storeLocation.name}</Typography>
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {storeLocation.address}
              </Typography>
              
              <Divider sx={{ my: 1 }} />
              
              <Typography variant="body2">
                Debes estar a menos de <strong>{storeLocation.radius} metros</strong> de la tienda para completar esta misión.
              </Typography>
            </Paper>
          </Box>
          
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          
          {verified && (
            <Alert severity="success" sx={{ mb: 3 }}>
              <AlertTitle>¡Ubicación verificada!</AlertTitle>
              Has completado con éxito la visita a {storeLocation.name}.
            </Alert>
          )}
          
          {userLocation && !verified && !error && (
            <Alert severity="info" sx={{ mb: 3 }}>
              <AlertTitle>Ubicación actual</AlertTitle>
              Estamos verificando si te encuentras en la ubicación correcta...
            </Alert>
          )}
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Para completar esta misión, debes visitar físicamente la tienda de CasaMia indicada. Una vez allí, presiona el botón "Verificar mi Ubicación" para validar tu presencia.
          </Typography>
        </>
      )}
    </BaseMissionComponent>
  );
};

export default LocationMissionComponent;
