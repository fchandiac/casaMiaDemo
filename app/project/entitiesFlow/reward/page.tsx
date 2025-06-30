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

export default function RecompensaPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único de la recompensa' },
    { name: 'tipo', type: 'string', description: 'Tipo de recompensa (dinero, producto, cupón, insignia)' },
    { name: 'fechaValidez', type: 'Date', description: 'Fecha hasta la cual es válida la recompensa' },
    { name: 'valor', type: 'number', description: 'Valor monetario o numérico de la recompensa' },
    { name: 'id_producto', type: 'number', description: 'ID del producto asociado (si aplica)' },
    { name: 'estado', type: 'string', description: 'Estado actual de la recompensa (pendiente, canjeada, expirada)' },
    { name: 'id_insigniaID', type: 'number', description: 'ID de la insignia asociada (si aplica)' }
  ];

  const relationships = [
    { entity: 'Misión', type: '1:1', description: 'Una recompensa puede estar asociada a una misión' },
    { entity: 'Producto', type: 'N:1', description: 'Una recompensa puede ser un producto específico' },
    { entity: 'Insignia', type: '1:1', description: 'Una recompensa puede ser una insignia' },
    { entity: 'TarjetaColección', type: '1:1', description: 'Una recompensa puede estar asociada a una tarjeta de colección' },
    { entity: 'Boleta', type: '1:1', description: 'Una recompensa puede generarse por una boleta' }
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
        Recompensa
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Premio por cumplir misión o acción. Puede ser dinero, producto, cupón o insignia.
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
