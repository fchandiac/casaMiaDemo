import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  CardActions
} from '@mui/material';
import { QrCodeRounded } from '@mui/icons-material';
import { SimpleCollectionCardIcon } from '@/components/icons';
import QRValidationDialog from './QRValidationDialog';

interface CollectionCardProps {
  productName: string;
  completedCount: number;
  totalCount: number;
}

export default function CollectionCard({ 
  productName, 
  completedCount, 
  totalCount 
}: CollectionCardProps) {
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const isCollecting = completedCount < totalCount; // Mostrar botón mientras no esté completada
  
  const handleOpenQrDialog = () => {
    setQrDialogOpen(true);
  };
  
  const handleCloseQrDialog = () => {
    setQrDialogOpen(false);
  };

  return (
    <>
      <Card 
        sx={{ 
          border: '2px solid #ddd', 
          boxShadow: 'none',
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Imagen/Icono del producto (placeholder) */}
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: '#f5f5f5',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ddd'
              }}
            >
              <SimpleCollectionCardIcon size={40} />
            </Box>

            {/* Contenido principal */}
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Tarjeta de colección
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 'bold',
                  mt: 0.5,
                  lineHeight: 1.2,
                  fontSize: '1rem'
                }}
              >
                {productName}
              </Typography>

              {/* Círculos de progreso */}
              <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
                {Array.from({ length: totalCount }).map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      bgcolor: index < completedCount ? '#4caf50' : 'transparent',
                      border: '2px solid #4caf50',
                      transition: 'all 0.2s ease'
                    }}
                  />
                ))}
                <Typography 
                  variant="caption" 
                  sx={{ 
                    ml: 1, 
                    color: 'text.secondary',
                    fontWeight: 'medium'
                  }}
                >
                  {completedCount}/{totalCount}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
        
        {/* Botón de validación para tarjetas en progreso */}
        {isCollecting && (
          <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="small" 
              fullWidth
              startIcon={<QrCodeRounded />}
              onClick={handleOpenQrDialog}
              sx={{ 
                borderRadius: 1.5,
                textTransform: 'none',
                fontWeight: 'medium'
              }}
            >
              Validar nuevo consumo
            </Button>
          </CardActions>
        )}
      </Card>
      
      {/* Diálogo de validación con QR */}
      <QRValidationDialog 
        open={qrDialogOpen}
        onClose={handleCloseQrDialog}
        productName={productName}
        currentCount={completedCount}
        totalCount={totalCount}
      />
    </>
  );
}
