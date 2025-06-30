'use client';

import { Box, Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import Header from '@/components/layout/Header';

export default function ProjectPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                Información del Proyecto
              </Typography>
              <Typography variant="body1" paragraph>
                Esta es la sección de información del proyecto CasaMiaApp.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Descripción
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Detalles sobre el proyecto y sus objetivos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Características
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Funcionalidades principales del sistema.
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
