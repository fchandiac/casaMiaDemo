'use client';

import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
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
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip
} from '@mui/material';
import { 
  Add, 
  Edit, 
  Delete, 
  People, 
  AdminPanelSettings, 
  Person, 
  Engineering,
  Visibility,
  VisibilityOff,
  Email,
  Phone
} from '@mui/icons-material';
import Header from '@/components/layout/Header';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client' | 'operator';
  active: boolean;
  lastLogin: string;
  createdAt: string;
  phone?: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Administrador',
    email: 'admin@casamia.com',
    role: 'admin',
    active: true,
    lastLogin: '2024-07-14 10:30:00',
    createdAt: '2024-01-01 00:00:00',
    phone: '+56 9 1234 5678'
  },
  {
    id: '2',
    name: 'Cliente Demo',
    email: 'client@casamia.com',
    role: 'client',
    active: true,
    lastLogin: '2024-07-14 09:15:00',
    createdAt: '2024-02-15 10:20:00',
    phone: '+56 9 8765 4321'
  },
  {
    id: '3',
    name: 'Operador Demo',
    email: 'operator@casamia.com',
    role: 'operator',
    active: true,
    lastLogin: '2024-07-14 08:45:00',
    createdAt: '2024-03-10 14:30:00',
    phone: '+56 9 5555 1234'
  },
  {
    id: '4',
    name: 'Juan Pérez',
    email: 'juan.perez@gmail.com',
    role: 'client',
    active: false,
    lastLogin: '2024-07-10 16:20:00',
    createdAt: '2024-06-01 09:00:00',
    phone: '+56 9 9876 5432'
  }
];

const roleIcons = {
  admin: <AdminPanelSettings />,
  client: <Person />,
  operator: <Engineering />
};

const roleLabels = {
  admin: 'Administrador',
  client: 'Cliente',
  operator: 'Operador'
};

const roleColors = {
  admin: 'error' as const,
  client: 'primary' as const,
  operator: 'secondary' as const
};

export default function UsersAdminPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const handleAddUser = () => {
    setEditingUser(null);
    setOpenDialog(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setOpenDialog(true);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  const handleToggleActive = (userId: string) => {
    setUsers(users.map(u => 
      u.id === userId ? { ...u, active: !u.active } : u
    ));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingUser(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">
            Gestión de Usuarios
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              variant="outlined"
              onClick={() => setViewMode(viewMode === 'table' ? 'cards' : 'table')}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {viewMode === 'table' ? 'Vista Cards' : 'Vista Tabla'}
            </Button>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleAddUser}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              Agregar Usuario
            </Button>
          </Box>
        </Box>

        {viewMode === 'table' ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Usuario</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Rol</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Último Login</TableCell>
                  <TableCell>Creado</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: roleColors[user.role] }}>
                          {user.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <Box>
                          <Typography variant="body1" fontWeight="medium">
                            {user.name}
                          </Typography>
                          {user.phone && (
                            <Typography variant="body2" color="text.secondary">
                              {user.phone}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Email sx={{ fontSize: 16, color: 'text.secondary' }} />
                        {user.email}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        icon={roleIcons[user.role]}
                        label={roleLabels[user.role]}
                        color={roleColors[user.role]}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={user.active ? 'Activo' : 'Inactivo'}
                        color={user.active ? 'success' : 'default'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {formatDate(user.lastLogin)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {formatDate(user.createdAt)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="Editar">
                          <IconButton size="small" onClick={() => handleEditUser(user)}>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title={user.active ? 'Desactivar' : 'Activar'}>
                          <IconButton size="small" onClick={() => handleToggleActive(user.id)}>
                            {user.active ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton size="small" color="error" onClick={() => handleDeleteUser(user.id)}>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Grid container spacing={3}>
            {users.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 60, height: 60, bgcolor: roleColors[user.role] }}>
                        {user.name.charAt(0).toUpperCase()}
                      </Avatar>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6" component="h2" textAlign="center" sx={{ width: '100%' }}>
                        {user.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <Chip 
                        label={user.active ? 'Activo' : 'Inactivo'}
                        color={user.active ? 'success' : 'default'}
                        size="small"
                      />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Email sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {user.email}
                      </Typography>
                    </Box>
                    {user.phone && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Phone sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {user.phone}
                        </Typography>
                      </Box>
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <Chip 
                        icon={roleIcons[user.role]}
                        label={roleLabels[user.role]}
                        color={roleColors[user.role]}
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Último login: {formatDate(user.lastLogin)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Creado: {formatDate(user.createdAt)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleEditUser(user)}>
                      <Edit sx={{ mr: 1 }} />
                      Editar
                    </Button>
                    <Button size="small" onClick={() => handleToggleActive(user.id)}>
                      {user.active ? <VisibilityOff sx={{ mr: 1 }} /> : <Visibility sx={{ mr: 1 }} />}
                      {user.active ? 'Desactivar' : 'Activar'}
                    </Button>
                    <Button size="small" color="error" onClick={() => handleDeleteUser(user.id)}>
                      <Delete sx={{ mr: 1 }} />
                      Eliminar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

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
          onClick={handleAddUser}
        >
          <Add />
        </Fab>

        {/* Dialog para agregar/editar usuario */}
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingUser ? 'Editar Usuario' : 'Agregar Usuario'}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
              <TextField
                label="Nombre Completo"
                fullWidth
                defaultValue={editingUser?.name || ''}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                defaultValue={editingUser?.email || ''}
              />
              <TextField
                label="Teléfono"
                fullWidth
                defaultValue={editingUser?.phone || ''}
              />
              <FormControl fullWidth>
                <InputLabel>Rol</InputLabel>
                <Select
                  defaultValue={editingUser?.role || 'client'}
                  label="Rol"
                >
                  <MenuItem value="admin">Administrador</MenuItem>
                  <MenuItem value="client">Cliente</MenuItem>
                  <MenuItem value="operator">Operador</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={<Switch defaultChecked={editingUser?.active !== false} />}
                label="Usuario Activo"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button variant="contained" onClick={handleCloseDialog}>
              {editingUser ? 'Guardar' : 'Crear'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
