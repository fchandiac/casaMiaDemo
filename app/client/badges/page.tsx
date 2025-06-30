'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  IconButton,
  Tabs,
  Tab,
  Badge
} from '@mui/material';
import { 
  EmojiEvents,
  ArrowBack
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ClientHeader, ClientBottomBar, BadgeCard } from '@/components/client';

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
      id={`badges-tabpanel-${index}`}
      aria-labelledby={`badges-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function BadgesPage() {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
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
            <EmojiEvents /> Mis Insignias
          </Typography>
        </Box>

        {/* Tabs de Filtros */}
        <Paper sx={{ border: '2px solid #ddd', boxShadow: 'none', mb: 3 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 'bold'
              }
            }}
          >
            <Tab 
              label={
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                    2
                  </Typography>
                  <Typography variant="body2" sx={{ textTransform: 'none' }}>
                    Para Lucir
                  </Typography>
                </Box>
              } 
            />
            <Tab 
              label={
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f44336' }}>
                    1
                  </Typography>
                  <Typography variant="body2" sx={{ textTransform: 'none' }}>
                    Vencidas
                  </Typography>
                </Box>
              } 
            />
            <Tab 
              label={
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    3
                  </Typography>
                  <Typography variant="body2" sx={{ textTransform: 'none' }}>
                    Obtenidas
                  </Typography>
                </Box>
              } 
            />
          </Tabs>
        </Paper>

        {/* Contenido de las tabs */}
        <TabPanel value={tabValue} index={0}>
          {/* Insignias Para Lucir - que puede usar ahora */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="early-bird"
                name="Madrugador"
                description="Visita la tienda antes de las 8:00 AM"
                type="special"
                category="time"
                isEarned={true}
                isExpired={false}
                earnedDate="20/12/2024"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="perfect-rating"
                name="Calificación Perfecta"
                description="Da 5 estrellas a 5 productos diferentes"
                type="gold"
                category="achievement"
                isEarned={true}
                isExpired={false}
                earnedDate="18/12/2024"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {/* Insignias Vencidas - obtuvo pero no puede usar */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="first-purchase"
                name="Primera Compra"
                description="Realizaste tu primera compra en CasaMia"
                type="bronze"
                category="purchase"
                isEarned={true}
                isExpired={true}
                earnedDate="15/12/2024"
                expiryDate="15/01/2025"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          {/* Todas las Obtenidas - historial completo */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="first-purchase"
                name="Primera Compra"
                description="Realizaste tu primera compra en CasaMia"
                type="bronze"
                category="purchase"
                isEarned={true}
                isExpired={true}
                earnedDate="15/12/2024"
                expiryDate="15/01/2025"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="early-bird"
                name="Madrugador"
                description="Visita la tienda antes de las 8:00 AM"
                type="special"
                category="time"
                isEarned={true}
                isExpired={false}
                earnedDate="20/12/2024"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="perfect-rating"
                name="Calificación Perfecta"
                description="Da 5 estrellas a 5 productos diferentes"
                type="gold"
                category="achievement"
                isEarned={true}
                isExpired={false}
                earnedDate="18/12/2024"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
