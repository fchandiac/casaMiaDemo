'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  Chip,
  Button,
  Badge,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  ArrowBack,
  Delete,
  MoreVert,
  Done,
  StarRate,
  CardGiftcard,
  LocalOffer,
  Info,
  Event,
  Campaign,
  MarkEmailRead,
  ErrorOutline,
  Cake as CakeIcon,
  Restaurant as RestaurantIcon
} from '@mui/icons-material';
import { ClientHeader, ClientBottomBar } from '@/components/client';
import { Notification } from '@/types/users';

// Función para generar fecha formateada
const formatDate = (date: Date): string => {
  const now = new Date();
  const notificationDate = new Date(date);
  
  // Si es hoy
  if (notificationDate.toDateString() === now.toDateString()) {
    return `Hoy, ${notificationDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  
  // Si es ayer
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (notificationDate.toDateString() === yesterday.toDateString()) {
    return `Ayer, ${notificationDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  
  // Si es de esta semana (menos de 7 días)
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dayDiff = Math.floor((now.getTime() - notificationDate.getTime()) / (1000 * 60 * 60 * 24));
  
  if (dayDiff < 7) {
    return `${daysOfWeek[notificationDate.getDay()]}, ${notificationDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  
  // Para fechas más antiguas
  return notificationDate.toLocaleDateString();
};

// Función para obtener el icono según el tipo de notificación
const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'reward':
      return <CardGiftcard sx={{ color: '#F9A825' }} />;
    case 'promo':
      return <LocalOffer sx={{ color: '#7B1FA2' }} />;
    case 'badge':
      return <StarRate sx={{ color: '#D32F2F' }} />;
    case 'info':
      return <Info sx={{ color: '#1976D2' }} />;
    case 'event':
      return <Event sx={{ color: '#388E3C' }} />;
    case 'birthday':
      return <CakeIcon sx={{ color: '#E91E63' }} />;
    case 'featured':
      return <RestaurantIcon sx={{ color: '#FF5722' }} />;
    default:
      return <NotificationsIcon sx={{ color: '#616161' }} />;
  }
};

// Datos de ejemplo para las notificaciones
const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: 'user-123',
    type: 'birthday',
    title: '¡Feliz Cumpleaños!',
    message: 'Te deseamos un excelente día. Tenemos un regalo especial para ti en tu próxima visita.',
    sentDate: new Date(2025, 6, 3, 8, 0), // Hoy
    read: false
  },
  {
    id: '2',
    userId: 'user-123',
    type: 'featured',
    title: 'Producto Destacado',
    message: 'Prueba nuestro nuevo Croissant de Chocolate Belga, elaborado con ingredientes premium.',
    sentDate: new Date(2025, 6, 2, 10, 15), // Ayer
    read: false
  },
  {
    id: '3',
    userId: 'user-123',
    type: 'promo',
    title: 'Oferta Especial',
    message: '2x1 en todos nuestros cafés después de las 17h. ¡Válido solo hoy!',
    sentDate: new Date(2025, 6, 1, 9, 30), // Hace 2 días
    read: true
  },
  {
    id: '4',
    userId: 'user-123',
    type: 'reward',
    title: 'Puntos Acumulados',
    message: 'Has alcanzado 200 puntos en tu cuenta. ¡Sigue acumulando para más beneficios!',
    sentDate: new Date(2025, 5, 25, 14, 45), // Hace una semana
    read: true
  }
];

export default function NotificationsPage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedNotification, setSelectedNotification] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'info' | 'warning'
  });

  // Cargar notificaciones (simulación)
  useEffect(() => {
    const loadNotifications = async () => {
      // Simulamos una carga de datos con un delay
      setTimeout(() => {
        setNotifications(mockNotifications);
        setLoading(false);
      }, 800);
    };

    loadNotifications();
  }, []);

  // Filtrar notificaciones según la pestaña seleccionada
  const filteredNotifications = tabValue === 0 
    ? notifications.filter(n => !n.read)
    : tabValue === 1 
      ? notifications.filter(n => n.read) 
      : notifications;

  // Contar notificaciones no leídas
  const unreadCount = notifications.filter(n => !n.read).length;

  // Marcar como leída
  const markAsRead = (id: string) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
    
    setSnackbar({
      open: true,
      message: 'Notificación marcada como leída',
      severity: 'success'
    });
  };

  // Marcar todas como leídas
  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
    
    setSnackbar({
      open: true,
      message: 'Todas las notificaciones marcadas como leídas',
      severity: 'success'
    });
  };

  // Eliminar notificación
  const deleteNotification = (id: string) => {
    setNotifications(prevNotifications => 
      prevNotifications.filter(notification => notification.id !== id)
    );
    
    setSnackbar({
      open: true,
      message: 'Notificación eliminada',
      severity: 'info'
    });
  };

  // Eliminar todas las notificaciones
  const deleteAllNotifications = () => {
    setNotifications([]);
    
    setSnackbar({
      open: true,
      message: 'Todas las notificaciones han sido eliminadas',
      severity: 'info'
    });
  };

  // Gestionar el menú contextual
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedNotification(id);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setSelectedNotification(null);
  };

  // Cambiar de pestaña
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Cerrar snackbar
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: '90px', // Espacio para el header
          mb: '90px',  // Espacio para el bottom bar
          flex: 1 
        }}
      >
        {/* Header con botón de regreso */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, mb: 2, gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              onClick={() => router.back()}
              sx={{ mr: 2, border: '2px solid #ddd' }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <NotificationsIcon /> 
              Notificaciones
              {unreadCount > 0 && (
                <Badge 
                  badgeContent={unreadCount} 
                  color="error" 
                  sx={{ ml: 1 }}
                />
              )}
            </Typography>
          </Box>
          
          {/* Acciones para todas las notificaciones */}
          {notifications.length > 0 && (
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              mt: { xs: 1, sm: 0 },
              ml: { xs: 0, sm: 'auto' },
              flexWrap: 'wrap',
              width: { xs: '100%', sm: 'auto' }
            }}>
              <Button 
                startIcon={<MarkEmailRead />} 
                size="small" 
                variant="outlined"
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
                sx={{ 
                  flex: { xs: '1 1 auto', sm: '0 0 auto' },
                  fontSize: { xs: '0.75rem', sm: '0.8125rem' }
                }}
              >
                Marcar todo leído
              </Button>
              <Button 
                startIcon={<Delete />} 
                size="small" 
                variant="outlined" 
                color="error"
                onClick={deleteAllNotifications}
                sx={{ 
                  flex: { xs: '1 1 auto', sm: '0 0 auto' },
                  fontSize: { xs: '0.75rem', sm: '0.8125rem' }
                }}
              >
                Borrar todo
              </Button>
            </Box>
          )}
        </Box>

        {/* Pestañas para filtrar */}
        <Paper sx={{ mb: 3, borderRadius: 1, boxShadow: 'none', border: '1px solid #ddd' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            sx={{
              minHeight: { xs: '42px', sm: '48px' },
              '& .MuiTab-root': {
                minHeight: { xs: '42px', sm: '48px' },
                py: { xs: 0.5, sm: 1 },
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }
            }}
          >
            <Tab 
              label={
                <Badge 
                  badgeContent={unreadCount} 
                  color="error"
                  invisible={unreadCount === 0}
                >
                  No leídas
                </Badge>
              } 
            />
            <Tab label="Leídas" />
            <Tab label="Todas" />
          </Tabs>
        </Paper>

        {/* Lista de notificaciones */}
        <Paper 
          sx={{ 
            borderRadius: 1,
            overflow: 'hidden',
            boxShadow: 'none',
            border: '1px solid #ddd'
          }}
        >
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          ) : filteredNotifications.length === 0 ? (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <ErrorOutline sx={{ fontSize: 48, color: '#ccc', mb: 2 }} />
              <Typography variant="h6" color="text.secondary">
                No hay notificaciones
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tabValue === 0 
                  ? 'No tienes notificaciones sin leer' 
                  : tabValue === 1 
                    ? 'No tienes notificaciones leídas'
                    : 'Aún no tienes notificaciones'}
              </Typography>
            </Box>
          ) : (
            <List sx={{ p: 0 }}>
              {filteredNotifications.map((notification, index) => (
                <Box key={notification.id}>
                  <ListItem
                    sx={{ 
                      py: 2,
                      px: { xs: 2, sm: 3 },
                      bgcolor: notification.read ? 'transparent' : 'rgba(33, 33, 33, 0.04)', 
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        bgcolor: 'rgba(33, 33, 33, 0.08)'
                      }
                    }}
                    secondaryAction={
                      <IconButton 
                        edge="end" 
                        onClick={(e) => handleMenuOpen(e, notification.id)}
                        size="small"
                      >
                        <MoreVert />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'white', border: '1px solid #ddd' }}>
                        {getNotificationIcon(notification.type)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1,
                          pr: { xs: 3, sm: 4 } // Espacio para el icono de menú
                        }}>
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: notification.read ? 'normal' : 'bold',
                              fontSize: { xs: '0.875rem', sm: '1rem' }
                            }}
                          >
                            {notification.title}
                          </Typography>
                          {!notification.read && (
                            <Chip 
                              label="Nueva" 
                              size="small" 
                              color="primary" 
                              variant="outlined" 
                              sx={{ height: 20, display: { xs: 'none', sm: 'flex' } }}
                            />
                          )}
                        </Box>
                      }
                      secondary={
                        <>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              mb: 0.5,
                              fontSize: { xs: '0.75rem', sm: '0.875rem' }
                            }}
                          >
                            {notification.message}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
                          >
                            {formatDate(notification.sentDate)}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < filteredNotifications.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          )}
        </Paper>
      </Container>
      
      <ClientBottomBar />
      
      {/* Menú contextual para cada notificación */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 3,
          sx: {
            minWidth: '180px',
            borderRadius: '8px',
            mt: 0.5
          }
        }}
      >
        {selectedNotification && (
          <>
            <MenuItem 
              onClick={() => {
                if (selectedNotification) {
                  const notification = notifications.find(n => n.id === selectedNotification);
                  if (notification && !notification.read) {
                    markAsRead(selectedNotification);
                  }
                }
                handleMenuClose();
              }}
              disabled={notifications.find(n => n.id === selectedNotification)?.read}
              sx={{ py: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <Done fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Marcar como leída" 
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </MenuItem>
            <MenuItem 
              onClick={() => {
                if (selectedNotification) {
                  deleteNotification(selectedNotification);
                }
                handleMenuClose();
              }}
              sx={{ py: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <Delete fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText 
                primary="Eliminar" 
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </MenuItem>
          </>
        )}
      </Menu>
      
      {/* Snackbar para feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          bottom: { xs: '70px', sm: '80px' }, // Ajustar para no tapar el bottom bar
          '& .MuiAlert-root': {
            width: { xs: '90%', sm: 'auto' },
            maxWidth: '100%',
            mx: 'auto'
          }
        }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ 
            py: { xs: 0.5, sm: 1 },
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
