// Estado actual de la app: Redirección y login funcionando correctamente. Solo usuarios de prueba pueden acceder. Admin va a /admin, cliente a /client, operador a /operator. Middleware y Home validados. Último commit sincronizado con GitHub (15/07/2025).

'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Tabs,
  Tab,
  Divider,
  Avatar,
  LinearProgress,
  Alert
} from '@mui/material';
import {
  Dashboard,
  People,
  Rocket,
  EmojiEvents,
  Settings,
  Analytics,
  Edit,
  Delete,
  Add,
  Visibility,
  Star,
  AccountBalanceWallet,
  Store,
  NotificationsActive
} from '@mui/icons-material';
import Header from '@/components/layout/Header';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Datos de ejemplo para el dashboard
  const dashboardStats = [
    {
      title: 'Usuarios Activos',
      value: '1,234',
      icon: <People />,
      color: '#1976d2'
    },
    {
      title: 'Misiones Completadas',
      value: '567',
      icon: <Rocket />,
      color: '#2e7d32'
    },
    {
      title: 'Recompensas Canjeadas',
      value: '89',
      icon: <EmojiEvents />,
      color: '#ed6c02'
    },
    {
      title: 'Puntos Totales',
      value: '12,345',
      icon: <Star />,
      color: '#9c27b0'
    }
  ];

  const recentUsers = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', status: 'Activo', joinDate: '2024-07-10' },
    { id: 2, name: 'María García', email: 'maria@example.com', status: 'Activo', joinDate: '2024-07-09' },
    { id: 3, name: 'Carlos López', email: 'carlos@example.com', status: 'Inactivo', joinDate: '2024-07-08' },
  ];

  const missions = [
    { id: 1, name: 'Encuesta de Satisfacción', type: 'Encuesta', status: 'Activa', completions: 45 },
    { id: 2, name: 'Visita la Tienda', type: 'Ubicación', status: 'Activa', completions: 23 },
    { id: 3, name: 'Compra Mínima', type: 'Compra', status: 'Pausada', completions: 67 },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Header />
      
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4, flex: 1 }}>
        {/* Header de Administración */}
        <Paper sx={{ p: 3, mb: 3, border: '1px solid #ddd' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Dashboard sx={{ fontSize: 40, color: '#1976d2' }} />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Panel de Administración CasaMia
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Gestiona usuarios, misiones, recompensas y configuraciones del sistema
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Tabs de Navegación */}
        <Paper sx={{ mb: 3, border: '1px solid #ddd' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            variant="scrollable" 
            scrollButtons="auto"
            sx={{ borderBottom: '1px solid #ddd' }}
          >
            <Tab label="Dashboard" icon={<Dashboard />} />
            <Tab label="Usuarios" icon={<People />} />
            <Tab label="Productos" icon={<Store />} />
            <Tab label="Misiones" icon={<Rocket />} />
            <Tab label="Recompensas" icon={<EmojiEvents />} />
          </Tabs>

          {/* Panel de Dashboard */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              {/* Estadísticas Principales */}
              {dashboardStats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ border: '1px solid #ddd', borderRadius: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: stat.color }}>
                          {stat.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.title}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              {/* Gráfico de Actividad */}
              <Grid item xs={12} md={8}>
                <Card sx={{ border: '1px solid #ddd', borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Actividad de Usuarios (Últimos 7 días)
                    </Typography>
                    <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography color="text.secondary">
                        Gráfico de actividad aquí
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Notificaciones Recientes */}
              <Grid item xs={12} md={4}>
                <Card sx={{ border: '1px solid #ddd', borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <NotificationsActive /> Notificaciones
                    </Typography>
                    <Box sx={{ maxHeight: 200, overflowY: 'auto' }}>
                      <Alert severity="info" sx={{ mb: 1 }}>
                        Nueva misión completada por Juan Pérez
                      </Alert>
                      <Alert severity="success" sx={{ mb: 1 }}>
                        10 usuarios nuevos registrados hoy
                      </Alert>
                      <Alert severity="warning">
                        Servidor de pagos requiere mantenimiento
                      </Alert>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Panel de Usuarios */}
          <TabPanel value={tabValue} index={1}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Gestión de Usuarios
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<People />}
                href="/admin/users"
              >
                Administrar Usuarios
              </Button>
            </Box>
            
            <TableContainer component={Paper} sx={{ border: '1px solid #ddd' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Fecha de Registro</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Chip 
                          label={user.status} 
                          color={user.status === 'Activo' ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{user.joinDate}</TableCell>
                      <TableCell>
                        <IconButton size="small" color="primary">
                          <Visibility />
                        </IconButton>
                        <IconButton size="small" color="secondary">
                          <Edit />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Panel de Productos */}
          <TabPanel value={tabValue} index={2}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Gestión de Productos
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<Store />}
                href="/admin/products"
              >
                Administrar Productos
              </Button>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Administra los productos y servicios disponibles en la tienda.
            </Typography>
          </TabPanel>

          {/* Panel de Misiones */}
          <TabPanel value={tabValue} index={3}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Gestión de Misiones
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<Rocket />}
                href="/admin/missions"
              >
                Administrar Misiones
              </Button>
            </Box>
            
            <Grid container spacing={3}>
              {missions.map((mission) => (
                <Grid item xs={12} md={6} key={mission.id}>
                  <Card sx={{ border: '1px solid #ddd', borderRadius: 2 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {mission.name}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Chip label={mission.type} size="small" />
                        <Chip 
                          label={mission.status} 
                          color={mission.status === 'Activa' ? 'success' : 'default'}
                          size="small"
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Completada por {mission.completions} usuarios
                      </Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={(mission.completions / 100) * 100} 
                        sx={{ mb: 2 }}
                      />
                    </CardContent>
                    <CardActions>
                      <Button size="small" startIcon={<Edit />}>
                        Editar
                      </Button>
                      <Button size="small" startIcon={<Analytics />}>
                        Estadísticas
                      </Button>
                      <Button size="small" color="error" startIcon={<Delete />}>
                        Eliminar
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Panel de Recompensas */}
          <TabPanel value={tabValue} index={4}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Gestión de Recompensas
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<EmojiEvents />}
                href="/admin/rewards"
              >
                Administrar Recompensas
              </Button>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Aquí puedes gestionar las recompensas disponibles para los usuarios.
            </Typography>
          </TabPanel>
        </Paper>
      </Container>
      
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2, textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <Typography variant="body2" color="text.secondary">
          CasaMia Admin Panel &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
