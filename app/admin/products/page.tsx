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
  TextField
} from '@mui/material';
import { Add, Edit, Delete, Store, Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '@/components/layout/Header';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  active: boolean;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Café Premium',
    description: 'Café de especialidad de origen colombiano',
    image: '/logo.svg',
    active: true
  },
  {
    id: '2',
    name: 'Sandwich Artesanal',
    description: 'Sandwich con ingredientes frescos y locales',
    image: '/logo.svg',
    active: true
  },
  {
    id: '3',
    name: 'Taza de Cerámica',
    description: 'Taza de cerámica con logo de CasaMia',
    image: '/logo.svg',
    active: false
  }
];

export default function ProductsAdminPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setOpenDialog(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setOpenDialog(true);
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const handleToggleActive = (productId: string) => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, active: !p.active } : p
    ));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProduct(null);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">
            Gestión de Productos
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddProduct}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            Agregar Producto
          </Button>
        </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 120, bgcolor: 'grey.100' }}>
                <Store sx={{ fontSize: 48, color: 'grey.400' }} />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" component="h2">
                    {product.name}
                  </Typography>
                  <Chip 
                    label={product.active ? 'Activo' : 'Inactivo'}
                    color={product.active ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleEditProduct(product)}>
                  <Edit sx={{ mr: 1 }} />
                  Editar
                </Button>
                <Button size="small" onClick={() => handleToggleActive(product.id)}>
                  {product.active ? <VisibilityOff sx={{ mr: 1 }} /> : <Visibility sx={{ mr: 1 }} />}
                  {product.active ? 'Desactivar' : 'Activar'}
                </Button>
                <Button size="small" color="error" onClick={() => handleDeleteProduct(product.id)}>
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
        onClick={handleAddProduct}
      >
        <Add />
      </Fab>

      {/* Dialog para agregar/editar producto */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingProduct ? 'Editar Producto' : 'Agregar Producto'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Nombre"
              fullWidth
              defaultValue={editingProduct?.name || ''}
            />
            <TextField
              label="Descripción"
              fullWidth
              multiline
              rows={3}
              defaultValue={editingProduct?.description || ''}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button variant="contained" onClick={handleCloseDialog}>
            {editingProduct ? 'Guardar' : 'Crear'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>
  );
}
