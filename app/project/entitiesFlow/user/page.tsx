import React from 'react';
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Box,
  Button
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

export default function UserPage() {
  const attributes = [
    { name: 'id', type: 'uuid', description: 'Identificador único del usuario' },
    { name: 'name', type: 'string', description: 'Nombre completo del usuario' },
    { name: 'email', type: 'string', description: 'Dirección de correo electrónico del usuario' },
    { name: 'password', type: 'string', description: 'Contraseña encriptada del usuario' },
    { name: 'active', type: 'boolean', description: 'Si la cuenta del usuario está activa' },
    { name: 'blocked', type: 'boolean', description: 'Si la cuenta del usuario está bloqueada' },
    { name: 'roleId', type: 'uuid', description: 'ID del rol del usuario' }
  ];

  const relationships = [
    { entity: 'Role', type: 'N:1', description: 'Un usuario pertenece a un rol' },
    { entity: 'Profile', type: '1:1', description: 'Un usuario tiene un perfil' },
    { entity: 'Wallet', type: '1:1', description: 'Un usuario tiene una billetera' },
    { entity: 'Mission', type: '1:N', description: 'Un usuario puede tener múltiples misiones' },
    { entity: 'Badge', type: '1:N', description: 'Un usuario puede tener múltiples insignias' },
    { entity: 'Notification', type: '1:N', description: 'Un usuario puede recibir múltiples notificaciones' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Link href="/project/entities" passHref>
          <Button startIcon={<ArrowBack />} variant="outlined">
            Back to Entities
          </Button>
        </Link>
        <Link href="/project/entitiesFlow" passHref>
          <Button startIcon={<ArrowBack />} variant="outlined">
            Back to Diagram
          </Button>
        </Link>
      </Box>

      <Typography variant="h3" component="h1" gutterBottom>
        User
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Representa a una persona que utiliza la aplicación e interactúa con la interfaz. Puede tener roles como cliente, operador o administrador.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Atributos
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
          <Table sx={{ border: '1px solid #e0e0e0' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}><strong>Nombre</strong></TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}><strong>Tipo</strong></TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}><strong>Descripción</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attributes.map((attr) => (
                <TableRow key={attr.name}>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{attr.name}</TableCell>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{attr.type}</TableCell>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{attr.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Relaciones
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
          <Table sx={{ border: '1px solid #e0e0e0' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}><strong>Entidad</strong></TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}><strong>Tipo</strong></TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}><strong>Descripción</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {relationships.map((rel, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{rel.entity}</TableCell>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{rel.type}</TableCell>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{rel.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
