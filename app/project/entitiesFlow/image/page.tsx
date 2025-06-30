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

export default function ImagenPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único de la imagen' },
    { name: 'url', type: 'string', description: 'URL donde está almacenada la imagen' },
    { name: 'referenceID', type: 'number', description: 'ID de la entidad a la que pertenece la imagen' },
    { name: 'tipoRef', type: 'string', description: 'Tipo de entidad referenciada (producto, misión, etc.)' }
  ];

  const relationships = [
    { entity: 'Producto', type: 'N:1', description: 'Una imagen puede pertenecer a un producto' },
    { entity: 'Misión', type: 'N:1', description: 'Una imagen puede pertenecer a una misión' },
    { entity: 'TarjetaColección', type: 'N:1', description: 'Una imagen puede pertenecer a una tarjeta de colección' }
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
        Imagen
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Archivo visual usado por productos, misiones u otras entidades.
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
