import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  IconButton
} from '@mui/material';
import { Close, Backspace } from '@mui/icons-material';

interface WalletKeypadDialogProps {
  open: boolean;
  onClose: () => void;
  availableBalance: number;
  onConfirm: (amount: number) => void;
}

export default function WalletKeypadDialog({
  open,
  onClose,
  availableBalance,
  onConfirm
}: WalletKeypadDialogProps) {
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Resetear el monto cuando se abre el diálogo
  useEffect(() => {
    if (open) {
      setAmount('');
      setError(null);
    }
  }, [open]);

  // Función para agregar un dígito al monto
  const addDigit = (digit: string) => {
    // No permitir agregar dígitos si ya hay un error
    if (error) return;

    // Formatear para que sea un número válido
    let newAmount = amount + digit;
    
    // Eliminar ceros al inicio si no es el primer dígito
    if (newAmount.length > 1 && newAmount.startsWith('0')) {
      newAmount = newAmount.substring(1);
    }

    // Validar que no exceda el saldo disponible
    const numericAmount = parseInt(newAmount, 10);
    if (numericAmount > availableBalance) {
      setError(`El monto no puede superar tu saldo disponible de $${availableBalance.toLocaleString()}`);
      return;
    }

    // Validar longitud máxima (por ejemplo, 6 dígitos para evitar montos excesivos)
    if (newAmount.length > 6) {
      return;
    }

    setAmount(newAmount);
  };

  // Función para eliminar el último dígito
  const removeLastDigit = () => {
    setAmount(prev => prev.slice(0, -1));
    setError(null); // Limpiar error al editar
  };

  // Función para limpiar el monto
  const clearAmount = () => {
    setAmount('');
    setError(null);
  };

  // Función para formatear el monto con separadores de miles
  const formattedAmount = amount ? parseInt(amount, 10).toLocaleString() : '0';

  // Función para confirmar el monto
  const handleConfirm = () => {
    const numericAmount = parseInt(amount, 10);
    
    // Validación final
    if (!amount || numericAmount <= 0) {
      setError('Ingresa un monto válido mayor a $0');
      return;
    }
    
    if (numericAmount > availableBalance) {
      setError(`El monto no puede superar tu saldo disponible de $${availableBalance.toLocaleString()}`);
      return;
    }
    
    onConfirm(numericAmount);
  };

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
        <Typography variant="h6">Usar Saldo</Typography>
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
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          Ingresa el monto que deseas utilizar de tu saldo disponible (${availableBalance.toLocaleString()})
        </Typography>
        
        {/* Pantalla donde se muestra el monto */}
        <Paper
          sx={{
            p: 2,
            mb: 3,
            border: error ? '2px solid #f44336' : '2px solid #e0e0e0',
            boxShadow: 'none',
            borderRadius: 2,
            bgcolor: '#fcfcfc',
            position: 'relative'
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'right', 
              fontWeight: 'bold',
              color: error ? '#f44336' : '#4caf50'
            }}
          >
            ${formattedAmount}
          </Typography>
          
          {/* Botón para borrar todo el monto */}
          {amount && (
            <IconButton
              size="small"
              onClick={clearAmount}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'text.secondary'
              }}
            >
              <Close fontSize="small" />
            </IconButton>
          )}
        </Paper>

        {/* Mensaje de error */}
        {error && (
          <Typography 
            variant="body2" 
            color="error" 
            sx={{ 
              mb: 2, 
              px: 1,
              py: 0.5,
              bgcolor: '#ffebee',
              borderRadius: 1
            }}
          >
            {error}
          </Typography>
        )}
        
        {/* Teclado numérico */}
        <Grid container spacing={1}>
          {/* Primera fila: 1, 2, 3 */}
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('1')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('2')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('3')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              3
            </Button>
          </Grid>
          
          {/* Segunda fila: 4, 5, 6 */}
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('4')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('5')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('6')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              6
            </Button>
          </Grid>
          
          {/* Tercera fila: 7, 8, 9 */}
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('7')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('8')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('9')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              9
            </Button>
          </Grid>
          
          {/* Cuarta fila: 0, borrar */}
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('0')}
              sx={{ height: 56, borderRadius: 2, fontSize: 20 }}
            >
              0
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => addDigit('00')}
              sx={{ height: 56, borderRadius: 2, fontSize: 18 }}
            >
              00
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              onClick={removeLastDigit}
              sx={{ height: 56, borderRadius: 2 }}
            >
              <Backspace />
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      
      <Divider />
      
      <DialogActions sx={{ p: 2, flexDirection: 'column' }}>
        <Button 
          onClick={handleConfirm} 
          variant="contained" 
          fullWidth
          disabled={!amount || parseInt(amount, 10) <= 0 || !!error}
          sx={{ 
            borderRadius: 2, 
            py: 1.5,
            bgcolor: '#4caf50',
            '&:hover': {
              bgcolor: '#388e3c',
            }
          }}
        >
          Continuar
        </Button>
        <Button 
          onClick={onClose} 
          variant="text" 
          fullWidth
          sx={{ mt: 1 }}
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
