import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Badge
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications,
  AccountBalanceWallet
} from '@mui/icons-material';
import ClientSidebar from './ClientSidebar';

export default function ClientHeader() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const goToNotifications = () => {
    router.push('/client/notifications');
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          boxShadow: 'none', 
          borderBottom: '3px solid #212121',
          top: 0,
          zIndex: 1100,
          padding: 0,
          margin: 0
        }}
      >
        <Toolbar sx={{ 
          minHeight: '70px',
          height: '70px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: 0,
          paddingBottom: 0
        }}>
          {/* Botón del menú */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo y título */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CasaMia
          </Typography>

          {/* Saldo rápido */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <AccountBalanceWallet sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              $15.500
            </Typography>
          </Box>

          {/* Notificaciones */}
          <IconButton 
            color="inherit"
            onClick={goToNotifications}
            aria-label="Ver notificaciones"
          >
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar del cliente */}
      <ClientSidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
    </>
  );
}
