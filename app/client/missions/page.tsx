'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Tabs,
  Tab,
  IconButton
} from '@mui/material';
import { 
  ArrowBack,
  Rocket
} from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ClientHeader, ClientBottomBar, MissionCard } from '@/components/client';

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
      id={`mission-tabpanel-${index}`}
      aria-labelledby={`mission-tab-${index}`}
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

export default function MissionsPage() {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCompleteMission = (missionTitle: string) => {
    alert(`¡Misión "${missionTitle}" completada!`);
    // Aquí iría la lógica para completar la misión
  };

  // Datos de ejemplo para las misiones
  const availableMissions = [
    {
      title: "Visita Matutina",
      description: "Llega a CasaMia antes de las 9:00 AM",
      reward: "$2.000",
      imageEmoji: "🌅"
    }
  ];

  const completedMissions = [
    {
      title: "Primera Visita",
      description: "Visitaste CasaMia por primera vez",
      reward: "$2.500",
      imageEmoji: "🏪"
    }
  ];

  // Función para obtener el color del tab
  const getTabColor = (index: number) => {
    switch(index) {
      case 0: return '#2196f3'; // Azul para "Disponibles"
      case 1: return '#4caf50'; // Verde para "Completadas"
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
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rocket /> Misiones
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
                    {availableMissions.length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: getTabColor(0) }}>
                    Disponibles
                  </Typography>
                </Box>
              }
            />
            <Tab 
              label={
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: getTabColor(1), fontWeight: 'bold' }}>
                    {completedMissions.length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: getTabColor(1) }}>
                    Completadas
                  </Typography>
                </Box>
              }
            />
          </Tabs>
        </Paper>

        <TabPanel value={tabValue} index={0}>
          {/* Misiones Disponibles */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {availableMissions.map((mission, index) => (
              <MissionCard
                key={index}
                title={mission.title}
                description={mission.description}
                reward={mission.reward}
                imageEmoji={mission.imageEmoji}
                isCompleted={false}
                onComplete={() => handleCompleteMission(mission.title)}
              />
            ))}
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {/* Misiones Completadas */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {completedMissions.map((mission, index) => (
              <MissionCard
                key={index}
                title={mission.title}
                description={mission.description}
                reward={mission.reward}
                imageEmoji={mission.imageEmoji}
                isCompleted={true}
              />
            ))}
          </Box>
        </TabPanel>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
