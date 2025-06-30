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
  Stack,
  Divider,
  IconButton
} from '@mui/material';
import { 
  AccountBalanceWallet,
  Add,
  Remove,
  History,
  TrendingUp,
  ArrowBack
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { ClientHeader, ClientBottomBar } from '@/components/client';

export default function WalletPage() {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: '90px', // Espacio para el top bar fijo
          mb: '90px',  // Espacio para el bottom bar fijo
          flex: 1 
        }}
      >
        {/* Header con botón de regreso */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton 
            onClick={() => router.back()}
            sx={{ mr: 2, border: '2px solid #ddd' }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccountBalanceWallet /> Mi Billetera
          </Typography>
        </Box>

        {/* Resumen de Saldo */}
        <Paper sx={{ p: 3, mb: 3, border: '2px solid #ddd', boxShadow: 'none', textAlign: 'center' }}>
          <Typography variant="h3" color="#4caf50" sx={{ mb: 1, fontWeight: 'bold' }}>
            $15.500
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
            Saldo Disponible
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button 
                variant="contained" 
                fullWidth 
                startIcon={<Add />}
                sx={{ py: 1.5 }}
              >
                Recargar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button 
                variant="outlined" 
                fullWidth 
                startIcon={<Remove />}
                sx={{ py: 1.5 }}
              >
                Usar Saldo
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Estadísticas */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <Card sx={{ border: '2px solid #ddd', textAlign: 'center', boxShadow: 'none' }}>
              <CardContent>
                <TrendingUp sx={{ fontSize: 40, color: '#2196f3', mb: 1 }} />
                <Typography variant="h5" color="#2196f3">$2.350</Typography>
                <Typography variant="body2" color="text.secondary">
                  Ganado Este Mes
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ border: '2px solid #ddd', textAlign: 'center', boxShadow: 'none' }}>
              <CardContent>
                <History sx={{ fontSize: 40, color: '#ff9800', mb: 1 }} />
                <Typography variant="h5" color="#ff9800">$8.750</Typography>
                <Typography variant="body2" color="text.secondary">
                  Gastado Este Mes
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Últimos Movimientos */}
        <Paper sx={{ p: 3, border: '2px solid #ddd', boxShadow: 'none' }}>
          <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            <History /> Últimos Movimientos
          </Typography>
          
          <Stack spacing={2}>
            <Card sx={{ border: '1px solid #eee', boxShadow: 'none' }}>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Misión: Primera Compra
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      15/12/2024 - 14:30
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Recompensa por completar misión
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="#4caf50" sx={{ fontWeight: 'bold' }}>
                    +$2.000
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            
            <Card sx={{ border: '1px solid #eee', boxShadow: 'none' }}>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Compra en CasaMia
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      14/12/2024 - 09:15
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Café Latte + Croissant
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="#f44336" sx={{ fontWeight: 'bold' }}>
                    -$3.500
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            
            <Card sx={{ border: '1px solid #eee', boxShadow: 'none' }}>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Recarga de Saldo
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      10/12/2024 - 16:45
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Transferencia bancaria
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="#4caf50" sx={{ fontWeight: 'bold' }}>
                    +$10.000
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ border: '1px solid #eee', boxShadow: 'none' }}>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Misión: Madrugador
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      08/12/2024 - 07:30
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Recompensa por visita temprana
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="#4caf50" sx={{ fontWeight: 'bold' }}>
                    +$1.500
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ border: '1px solid #eee', boxShadow: 'none' }}>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Compra en CasaMia
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      05/12/2024 - 12:20
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Almuerzo ejecutivo
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="#f44336" sx={{ fontWeight: 'bold' }}>
                    -$5.200
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Stack>

          <Divider sx={{ my: 3 }} />
          
          <Button 
            variant="outlined" 
            fullWidth 
            startIcon={<History />}
            sx={{ py: 1.5 }}
          >
            Ver Historial Completo
          </Button>
        </Paper>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
