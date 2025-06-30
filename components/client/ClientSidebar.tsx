import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Avatar,
  Chip
} from '@mui/material';
import {
  Home,
  AccountBalanceWallet,
  Assignment,
  EmojiEvents,
  QrCodeScanner,
  Star,
  Person,
  Logout,
  Notifications
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

interface ClientSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function ClientSidebar({ open, onClose }: ClientSidebarProps) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  const menuItems = [
    { 
      text: 'Inicio', 
      icon: <Home />, 
      path: '/client',
      color: '#1976d2'
    },
    { 
      text: 'Billetera', 
      icon: <AccountBalanceWallet />, 
      path: '/client/wallet',
      color: '#1976d2'
    },
    { 
      text: 'Misiones', 
      icon: <Assignment />, 
      path: '/client/missions',
      color: '#1976d2'
    },
    { 
      text: 'Recompensas', 
      icon: <EmojiEvents />, 
      path: '/client/rewards',
      color: '#1976d2'
    },
    { 
      text: 'Insignias', 
      icon: <Star />, 
      path: '/client/badges',
      color: '#1976d2'
    }
  ];

  const actionItems = [
    { 
      text: 'Escanear Menu', 
      icon: <QrCodeScanner />, 
      path: '/client/scan-qr',
      color: '#1976d2'
    },
    { 
      text: 'Escanear Boleta', 
      icon: <QrCodeScanner />, 
      path: '/client/scan-receipt',
      color: '#1976d2'
    }
  ];

  const profileItems = [
    { 
      text: 'Notificaciones', 
      icon: <Notifications />, 
      path: '/client/notifications',
      color: '#1976d2'
    },
    { 
      text: 'Mi Perfil', 
      icon: <Person />, 
      path: '/client/profile',
      color: '#1976d2'
    }
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          border: '2px solid #ddd',
          boxShadow: 'none'
        },
      }}
    >
      <Box sx={{ width: 280, bgcolor: '#f5f5f5', height: '100%' }}>
        {/* Header del Sidebar */}
        <Box sx={{ p: 3, bgcolor: '#1976d2', color: 'white', border: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: 'white', color: '#1976d2', boxShadow: 'none' }}>
              C
            </Avatar>
            <Box>
              <Typography variant="h6">Cliente</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                CasaMia
              </Typography>
            </Box>
          </Box>
          
          {/* Stats rápidas */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip 
              label="$15.500" 
              size="small" 
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
            />
            <Chip 
              label="3 Insignias" 
              size="small" 
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
            />
          </Box>
        </Box>

        <Box sx={{ p: 1 }}>
          {/* Sección Principal */}
          <List sx={{ py: 0 }}>
            {menuItems.map((item) => (
              <ListItem key={item.text} sx={{ py: 0 }}>
                <ListItemButton 
                  onClick={() => handleNavigation(item.path)}
                  sx={{ 
                    borderRadius: 1, 
                    mb: 0.5,
                    border: '1px solid transparent',
                    '&:hover': { 
                      bgcolor: 'rgba(25, 118, 210, 0.1)',
                      border: '1px solid #1976d2'
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: item.color, minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{ 
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 1 }} />

          {/* Sección Acciones */}
          <List sx={{ py: 0 }}>
            {actionItems.map((item) => (
              <ListItem key={item.text} sx={{ py: 0 }}>
                <ListItemButton 
                  onClick={() => handleNavigation(item.path)}
                  sx={{ 
                    borderRadius: 1, 
                    mb: 0.5,
                    border: '1px solid transparent',
                    '&:hover': { 
                      bgcolor: 'rgba(25, 118, 210, 0.1)',
                      border: '1px solid #1976d2'
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: item.color, minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{ 
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 1 }} />

          {/* Sección Perfil */}
          <List sx={{ py: 0 }}>
            {profileItems.map((item) => (
              <ListItem key={item.text} sx={{ py: 0 }}>
                <ListItemButton 
                  onClick={() => handleNavigation(item.path)}
                  sx={{ 
                    borderRadius: 1, 
                    mb: 0.5,
                    border: '1px solid transparent',
                    '&:hover': { 
                      bgcolor: 'rgba(25, 118, 210, 0.1)',
                      border: '1px solid #1976d2'
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: item.color, minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{ 
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            
            {/* Cerrar Sesión */}
            <ListItem sx={{ py: 0 }}>
              <ListItemButton 
                onClick={() => handleNavigation('/')}
                sx={{ 
                  borderRadius: 1, 
                  mb: 0.5,
                  border: '1px solid transparent',
                  '&:hover': { 
                    bgcolor: 'rgba(25, 118, 210, 0.1)',
                    border: '1px solid #1976d2'
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#1976d2', minWidth: 40 }}>
                  <Logout />
                </ListItemIcon>
                <ListItemText 
                  primary="Cerrar Sesión"
                  primaryTypographyProps={{ 
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
