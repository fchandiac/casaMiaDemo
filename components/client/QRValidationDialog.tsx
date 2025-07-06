import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Divider
} from '@mui/material';
import { Close } from '@mui/icons-material';

interface QRValidationDialogProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  currentCount: number;
  totalCount: number;
}

export default function QRValidationDialog({
  open,
  onClose,
  productName,
  currentCount,
  totalCount
}: QRValidationDialogProps) {
  // Este sería un QR generado dinámicamente con información del producto
  // En un caso real, generaríamos el QR con datos específicos como el ID del producto y el usuario
  const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + 
                    encodeURIComponent(`product:${productName}:user:12345:timestamp:${Date.now()}`);
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        elevation: 0,
        sx: {
          borderRadius: 2,
          border: '2px solid #ddd'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        pb: 1
      }}>
        <Typography variant="h6">Validar Colección</Typography>
        <Button 
          onClick={onClose} 
          color="inherit" 
          sx={{ minWidth: 'auto', p: 1 }}
        >
          <Close />
        </Button>
      </DialogTitle>
      
      <Divider />
      
      <DialogContent sx={{ py: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
          {productName}
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
          Muestra este código QR al operador para validar tu consumo y avanzar en tu colección ({currentCount}/{totalCount})
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 2,
          p: 2,
          border: '2px solid #f0f0f0',
          borderRadius: 2,
          bgcolor: '#fcfcfc'
        }}>
          <img 
            src={qrCodeUrl} 
            alt="Código QR de validación" 
            style={{ 
              width: 180, 
              height: 180,
              display: 'block'
            }} 
          />
        </Box>
        
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'text.secondary' }}>
          Este código QR es válido durante 5 minutos
        </Typography>
      </DialogContent>
      
      <Divider />
      
      <DialogActions sx={{ p: 2 }}>
        <Button 
          onClick={onClose} 
          variant="outlined" 
          fullWidth
          sx={{ borderRadius: 2 }}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
