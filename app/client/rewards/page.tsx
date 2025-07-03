'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  IconButton,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider
} from '@mui/material';
import { 
  EmojiEvents,
  ArrowBack,
  MonetizationOn,
  LocalOffer,
  CalendarToday,
  ShoppingBag,
  QrCodeScanner,
  ReceiptLong,
  Rocket,
  CardGiftcard,
  Star
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { ClientHeader, ClientBottomBar } from '@/components/client';

// Definir el tipo para recompensas
interface Reward {
  id: string;
  type: 'cash' | 'discount' | 'badge' | 'points' | 'product';
  title: string;
  description: string;
  value: string;
  date: string;
  source: 'qr' | 'receipt' | 'mission' | 'purchase';
}

export default function RewardsPage() {
  const router = useRouter();
  
  // Simulamos recompensas cobradas por el usuario
  const rewards: Reward[] = [
    {
      id: 'rew-001',
      type: 'cash',
      title: 'Depósito en billetera',
      description: 'Has ganado $1.000 por escanear un código QR',
      value: '$1.000',
      date: '2025-07-03',
      source: 'qr'
    },
    {
      id: 'rew-002',
      type: 'discount',
      title: 'Descuento en café',
      description: '15% de descuento en cualquier café',
      value: '15%',
      date: '2025-07-02',
      source: 'mission'
    },
    {
      id: 'rew-003',
      type: 'badge',
      title: 'Insignia de Café Experto',
      description: 'Has obtenido esta insignia por probar 5 cafés diferentes',
      value: 'Café Experto',
      date: '2025-06-30',
      source: 'mission'
    },
    {
      id: 'rew-004',
      type: 'points',
      title: 'Puntos para tu colección',
      description: '20 puntos para la colección de Cafés del Mundo',
      value: '20 pts',
      date: '2025-06-28',
      source: 'qr'
    },
    {
      id: 'rew-005',
      type: 'cash',
      title: 'Depósito en billetera',
      description: 'Has ganado $2.000 por escanear una boleta',
      value: '$2.000',
      date: '2025-06-25',
      source: 'receipt'
    },
    {
      id: 'rew-006',
      type: 'product',
      title: 'Croissant gratis',
      description: 'Has ganado un croissant gratis con tu próxima compra',
      value: '1 Unidad',
      date: '2025-06-22',
      source: 'mission'
    },
    {
      id: 'rew-008',
      type: 'cash',
      title: 'Depósito en billetera',
      description: 'Has ganado $500 por completar una misión diaria',
      value: '$500',
      date: '2025-06-10',
      source: 'mission'
    }
  ];

  // Función para obtener el icono según el tipo de recompensa
  const getRewardIcon = (type: string) => {
    switch(type) {
      case 'cash':
        return <MonetizationOn sx={{ color: '#4caf50' }} />;
      case 'discount':
        return <LocalOffer sx={{ color: '#ff9800' }} />;
      case 'badge':
        return <Star sx={{ color: '#ffc107' }} />;
      case 'points':
        return <EmojiEvents sx={{ color: '#2196f3' }} />;
      case 'product':
        return <CardGiftcard sx={{ color: '#9c27b0' }} />;
      default:
        return <CardGiftcard />;
    }
  };

  // Función para obtener el icono de la fuente
  const getSourceIcon = (source: string) => {
    switch(source) {
      case 'qr':
        return <QrCodeScanner fontSize="small" sx={{ mr: 0.5, fontSize: 16 }} />;
      case 'receipt':
        return <ReceiptLong fontSize="small" sx={{ mr: 0.5, fontSize: 16 }} />;
      case 'mission':
        return <Rocket fontSize="small" sx={{ mr: 0.5, fontSize: 16 }} />;
      case 'purchase':
        return <ShoppingBag fontSize="small" sx={{ mr: 0.5, fontSize: 16 }} />;
      default:
        return null;
    }
  };

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
            <EmojiEvents /> Recompensas Cobradas
          </Typography>
        </Box>

        {/* Total de recompensas cobradas */}
        <Paper sx={{ p: 3, mb: 3, border: '2px solid #ddd', boxShadow: 'none', borderRadius: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
              {rewards.length}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Total de Recompensas Cobradas
            </Typography>
          </Box>
        </Paper>

        {/* Lista de recompensas */}
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={2}>
            {rewards.map((reward) => (
              <Grid item xs={12} key={reward.id}>
                <Card 
                  sx={{ 
                    boxShadow: 'none', 
                    border: '2px solid #ddd', 
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: 'background.default', 
                            border: '1px solid #ddd',
                            width: 60,
                            height: 60
                          }}
                        >
                          {getRewardIcon(reward.type)}
                        </Avatar>
                      </Grid>
                      
                      <Grid item xs={12} sm={10}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                            {reward.title}
                          </Typography>
                          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                            {reward.value}
                          </Typography>
                        </Box>
                        
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                          {reward.description}
                        </Typography>
                        
                        <Divider sx={{ mb: 1 }} />
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarToday fontSize="small" sx={{ mr: 0.5, fontSize: 16 }} />
                            Fecha: {new Date(reward.date).toLocaleDateString()}
                          </Typography>
                          
                          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}>
                            {getSourceIcon(reward.source)}
                            Origen: {
                              reward.source === 'qr' ? 'Código QR' : 
                              reward.source === 'receipt' ? 'Boleta' : 
                              reward.source === 'mission' ? 'Misión' : 'Compra'
                            }
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
