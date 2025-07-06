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
  Rocket,
  EmojiEvents,
  QrCodeScanner,
  Star,
  Person,
  Logout,
  Notifications,
  ReceiptLong
} from '@mui/icons-material';
import { SimpleCollectionCardIcon } from '@/components/icons';
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
      color: '#212121'
    },
    { 
      text: 'Billetera', 
      icon: <AccountBalanceWallet />, 
      path: '/client/wallet',
      color: '#212121'
    },
    { 
      text: 'Misiones', 
      icon: <Rocket />, 
      path: '/client/missions',
      color: '#212121'
    },
    { 
      text: 'Recompensas', 
      icon: <EmojiEvents />, 
      path: '/client/rewards',
      color: '#212121'
    },
    { 
      text: 'Insignias', 
      icon: <Star />, 
      path: '/client/badges',
      color: '#212121'
    },
    { 
      text: 'Tarjetas de Colección', 
      icon: <SimpleCollectionCardIcon size={24} />, 
      path: '/client/collections',
      color: '#212121'
    }
  ];

  const actionItems = [
    { 
      text: 'Escanear Menu', 
      icon: <QrCodeScanner />, 
      path: '/client/scan-qr',
      color: '#212121'
    },
    { 
      text: 'Escanear Boleta', 
      icon: <ReceiptLong />, 
      path: '/client/scan-receipt',
      color: '#212121'
    }
  ];

  const profileItems = [
    { 
      text: 'Notificaciones', 
      icon: <Notifications />, 
      path: '/client/notifications',
      color: '#212121'
    },
    { 
      text: 'Mi Perfil', 
      icon: <Person />, 
      path: '/client/profile',
      color: '#212121'
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
          border: 'none',
          boxShadow: 'none',
          padding: 0,
          margin: 0
        },
      }}
    >
      <Box sx={{ 
        width: 280, 
        bgcolor: '#f5f5f5', 
        height: '100%',
        padding: 0,
        margin: 0,
        border: 'none'
      }}>
        {/* Header del Sidebar */}
        <Box sx={{ p: 3, bgcolor: '#212121', color: 'white', border: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, border: 'none' }}>
            <Avatar sx={{ 
              width: 50, 
              height: 50, 
              bgcolor: 'white', 
              color: '#212121', 
              boxShadow: 'none',
              border: 'none'
            }}>
              C
            </Avatar>
            <Box sx={{ border: 'none' }}>
              <Typography variant="h6">Cliente</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                CasaMia
              </Typography>
            </Box>
          </Box>
          
          {/* Stats rápidas */}
          <Box sx={{ display: 'flex', gap: 1, border: 'none' }}>
            <Chip 
              label="$15.500" 
              size="small" 
              sx={{ 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                border: 'none !important',
                outline: 'none',
                '& .MuiChip-label': {
                  border: 'none !important'
                },
                '&:focus': {
                  border: 'none !important'
                },
                '&:hover': {
                  border: 'none !important'
                }
              }}
            />
            <Chip 
              label="3 Insignias" 
              size="small" 
              sx={{ 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                border: 'none !important',
                outline: 'none',
                '& .MuiChip-label': {
                  border: 'none !important'
                },
                '&:focus': {
                  border: 'none !important'
                },
                '&:hover': {
                  border: 'none !important'
                }
              }}
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
                    bgcolor: 'rgba(33, 33, 33, 0.1)',
                    border: '1px solid #212121'
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#212121', minWidth: 40 }}>
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
