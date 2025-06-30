'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  Avatar
} from '@mui/material';
import { 
  AccountBalanceWallet,
  EmojiEvents
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { ClientHeader, ClientBottomBar, CollectionCard } from '@/components/client';

export default function ClientPage() {
  const router = useRouter();
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: '90px', // Espacio para el top bar fijo (70px + 20px margin)
          mb: '90px',  // Espacio para el bottom bar fijo (70px + 20px margin)
          flex: 1 
        }}
      >
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
            <Card 
              sx={{ 
                border: '2px solid #ddd', 
                textAlign: 'center', 
                boxShadow: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#4caf50',
                  transform: 'translateY(-2px)'
                }
              }}
              onClick={() => router.push('/client/wallet')}
            >
              <CardContent>
                <AccountBalanceWallet sx={{ fontSize: 40, color: '#4caf50', mb: 1 }} />
                <Typography variant="h6">Billetera</Typography>
                <Typography variant="h4" color="#4caf50">$15.500</Typography>
                <Typography variant="caption">Saldo disponible</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card 
              sx={{ 
                border: '2px solid #ddd', 
                textAlign: 'center', 
                boxShadow: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#ff9800',
                  transform: 'translateY(-2px)'
                }
              }}
              onClick={() => router.push('/client/badges')}
            >
              <CardContent>
                <EmojiEvents sx={{ fontSize: 40, color: '#ff9800', mb: 1 }} />
                <Typography variant="h6">Insignias</Typography>
                <Typography variant="h4" color="#ff9800">3</Typography>
                <Typography variant="caption">Insignias ganadas</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Tarjeta de Colección */}
        <Box sx={{ mb: 3 }}>
          <CollectionCard 
            productName="Mockaccino Mediano"
            completedCount={3}
            totalCount={5}
          />
        </Box>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
