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

export default function MovimientosBilleteraPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único del movimiento' },
    { name: 'usuarioID', type: 'number', description: 'ID del usuario propietario de la billetera' },
    { name: 'tipo', type: 'string', description: 'Tipo de movimiento (ingreso, egreso, etc.)' },
    { name: 'saldoPrevio', type: 'number', description: 'Saldo antes del movimiento' },
    { name: 'saldoPosterior', type: 'number', description: 'Saldo después del movimiento' },
    { name: 'billeteraID', type: 'number', description: 'ID de la billetera afectada' },
    { name: 'recompensa', type: 'number', description: 'Monto de la recompensa (si aplica)' }
  ];

  const relationships = [
    { entity: 'Usuario', type: 'N:1', description: 'Un movimiento pertenece a un usuario' },
    { entity: 'Billetera', type: 'N:1', description: 'Un movimiento afecta una billetera específica' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/project/entitiesFlow" passHref>
          <Button startIcon={<ArrowBack />} variant="outlined">
            Volver al Diagrama
          </Button>
        </Link>
      </Box>

      <Typography variant="h3" component="h1" gutterBottom>
        MovimientosBilletera
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Registro de transacciones de la billetera.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Atributos
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Nombre</strong></TableCell>
                <TableCell><strong>Tipo</strong></TableCell>
                <TableCell><strong>Descripción</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attributes.map((attr) => (
                <TableRow key={attr.name}>
                  <TableCell>{attr.name}</TableCell>
                  <TableCell>{attr.type}</TableCell>
                  <TableCell>{attr.description}</TableCell>
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
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Entidad</strong></TableCell>
                <TableCell><strong>Tipo</strong></TableCell>
                <TableCell><strong>Descripción</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {relationships.map((rel, index) => (
                <TableRow key={index}>
                  <TableCell>{rel.entity}</TableCell>
                  <TableCell>{rel.type}</TableCell>
                  <TableCell>{rel.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
