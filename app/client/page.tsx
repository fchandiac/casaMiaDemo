'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  LinearProgress,
  Chip,
  Avatar,
  Stack
} from '@mui/material';
import { 
  AccountBalanceWallet,
  EmojiEvents,
  Assignment,
  Store,
  QrCodeScanner,
  LocationOn,
  Star,
  Notifications
} from '@mui/icons-material';
import ClientHeader from '@/components/client/ClientHeader';

export default function ClientPage() {
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Container maxWidth="md" sx={{ mt: 2, mb: 4, flex: 1 }}>
        {/* Header de Usuario */}
        <Paper sx={{ p: 3, mb: 3, border: '2px solid #ddd', boxShadow: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 60, height: 60, bgcolor: '#1976d2', boxShadow: 'none' }}>U</Avatar>
            <Box>
              <Typography variant="h5">Bienvenido, Usuario</Typography>
              <Typography variant="body2" color="text.secondary">Cliente CasaMia</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Billetera y Resumen */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <Card sx={{ border: '2px solid #ddd', textAlign: 'center', boxShadow: 'none' }}>
              <CardContent>
                <AccountBalanceWallet sx={{ fontSize: 40, color: '#4caf50', mb: 1 }} />
                <Typography variant="h6">Billetera</Typography>
                <Typography variant="h4" color="#4caf50">$15.500</Typography>
                <Typography variant="caption">Saldo disponible</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ border: '2px solid #ddd', textAlign: 'center', boxShadow: 'none' }}>
              <CardContent>
                <EmojiEvents sx={{ fontSize: 40, color: '#ff9800', mb: 1 }} />
                <Typography variant="h6">Insignias</Typography>
                <Typography variant="h4" color="#ff9800">3</Typography>
                <Typography variant="caption">Insignias ganadas</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Misiones Activas */}
        <Paper sx={{ p: 3, mb: 3, border: '2px solid #ddd', boxShadow: 'none' }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Assignment /> Misiones Activas
          </Typography>
          
          <Stack spacing={2}>
            {/* Misión 1 - Estoy en CasaMia */}
            <Card sx={{ border: '1px solid #eee', boxShadow: 'none' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: '#2196f3' }} />
                    <Box>
                      <Typography variant="subtitle1">Estoy en CasaMia</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Visita la tienda y valida tu presencia
                      </Typography>
                    </Box>
                  </Box>
                  <Chip label="$2.000" color="success" variant="outlined" />
                </Box>
                <LinearProgress variant="determinate" value={0} sx={{ mt: 2 }} />
                <Typography variant="caption" color="text.secondary">0% completado</Typography>
              </CardContent>
            </Card>

            {/* Misión 2 - Escanear QR */}
            <Card sx={{ border: '1px solid #eee', boxShadow: 'none' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <QrCodeScanner sx={{ color: '#9c27b0' }} />
                    <Box>
                      <Typography variant="subtitle1">Encontrar QR Secreto</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Busca y escanea el código QR oculto
                      </Typography>
                    </Box>
                  </Box>
                  <Chip label="Insignia" color="secondary" variant="outlined" />
                </Box>
                <LinearProgress variant="determinate" value={0} sx={{ mt: 2 }} />
                <Typography variant="caption" color="text.secondary">0% completado</Typography>
              </CardContent>
            </Card>

            {/* Misión 3 - Comprar Producto */}
            <Card sx={{ border: '1px solid #eee', boxShadow: 'none' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Store sx={{ color: '#ff5722' }} />
                    <Box>
                      <Typography variant="subtitle1">Compra un Café Especial</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Compra y escanea la boleta
                      </Typography>
                    </Box>
                  </Box>
                  <Chip label="$5.000" color="success" variant="outlined" />
                </Box>
                <LinearProgress variant="determinate" value={0} sx={{ mt: 2 }} />
                <Typography variant="caption" color="text.secondary">0% completado</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Paper>

        {/* Recompensas Disponibles */}
        <Paper sx={{ p: 3, mb: 3, border: '2px solid #ddd', boxShadow: 'none' }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmojiEvents /> Recompensas Disponibles
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ border: '1px solid #eee', textAlign: 'center', boxShadow: 'none' }}>
                <CardContent>
                  <Typography variant="subtitle1">Café Gratis</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Válido hasta 15/01/2025
                  </Typography>
                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                    Canjear
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ border: '1px solid #eee', textAlign: 'center', boxShadow: 'none' }}>
                <CardContent>
                  <Typography variant="subtitle1">20% Descuento</Typography>
                  <Typography variant="body2" color="text.secondary">
                    En pastelería
                  </Typography>
                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                    Canjear
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Acciones Rápidas */}
        <Paper sx={{ p: 3, border: '2px solid #ddd', boxShadow: 'none' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Acciones Rápidas</Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Button 
                variant="outlined" 
                fullWidth 
                sx={{ p: 2, flexDirection: 'column', gap: 1, border: '2px solid #ddd', boxShadow: 'none' }}
              >
                <QrCodeScanner />
                <Typography variant="caption">Escanear QR</Typography>
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button 
                variant="outlined" 
                fullWidth 
                sx={{ p: 2, flexDirection: 'column', gap: 1, border: '2px solid #ddd', boxShadow: 'none' }}
              >
                <LocationOn />
                <Typography variant="caption">Estoy aquí</Typography>
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button 
                variant="outlined" 
                fullWidth 
                sx={{ p: 2, flexDirection: 'column', gap: 1, border: '2px solid #ddd', boxShadow: 'none' }}
              >
                <Star />
                <Typography variant="caption">Calificar</Typography>
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button 
                variant="outlined" 
                fullWidth 
                sx={{ p: 2, flexDirection: 'column', gap: 1, border: '2px solid #ddd', boxShadow: 'none' }}
              >
                <Notifications />
                <Typography variant="caption">Notificaciones</Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
