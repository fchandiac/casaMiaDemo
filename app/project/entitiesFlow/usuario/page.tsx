'use client';

import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import Header from '@/components/layout/Header';

export default function UsuarioPage() {
  const attributes = [
    { name: 'id', type: 'string', description: 'Identificador único del usuario' },
    { name: 'name', type: 'string', description: 'Nombre completo del usuario' },
    { name: 'mail', type: 'string', description: 'Correo electrónico (único)' },
    { name: 'pass', type: 'string', description: 'Contraseña encriptada' },
    { name: 'active', type: 'boolean', description: 'Si el usuario está activo' },
    { name: 'blocked', type: 'boolean', description: 'Si el usuario está bloqueado' },
    { name: 'rolId', type: 'string', description: 'ID del rol asignado' },
  ];

  const relationships = [
    { entity: 'Perfil', cardinality: '1:1', description: 'Un usuario tiene un perfil' },
    { entity: 'Rol', cardinality: 'N:1', description: 'Muchos usuarios pueden tener el mismo rol' },
    { entity: 'Billetera', cardinality: '1:1', description: 'Un usuario tiene una billetera' },
    { entity: 'Notificación', cardinality: '1:N', description: 'Un usuario puede tener múltiples notificaciones' },
    { entity: 'TarjetaColección', cardinality: '1:N', description: 'Un usuario puede tener múltiples tarjetas de colección' },
    { entity: 'Misión', cardinality: '1:N', description: 'Un usuario puede tener múltiples misiones asignadas' },
    { entity: 'Boleta', cardinality: '1:N', description: 'Un usuario puede tener múltiples boletas' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Entidad: Usuario
          </Typography>
          <Typography variant="body1" paragraph>
            Representa a una persona que hace uso de la aplicación e interactúa con la interfaz. 
            Puede tener roles como cliente, operador o administrador.
          </Typography>
          <Chip label="Entidad Central" color="primary" />
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Atributos
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Atributo</strong></TableCell>
                  <TableCell><strong>Tipo</strong></TableCell>
                  <TableCell><strong>Descripción</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attributes.map((attr, index) => (
                  <TableRow key={index}>
                    <TableCell><code>{attr.name}</code></TableCell>
                    <TableCell><Chip label={attr.type} size="small" variant="outlined" /></TableCell>
                    <TableCell>{attr.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Relaciones
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Entidad Relacionada</strong></TableCell>
                  <TableCell><strong>Cardinalidad</strong></TableCell>
                  <TableCell><strong>Descripción</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {relationships.map((rel, index) => (
                  <TableRow key={index}>
                    <TableCell><strong>{rel.entity}</strong></TableCell>
                    <TableCell><Chip label={rel.cardinality} color="secondary" size="small" /></TableCell>
                    <TableCell>{rel.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
      
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          CasaMia &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
