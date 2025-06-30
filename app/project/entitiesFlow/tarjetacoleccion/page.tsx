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

export default function TarjetaColeccionPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único de la tarjeta de colección' },
    { name: 'usuarioID', type: 'number', description: 'ID del usuario propietario de la tarjeta' },
    { name: 'meta', type: 'number', description: 'Cantidad objetivo de productos para completar la colección' },
    { name: 'fechaEmisión', type: 'Date', description: 'Fecha de emisión de la tarjeta' },
    { name: 'fechaExpiración', type: 'Date', description: 'Fecha de expiración de la tarjeta' },
    { name: 'current', type: 'number', description: 'Cantidad actual de productos coleccionados' },
    { name: 'productoID', type: 'number', description: 'ID del producto que se está coleccionando' },
    { name: 'nombre', type: 'string', description: 'Nombre de la tarjeta de colección' },
    { name: 'imagen', type: 'string', description: 'URL o referencia de la imagen de la tarjeta' },
    { name: 'id_recompensa', type: 'number', description: 'ID de la recompensa al completar la colección' }
  ];

  const relationships = [
    { entity: 'Usuario', type: 'N:1', description: 'Una tarjeta pertenece a un usuario' },
    { entity: 'Producto', type: 'N:1', description: 'Una tarjeta se relaciona con un producto específico' },
    { entity: 'Recompensa', type: '1:1', description: 'Una tarjeta genera una recompensa al completarse' },
    { entity: 'Imagen', type: '1:1', description: 'Una tarjeta puede tener una imagen asociada' }
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
        TarjetaColección
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Tarjeta coleccionable que acumula productos para recompensa.
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
