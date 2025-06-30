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

export default function InsigniaPage() {
  const attributes = [
    { name: 'id', type: 'number', description: 'Identificador único de la insignia' },
    { name: 'imagen', type: 'string', description: 'URL o referencia de la imagen de la insignia' },
    { name: 'fechaExpiración', type: 'Date', description: 'Fecha en que expira la insignia (opcional)' },
    { name: 'beneficio', type: 'string', description: 'Descripción del beneficio que otorga la insignia' },
    { name: 'userID', type: 'number', description: 'ID del usuario propietario de la insignia' }
  ];

  const relationships = [
    { entity: 'Usuario', type: 'N:1', description: 'Una insignia pertenece a un usuario' },
    { entity: 'Recompensa', type: '1:1', description: 'Una insignia puede ser una recompensa' }
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
        Insignia
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Recompensa simbólica o funcional asociada a beneficios.
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
