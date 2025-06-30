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
  ArrowBack,
  FilterList
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
          mt: '100px', // Espacio para el top bar fijo
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
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <EmojiEvents /> Mis Insignias
          </Typography>
          <IconButton sx={{ border: '2px solid #ddd' }}>
            <FilterList />
          </IconButton>
        </Box>

        {/* Resumen de Insignias */}
        <Paper sx={{ p: 3, mb: 3, border: '2px solid #ddd', boxShadow: 'none', textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h4" color="#ff9800" sx={{ fontWeight: 'bold' }}>
                3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Obtenidas
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4" color="#2196f3" sx={{ fontWeight: 'bold' }}>
                3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                En Progreso
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4" color="#9e9e9e" sx={{ fontWeight: 'bold' }}>
                12
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Disponibles
              </Typography>
            </Grid>
          </Grid>
        </Paper>

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
                <Badge badgeContent={6} color="primary">
                  Todas
                </Badge>
              } 
            />
            <Tab 
              label={
                <Badge badgeContent={3} color="success">
                  Obtenidas
                </Badge>
              } 
            />
            <Tab 
              label={
                <Badge badgeContent={3} color="warning">
                  En Progreso
                </Badge>
              } 
            />
          </Tabs>
        </Paper>

        {/* Contenido de las tabs */}
        <TabPanel value={tabValue} index={0}>
          {/* Todas las insignias */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="first-purchase"
                name="Primera Compra"
                description="Realizaste tu primera compra en CasaMia"
                type="bronze"
                category="purchase"
                isEarned={true}
                earnedDate="15/12/2024"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="coffee-lover"
                name="Amante del Café"
                description="Compra 5 cafés para obtener esta insignia"
                type="silver"
                category="purchase"
                isEarned={false}
                progress={3}
                maxProgress={5}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="loyal-customer"
                name="Cliente Leal"
                description="Visita CasaMia 10 veces en un mes"
                type="gold"
                category="location"
                isEarned={false}
                progress={7}
                maxProgress={10}
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
                earnedDate="20/12/2024"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="social-star"
                name="Estrella Social"
                description="Comparte 3 experiencias en redes sociales"
                type="silver"
                category="social"
                isEarned={false}
                progress={1}
                maxProgress={3}
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
                earnedDate="18/12/2024"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {/* Solo insignias obtenidas */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="first-purchase"
                name="Primera Compra"
                description="Realizaste tu primera compra en CasaMia"
                type="bronze"
                category="purchase"
                isEarned={true}
                earnedDate="15/12/2024"
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
                earnedDate="18/12/2024"
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          {/* Solo insignias en progreso */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="coffee-lover"
                name="Amante del Café"
                description="Compra 5 cafés para obtener esta insignia"
                type="silver"
                category="purchase"
                isEarned={false}
                progress={3}
                maxProgress={5}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="loyal-customer"
                name="Cliente Leal"
                description="Visita CasaMia 10 veces en un mes"
                type="gold"
                category="location"
                isEarned={false}
                progress={7}
                maxProgress={10}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <BadgeCard
                id="social-star"
                name="Estrella Social"
                description="Comparte 3 experiencias en redes sociales"
                type="silver"
                category="social"
                isEarned={false}
                progress={1}
                maxProgress={3}
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
