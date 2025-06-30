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

export default function EstoyEnCasaMiaPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único de la misión GPS' },
    { name: 'localID', type: 'number', description: 'ID de la tienda donde debe estar el usuario' },
    { name: 'nombre', type: 'string', description: 'Nombre de la misión GPS' },
    { name: 'descripción', type: 'string', description: 'Descripción de la misión' },
    { name: 'lat', type: 'number', description: 'Latitud de la ubicación objetivo' },
    { name: 'long', type: 'number', description: 'Longitud de la ubicación objetivo' },
    { name: 'radio', type: 'number', description: 'Radio de tolerancia para validar la presencia' }
  ];

  const relationships = [
    { entity: 'Tienda', type: 'N:1', description: 'Se relaciona con una tienda específica' },
    { entity: 'Misión', type: 'extends', description: 'Es un tipo específico de misión' },
    { entity: 'Usuario', type: 'N:M', description: 'Los usuarios pueden completar esta misión' }
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
        EstoyEnCasaMia
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Misión GPS para validar presencia en tienda física.
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
