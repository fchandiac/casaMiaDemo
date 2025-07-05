import React, { useState } from 'react';
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Home,
  AccountBalanceWallet,
  Rocket,
  QrCodeScanner,
  ReceiptLong
} from '@mui/icons-material';
import { SimpleCollectionCardIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';

export default function ClientBottomBar() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const [scanMenuAnchor, setScanMenuAnchor] = useState<null | HTMLElement>(null);
  const scanMenuOpen = Boolean(scanMenuAnchor);

  const handleNavigation = (path: string, newValue: number) => {
    setValue(newValue);
    router.push(path);
  };

  const handleScanClick = (event: React.MouseEvent<HTMLElement>) => {
    setScanMenuAnchor(event.currentTarget);
  };

  const handleScanMenuClose = () => {
    setScanMenuAnchor(null);
  };

  const handleScanOption = (path: string) => {
    handleScanMenuClose();
    router.push(path);
    setValue(2); // Mantener el botón de escaneo seleccionado
  };

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1100,
        boxShadow: 'none',
        borderTop: '3px solid #212121',
        padding: 0,
        margin: 0,
        borderRadius: 0 // Eliminando cualquier redondeo de bordes
      }} 
      elevation={0}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          height: 70,
          minHeight: 70,
          maxHeight: 70,
          padding: 0,
          bgcolor: '#212121', // Color primario como fondo
          borderRadius: 0, // Eliminando cualquier redondeo de bordes
          '& .MuiBottomNavigationAction-root': {
            color: 'rgba(255, 255, 255, 0.6)', // Color de iconos no seleccionados con mejor contraste
            '&.Mui-selected': {
              color: 'white' // Color de iconos seleccionados
            }
          }
        }}
      >
        <BottomNavigationAction
          label="Inicio"
          icon={<Home />}
          onClick={() => handleNavigation('/client', 0)}
        />
        <BottomNavigationAction
          label="Billetera"
          icon={<AccountBalanceWallet />}
          onClick={() => handleNavigation('/client/wallet', 1)}
        />
        <BottomNavigationAction
          label="Escanear"
          icon={<QrCodeScanner />}
          onClick={handleScanClick}
        />
        <BottomNavigationAction
          label="Misiones"
          icon={<Rocket />}
          onClick={() => handleNavigation('/client/missions', 3)}
        />
        <BottomNavigationAction
          label="Colecciones"
          icon={<SimpleCollectionCardIcon />}
          onClick={() => handleNavigation('/client/collections', 4)}
        />
      </BottomNavigation>

      {/* Menú emergente para opciones de escaneo */}
      <Menu
        anchorEl={scanMenuAnchor}
        open={scanMenuOpen}
        onClose={handleScanMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: -1,
            width: 220,
            borderRadius: 0, // Eliminando los bordes redondeados
            '& .MuiMenuItem-root': {
              py: 1.5
            }
          }
        }}
      >
        <MenuItem onClick={() => handleScanOption('/client/scan-qr')}>
          <ListItemIcon>
            <QrCodeScanner fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Escanear QR" secondary="Menús y productos" />
        </MenuItem>
        <MenuItem onClick={() => handleScanOption('/client/scan-receipt')}>
          <ListItemIcon>
            <ReceiptLong fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Escanear Boleta" secondary="Códigos PDF417" />
        </MenuItem>
      </Menu>
    </Paper>
  );
}
