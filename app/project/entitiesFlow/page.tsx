'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import Header from '@/components/layout/Header';
import EntitiesFlowDiagram from '@/components/EntitiesFlow/EntitiesFlowDiagram';

export default function EntitiesFlowPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            Entidades y Relaciones - CasaMiaApp
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
            Diagrama interactivo de las entidades del sistema y sus relaciones
          </Typography>
        </Paper>
        
        <Paper sx={{ p: 2, height: '700px' }}>
          <EntitiesFlowDiagram />
        </Paper>
      </Container>
      
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          CasaMia &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
