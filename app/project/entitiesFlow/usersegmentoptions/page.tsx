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

export default function UserSegmentOptionsPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único de la respuesta del usuario' },
    { name: 'usuarioID', type: 'number', description: 'ID del usuario que respondió' },
    { name: 'segmentOptionsID', type: 'number', description: 'ID de la pregunta de segmentación respondida' },
    { name: 'texto', type: 'string', description: 'Respuesta en texto libre (si aplica)' },
    { name: 'opciónSeleccionada', type: 'string', description: 'Opción seleccionada de la lista (si aplica)' }
  ];

  const relationships = [
    { entity: 'Usuario', type: 'N:1', description: 'Una respuesta pertenece a un usuario' },
    { entity: 'SegmentOptions', type: 'N:1', description: 'Una respuesta se refiere a una pregunta específica' },
    { entity: 'Perfil', type: 'N:1', description: 'Una respuesta forma parte del perfil del usuario' }
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
        UserSegmentOptions
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Guarda respuestas a segmentación para asignar a segmentos.
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
