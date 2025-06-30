'use client';

import { Box, Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import Header from '@/components/layout/Header';
import { useUser } from '@/context/UserContext';

export default function ClientPage() {
  const { user, loading } = useUser();
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                Panel de Cliente CasaMia
              </Typography>
              <Typography variant="body1" paragraph>
                Bienvenido a tu área personal de CasaMia. Aquí podrás gestionar tu perfil, ver tus misiones y recompensas.
              </Typography>
              
              {user && (
                <Box sx={{ mt: 2, mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Información de tu cuenta
                  </Typography>
                  <Typography variant="body1">
                    <strong>Nombre:</strong> {user.name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Email:</strong> {user.email}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Rol:</strong> {user.role}
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Mis Misiones
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Completa misiones para ganar recompensas y puntos de fidelización.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Mi Billetera
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Revisa tu saldo acumulado y historial de transacciones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Mis Recompensas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Canjea tus puntos por productos gratuitos y descuentos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Mi Perfil
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Actualiza tu información personal y preferencias.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          CasaMia &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
