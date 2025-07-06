'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Tabs,
  Tab,
  IconButton,
  Chip
} from '@mui/material';
import { 
  ArrowBack
} from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SimpleCollectionCardIcon } from '@/components/icons';
import { ClientHeader, ClientBottomBar, CollectionCard } from '@/components/client';

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
      id={`collection-tabpanel-${index}`}
      aria-labelledby={`collection-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function CollectionsPage() {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Datos de ejemplo para las colecciones
  const collectingData = [
    { name: "Mockaccino Mediano", completedCount: 3, totalCount: 5 },
    { name: "Latte Art Especial", completedCount: 2, totalCount: 4 },
    { name: "Croissant de Almendra", completedCount: 1, totalCount: 3 },
    { name: "Té Chai Premium", completedCount: 4, totalCount: 6 },
    { name: "Sandwich Club", completedCount: 2, totalCount: 5 }
  ];

  const completedData = [
    { name: "Café Americano", completedCount: 3, totalCount: 3 },
    { name: "Muffin de Arándanos", completedCount: 4, totalCount: 4 },
    { name: "Capuccino Clásico", completedCount: 2, totalCount: 2 }
  ];

  const availableData = [
    { name: "Frappé de Chocolate", completedCount: 0, totalCount: 5 },
    { name: "Torta Red Velvet", completedCount: 0, totalCount: 6 },
    { name: "Smoothie Verde", completedCount: 0, totalCount: 4 },
    { name: "Bagel Integral", completedCount: 0, totalCount: 3 },
    { name: "Café Cold Brew", completedCount: 0, totalCount: 4 },
    { name: "Cheesecake de Fresa", completedCount: 0, totalCount: 5 }
  ];

  // Función para obtener el color del tab según el progreso
  const getTabColor = (index: number) => {
    switch(index) {
      case 0: return '#ff9800'; // Naranja para "Coleccionando"
      case 1: return '#4caf50'; // Verde para "Completadas" 
      case 2: return '#2196f3'; // Azul para "Disponibles"
      default: return '#666';
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: '90px',
          mb: '90px',
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
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SimpleCollectionCardIcon size={28} /> Tarjetas de Colección
          </Typography>
        </Box>

        {/* Tabs de navegación */}
        <Paper sx={{ border: '2px solid #ddd', boxShadow: 'none', mb: 3 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }
            }}
          >
            <Tab 
              label={
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: getTabColor(0), fontWeight: 'bold' }}>
                    {collectingData.length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: getTabColor(0) }}>
                    Coleccionando
                  </Typography>
                </Box>
              }
            />
            <Tab 
              label={
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: getTabColor(1), fontWeight: 'bold' }}>
                    {completedData.length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: getTabColor(1) }}>
                    Completadas
                  </Typography>
                </Box>
              }
            />
            <Tab 
              label={
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: getTabColor(2), fontWeight: 'bold' }}>
                    {availableData.length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: getTabColor(2) }}>
                    Disponibles
                  </Typography>
                </Box>
              }
            />
          </Tabs>
        </Paper>

        <TabPanel value={tabValue} index={0}>
          {/* Colecciones en progreso */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {collectingData.map((collection, index) => (
              <CollectionCard
                key={index}
                productName={collection.name}
                completedCount={collection.completedCount}
                totalCount={collection.totalCount}
              />
            ))}
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {/* Colecciones completadas */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {completedData.map((collection, index) => (
              <Box key={index} sx={{ position: 'relative' }}>
                <CollectionCard
                  productName={collection.name}
                  completedCount={collection.completedCount}
                  totalCount={collection.totalCount}
                />
                <Chip 
                  label="¡Completada!" 
                  color="success" 
                  size="small"
                  sx={{ 
                    position: 'absolute', 
                    top: 8, 
                    right: 8,
                    fontWeight: 'bold'
                  }}
                />
              </Box>
            ))}
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          {/* Colecciones disponibles */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {availableData.map((collection, index) => (
              <Box key={index} sx={{ position: 'relative', opacity: 0.7 }}>
                <CollectionCard
                  productName={collection.name}
                  completedCount={collection.completedCount}
                  totalCount={collection.totalCount}
                />
                <Chip 
                  label="Disponible" 
                  color="primary" 
                  variant="outlined"
                  size="small"
                  sx={{ 
                    position: 'absolute', 
                    top: 8, 
                    right: 8
                  }}
                />
              </Box>
            ))}
          </Box>
        </TabPanel>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
