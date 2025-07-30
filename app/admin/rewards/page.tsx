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
  FormControlLabel,
  InputAdornment
} from '@mui/material';
import { Add, Edit, Delete, EmojiEvents, LocalCafe, CardGiftcard, Percent, Star } from '@mui/icons-material';
import Header from '@/components/layout/Header';

interface Reward {
  id: string;
  title: string;
  description: string;
  type: 'discount' | 'free_item' | 'points' | 'badge' | 'special_offer';
  value: number;
  pointsCost: number;
  category: string;
  active: boolean;
  expiresAt: string;
  stock: number;
}

const mockRewards: Reward[] = [
  {
    id: '1',
    title: 'Descuento 10%',
    description: 'Descuento del 10% en tu próxima compra',
    type: 'discount',
    value: 10,
    pointsCost: 100,
    category: 'Descuentos',
    active: true,
    expiresAt: '2024-12-31',
    stock: 100
  },
  {
    id: '2',
    title: 'Café Gratis',
    description: 'Café Premium gratis de cualquier tamaño',
    type: 'free_item',
    value: 15.99,
    pointsCost: 150,
    category: 'Bebidas',
    active: true,
    expiresAt: '2024-12-31',
    stock: 50
  },
  {
    id: '3',
    title: 'Puntos Bonus',
    description: 'Obtén 50 puntos adicionales',
    type: 'points',
    value: 50,
    pointsCost: 75,
    category: 'Puntos',
    active: true,
    expiresAt: '2024-12-31',
    stock: 200
  },
  {
    id: '4',
    title: 'Insignia VIP',
    description: 'Obtén la insignia de cliente VIP',
    type: 'badge',
    value: 0,
    pointsCost: 500,
    category: 'Insignias',
    active: false,
    expiresAt: '2024-12-31',
    stock: 10
  }
];

const rewardTypeIcons = {
  discount: <Percent />,
  free_item: <LocalCafe />,
  points: <EmojiEvents />,
  badge: <Star />,
  special_offer: <CardGiftcard />
};

const rewardTypeLabels = {
  discount: 'Descuento',
  free_item: 'Producto Gratis',
  points: 'Puntos',
  badge: 'Insignia',
  special_offer: 'Oferta Especial'
};

export default function RewardsAdminPage() {
  const [rewards, setRewards] = useState<Reward[]>(mockRewards);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingReward, setEditingReward] = useState<Reward | null>(null);

  const handleAddReward = () => {
    setEditingReward(null);
    setOpenDialog(true);
  };

  const handleEditReward = (reward: Reward) => {
    setEditingReward(reward);
    setOpenDialog(true);
  };

  const handleDeleteReward = (rewardId: string) => {
    setRewards(rewards.filter(r => r.id !== rewardId));
  };

  const handleToggleActive = (rewardId: string) => {
    setRewards(rewards.map(r => 
      r.id === rewardId ? { ...r, active: !r.active } : r
    ));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingReward(null);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">
            Gestión de Recompensas
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddReward}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            Agregar Recompensa
          </Button>
      </Box>

      <Grid container spacing={3}>
        {rewards.map((reward) => (
          <Grid item xs={12} sm={6} md={4} key={reward.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 120, bgcolor: 'grey.100' }}>
                {rewardTypeIcons[reward.type]}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" component="h2">
                    {reward.title}
                  </Typography>
                  <Chip 
                    label={reward.active ? 'Activo' : 'Inactivo'}
                    color={reward.active ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {reward.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                  {reward.pointsCost} puntos
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Chip label={rewardTypeLabels[reward.type]} size="small" variant="outlined" />
                  <Chip label={reward.category} size="small" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Stock: {reward.stock}
                  </Typography>
                  {reward.type === 'discount' && (
                    <Typography variant="body2" color="primary">
                      {reward.value}% OFF
                    </Typography>
                  )}
                  {reward.type === 'free_item' && (
                    <Typography variant="body2" color="primary">
                      Valor: ${reward.value}
                    </Typography>
                  )}
                  {reward.type === 'points' && (
                    <Typography variant="body2" color="primary">
                      +{reward.value} puntos
                    </Typography>
                  )}
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Expira: {reward.expiresAt}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleEditReward(reward)}>
                  <Edit sx={{ mr: 1 }} />
                  Editar
                </Button>
                <Button size="small" onClick={() => handleToggleActive(reward.id)}>
                  {reward.active ? 'Desactivar' : 'Activar'}
                </Button>
                <Button size="small" color="error" onClick={() => handleDeleteReward(reward.id)}>
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
        onClick={handleAddReward}
      >
        <Add />
      </Fab>

      {/* Dialog para agregar/editar recompensa */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingReward ? 'Editar Recompensa' : 'Agregar Recompensa'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Título"
              fullWidth
              defaultValue={editingReward?.title || ''}
            />
            <TextField
              label="Descripción"
              fullWidth
              multiline
              rows={3}
              defaultValue={editingReward?.description || ''}
            />
            <FormControl fullWidth>
              <InputLabel>Tipo de Recompensa</InputLabel>
              <Select
                defaultValue={editingReward?.type || 'discount'}
                label="Tipo de Recompensa"
              >
                <MenuItem value="discount">Descuento</MenuItem>
                <MenuItem value="free_item">Producto Gratis</MenuItem>
                <MenuItem value="points">Puntos</MenuItem>
                <MenuItem value="badge">Insignia</MenuItem>
                <MenuItem value="special_offer">Oferta Especial</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Valor"
              type="number"
              fullWidth
              helperText="Para descuentos: porcentaje. Para productos gratis: precio. Para puntos: cantidad."
              defaultValue={editingReward?.value || ''}
            />
            <TextField
              label="Fecha de Expiración"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              defaultValue={editingReward?.expiresAt || ''}
            />
            <FormControlLabel
              control={<Switch defaultChecked={editingReward?.active || true} />}
              label="Recompensa Activa"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button variant="contained" onClick={handleCloseDialog}>
            {editingReward ? 'Guardar' : 'Crear'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>
  );
}
