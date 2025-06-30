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

export default function ProductoPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único del producto' },
    { name: 'nombre', type: 'string', description: 'Nombre del producto' },
    { name: 'descripción', type: 'string', description: 'Descripción detallada del producto' },
    { name: 'categoría', type: 'string', description: 'Categoría a la que pertenece el producto' },
    { name: 'imagen', type: 'string', description: 'URL o referencia de la imagen del producto' },
    { name: 'activo', type: 'boolean', description: 'Indica si el producto está activo' }
  ];

  const relationships = [
    { entity: 'Imagen', type: '1:N', description: 'Un producto puede tener múltiples imágenes' },
    { entity: 'TarjetaColección', type: '1:N', description: 'Un producto puede estar en múltiples tarjetas de colección' },
    { entity: 'BuyProduct', type: '1:N', description: 'Un producto puede ser objetivo de múltiples misiones de compra' },
    { entity: 'CalificaProducto', type: '1:N', description: 'Un producto puede tener múltiples calificaciones' },
    { entity: 'Recompensa', type: '1:N', description: 'Un producto puede ser una recompensa' }
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
        Producto
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Elemento usado en misiones, no necesariamente vendido.
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
