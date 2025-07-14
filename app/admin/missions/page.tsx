'use client';

import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel
} from '@mui/material';
import { Add, Edit, Delete, Rocket, Assignment, LocationOn, QrCode, ShoppingCart, Star } from '@mui/icons-material';
import Header from '@/components/layout/Header';

interface Mission {
  id: string;
  title: string;
  description: string;
  type: 'survey' | 'trivia' | 'location' | 'qrcode' | 'purchase' | 'product_rating';
  points: number;
  category: string;
  active: boolean;
  expiresAt: string;
}

const mockMissions: Mission[] = [
  {
    id: '1',
    title: 'Encuesta de Satisfacción',
    description: 'Completa nuestra encuesta sobre tu experiencia',
    type: 'survey',
    points: 50,
    category: 'Feedback',
    active: true,
    expiresAt: '2024-12-31'
  },
  {
    id: '2',
    title: 'Trivia de Café',
    description: 'Demuestra tus conocimientos sobre café',
    type: 'trivia',
    points: 100,
    category: 'Entretenimiento',
    active: true,
    expiresAt: '2024-12-31'
  },
  {
    id: '3',
    title: 'Visita la Tienda',
    description: 'Visita nuestra tienda física',
    type: 'location',
    points: 75,
    category: 'Ubicación',
    active: false,
    expiresAt: '2024-12-31'
  },
  {
    id: '4',
    title: 'Escanea el QR',
    description: 'Escanea el código QR en tu mesa',
    type: 'qrcode',
    points: 25,
    category: 'Interacción',
    active: true,
    expiresAt: '2024-12-31'
  }
];

const missionTypeIcons = {
  survey: <Assignment />,
  trivia: <Assignment />,
  location: <LocationOn />,
  qrcode: <QrCode />,
  purchase: <ShoppingCart />,
  product_rating: <Star />
};

const missionTypeLabels = {
  survey: 'Encuesta',
  trivia: 'Trivia',
  location: 'Ubicación',
  qrcode: 'Código QR',
  purchase: 'Compra',
  product_rating: 'Calificación'
};

export default function MissionsAdminPage() {
  const [missions, setMissions] = useState<Mission[]>(mockMissions);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingMission, setEditingMission] = useState<Mission | null>(null);

  const handleAddMission = () => {
    setEditingMission(null);
    setOpenDialog(true);
  };

  const handleEditMission = (mission: Mission) => {
    setEditingMission(mission);
    setOpenDialog(true);
  };

  const handleDeleteMission = (missionId: string) => {
    setMissions(missions.filter(m => m.id !== missionId));
  };

  const handleToggleActive = (missionId: string) => {
    setMissions(missions.map(m => 
      m.id === missionId ? { ...m, active: !m.active } : m
    ));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingMission(null);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">
            Gestión de Misiones
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddMission}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            Agregar Misión
        </Button>
      </Box>

      <Grid container spacing={3}>
        {missions.map((mission) => (
          <Grid item xs={12} sm={6} md={4} key={mission.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 120, bgcolor: 'grey.100' }}>
                {missionTypeIcons[mission.type]}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" component="h2">
                    {mission.title}
                  </Typography>
                  <Chip 
                    label={mission.active ? 'Activo' : 'Inactivo'}
                    color={mission.active ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {mission.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                  {mission.points} puntos
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Chip label={missionTypeLabels[mission.type]} size="small" variant="outlined" />
                  <Chip label={mission.category} size="small" />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Expira: {mission.expiresAt}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleEditMission(mission)}>
                  <Edit sx={{ mr: 1 }} />
                  Editar
                </Button>
                <Button size="small" onClick={() => handleToggleActive(mission.id)}>
                  {mission.active ? 'Desactivar' : 'Activar'}
                </Button>
                <Button size="small" color="error" onClick={() => handleDeleteMission(mission.id)}>
                  <Delete sx={{ mr: 1 }} />
                  Eliminar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Floating Action Button para móviles */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: { xs: 'flex', sm: 'none' }
        }}
        onClick={handleAddMission}
      >
        <Add />
      </Fab>

      {/* Dialog para agregar/editar misión */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingMission ? 'Editar Misión' : 'Agregar Misión'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Título"
              fullWidth
              defaultValue={editingMission?.title || ''}
            />
            <TextField
              label="Descripción"
              fullWidth
              multiline
              rows={3}
              defaultValue={editingMission?.description || ''}
            />
            <FormControl fullWidth>
              <InputLabel>Tipo de Misión</InputLabel>
              <Select
                defaultValue={editingMission?.type || 'survey'}
                label="Tipo de Misión"
              >
                <MenuItem value="survey">Encuesta</MenuItem>
                <MenuItem value="trivia">Trivia</MenuItem>
                <MenuItem value="location">Ubicación</MenuItem>
                <MenuItem value="qrcode">Código QR</MenuItem>
                <MenuItem value="purchase">Compra</MenuItem>
                <MenuItem value="product_rating">Calificación</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Puntos"
              type="number"
              fullWidth
              defaultValue={editingMission?.points || ''}
            />
            <TextField
              label="Categoría"
              fullWidth
              defaultValue={editingMission?.category || ''}
            />
            <TextField
              label="Fecha de Expiración"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              defaultValue={editingMission?.expiresAt || ''}
            />
            <FormControlLabel
              control={<Switch defaultChecked={editingMission?.active || true} />}
              label="Misión Activa"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button variant="contained" onClick={handleCloseDialog}>
            {editingMission ? 'Guardar' : 'Crear'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>
  );
}
