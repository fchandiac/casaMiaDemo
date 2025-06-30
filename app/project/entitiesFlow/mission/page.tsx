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

export default function MissionPage() {
  const attributes = [
    { name: 'id', type: 'string', description: 'Identificador único de la misión' },
    { name: 'name', type: 'string', description: 'Nombre de la misión' },
    { name: 'type', type: 'string', description: 'Tipo de misión' },
    { name: 'rewardId', type: 'string', description: 'ID de la recompensa al completar la misión' },
    { name: 'userId', type: 'string', description: 'ID del usuario asignado a la misión' },
    { name: 'description', type: 'string', description: 'Descripción de la misión' },
    { name: 'startDate', type: 'Date', description: 'Fecha de inicio de la misión' },
    { name: 'endDate', type: 'Date', description: 'Fecha de término de la misión' },
    { name: 'frequency', type: 'string', description: 'Frecuencia de la misión' },
    { name: 'json', type: 'JSON', description: 'Configuración adicional de la misión' },
    { name: 'image', type: 'string', description: 'URL o referencia de la imagen de la misión' }
  ];

  const relationships = [
    { entity: 'Usuario', type: 'N:1', description: 'Una misión pertenece a un usuario' },
    { entity: 'Recompensa', type: '1:1', description: 'Una misión tiene una recompensa' },
    { entity: 'Encuesta', type: 'extends', description: 'La encuesta es un tipo de misión' },
    { entity: 'Trivia', type: 'extends', description: 'La trivia es un tipo de misión' },
    { entity: 'MisiónGPS', type: 'extends', description: 'La misión GPS es un tipo de misión' },
    { entity: 'MisiónQR', type: 'extends', description: 'La misión QR es un tipo de misión' },
    { entity: 'MisiónCompra', type: 'extends', description: 'La misión de compra es un tipo de misión' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Link href="/project/entities" passHref>
          <Button startIcon={<ArrowBack />} variant="outlined">
            Volver a Entidades
          </Button>
        </Link>
        <Link href="/project/entitiesFlow" passHref>
          <Button startIcon={<ArrowBack />} variant="outlined">
            Volver al Diagrama
          </Button>
        </Link>
      </Box>

      <Typography variant="h3" component="h1" gutterBottom>
        Misión
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Desafío que entrega recompensa al ser completado.
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
