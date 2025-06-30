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

export default function BuyProductPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único de la misión de compra' },
    { name: 'productoID', type: 'number', description: 'ID del producto que debe comprarse' },
    { name: 'nombre', type: 'string', description: 'Nombre de la misión de compra' },
    { name: 'descripción', type: 'string', description: 'Descripción de la misión de compra' },
    { name: 'fecha', type: 'Date', description: 'Fecha de la compra validada' },
    { name: 'usuarioID', type: 'number', description: 'ID del usuario que debe completar la misión' }
  ];

  const relationships = [
    { entity: 'Usuario', type: 'N:1', description: 'Una misión de compra pertenece a un usuario' },
    { entity: 'Producto', type: 'N:1', description: 'Una misión de compra se relaciona con un producto específico' },
    { entity: 'Misión', type: 'extends', description: 'Es un tipo específico de misión' }
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
        BuyProduct
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Misión que requiere comprar producto y validarlo.
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
