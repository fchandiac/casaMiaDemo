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

export default function SegmentOptionsPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único de la opción de segmentación' },
    { name: 'nombre', type: 'string', description: 'Nombre de la pregunta de segmentación' },
    { name: 'tipo', type: 'string', description: 'Tipo de pregunta (selección múltiple, valor numérico, etc.)' },
    { name: 'jsonOpciones', type: 'JSON', description: 'Opciones disponibles para la pregunta' },
    { name: 'available', type: 'boolean', description: 'Indica si la opción está disponible para uso' }
  ];

  const relationships = [
    { entity: 'UserSegmentOptions', type: '1:N', description: 'Una opción puede tener múltiples respuestas de usuarios' },
    { entity: 'Segmento', type: 'N:M', description: 'Una opción puede ser usada por múltiples segmentos' }
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
        SegmentOptions
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Preguntas de segmentación. Puede ser selección múltiple, valor numérico, etc.
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
