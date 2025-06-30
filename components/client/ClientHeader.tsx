import React, { useState } from 'react';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          boxShadow: 'none', 
          borderBottom: '3px solid #1976d2',
          top: 0,
          zIndex: 1100
        }}
      >
        <Toolbar sx={{ minHeight: '80px' }}>
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
          <IconButton color="inherit">
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
