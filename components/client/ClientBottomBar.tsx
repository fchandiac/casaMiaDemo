import React from 'react';
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box
} from '@mui/material';
import {
  Home,
  AccountBalanceWallet,
  Rocket,
  EmojiEvents,
  QrCodeScanner
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function ClientBottomBar() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleNavigation = (path: string, newValue: number) => {
    setValue(newValue);
    router.push(path);
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
        borderTop: '3px solid #1976d2',
        padding: 0,
        margin: 0
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
          '& .MuiBottomNavigationAction-root': {
            color: '#666',
            '&.Mui-selected': {
              color: '#1976d2'
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
          onClick={() => handleNavigation('/client/scan-qr', 2)}
        />
        <BottomNavigationAction
          label="Misiones"
          icon={<Rocket />}
          onClick={() => handleNavigation('/client/missions', 3)}
        />
        <BottomNavigationAction
          label="Recompensas"
          icon={<EmojiEvents />}
          onClick={() => handleNavigation('/client/rewards', 4)}
        />
      </BottomNavigation>
    </Paper>
  );
}
