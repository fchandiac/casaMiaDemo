import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Divider,
  Paper
} from '@mui/material';
import { Close, Check, AccountBalanceWallet } from '@mui/icons-material';

interface WalletQRDialogProps {
  open: boolean;
  onClose: () => void;
  amount: number;
}

export default function WalletQRDialog({
  open,
  onClose,
  amount
}: WalletQRDialogProps) {
  // Este sería un QR generado dinámicamente con información del pago
  // En un caso real, generaríamos el QR con datos específicos como el ID del usuario, monto y timestamp
  const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + 
                    encodeURIComponent(`payment:user:12345:amount:${amount}:timestamp:${Date.now()}`);
  
  // Formatear el monto para mostrar
  const formattedAmount = amount.toLocaleString();
  
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
        <Typography variant="h6">Pago con Saldo</Typography>
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
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Paper
            elevation={0}
            sx={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              borderRadius: 2,
              border: '2px solid #4caf50',
              bgcolor: '#f1f8e9',
              mb: 2
            }}
          >
            <AccountBalanceWallet sx={{ color: '#4caf50', fontSize: 32, mb: 1 }} />
            <Typography variant="h5" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
              ${formattedAmount}
            </Typography>
          </Paper>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Muestra este código QR al operador para validar tu pago
          </Typography>
        </Box>
        
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
            alt="Código QR de pago" 
            style={{ 
              width: 200, 
              height: 200,
              display: 'block'
            }} 
          />
        </Box>
        
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'text.secondary' }}>
          Este código QR es válido durante 5 minutos
        </Typography>
        
        <Box sx={{ 
          mt: 2, 
          p: 2, 
          bgcolor: '#f5f5f5', 
          borderRadius: 2,
          border: '1px solid #e0e0e0'
        }}>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Check fontSize="small" color="success" /> Solicitud de pago registrada
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <Check fontSize="small" color="success" /> Esperando validación del operador
          </Typography>
        </Box>
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
