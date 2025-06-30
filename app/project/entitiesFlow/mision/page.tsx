'use client';

import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import Header from '@/components/layout/Header';

export default function MisionPage() {
  const attributes = [
    { name: 'id', type: 'string', description: 'Identificador único de la misión' },
    { name: 'nombre', type: 'string', description: 'Nombre descriptivo de la misión' },
    { name: 'tipo', type: 'enum', description: 'Tipo: encuesta, trivia, estoyEnCasaMia, findQR, buyProduct, calificaProducto' },
    { name: 'id_recompensa', type: 'string', description: 'ID de la recompensa asociada' },
    { name: 'id_usuario', type: 'string', description: 'ID del usuario asignado' },
    { name: 'descripcion', type: 'string', description: 'Descripción detallada de la misión' },
    { name: 'fechaInicio', type: 'Date', description: 'Fecha de inicio de la misión' },
    { name: 'fechaFin', type: 'Date', description: 'Fecha de finalización de la misión' },
    { name: 'frecuencia', type: 'string', description: 'Frecuencia de repetición de la misión' },
    { name: 'json', type: 'object', description: 'Datos específicos del tipo de misión' },
    { name: 'imagen', type: 'string', description: 'URL de la imagen asociada' },
  ];

  const relationships = [
    { entity: 'Usuario', cardinality: 'N:1', description: 'Múltiples misiones pueden ser asignadas a un usuario' },
    { entity: 'Recompensa', cardinality: '1:1', description: 'Cada misión tiene una recompensa asociada' },
    { entity: 'Encuesta', cardinality: '1:1', description: 'Herencia: misión puede ser de tipo encuesta' },
    { entity: 'Trivia', cardinality: '1:1', description: 'Herencia: misión puede ser de tipo trivia' },
    { entity: 'EstoyEnCasaMia', cardinality: '1:1', description: 'Herencia: misión puede ser de tipo GPS' },
    { entity: 'FindQRCode', cardinality: '1:1', description: 'Herencia: misión puede ser de tipo QR' },
  ];

  const missionTypes = [
    { name: 'Encuesta', description: 'Preguntas con validación de respuestas correctas' },
    { name: 'Trivia', description: 'Preguntas de cultura general con recompensa por acierto' },
    { name: 'EstoyEnCasaMia', description: 'Verificación GPS de presencia en tienda física' },
    { name: 'FindQRCode', description: 'Búsqueda y escaneo de código QR oculto en tienda' },
    { name: 'BuyProduct', description: 'Compra de producto específico con validación' },
    { name: 'CalificaProducto', description: 'Calificar productos con estrellas y comentarios' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Entidad: Misión
          </Typography>
          <Typography variant="body1" paragraph>
            Reto que entrega recompensa al ser completado. Es la base del sistema de gamificación 
            de CasaMia, permitiendo diferentes tipos de interacciones con los usuarios.
          </Typography>
          <Chip label="Gamificación" color="success" sx={{ mr: 1 }} />
          <Chip label="Polimórfica" color="warning" />
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Tipos de Misión
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Tipo</strong></TableCell>
                  <TableCell><strong>Descripción</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {missionTypes.map((type, index) => (
                  <TableRow key={index}>
                    <TableCell><Chip label={type.name} color="primary" size="small" /></TableCell>
                    <TableCell>{type.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Atributos
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Atributo</strong></TableCell>
                  <TableCell><strong>Tipo</strong></TableCell>
                  <TableCell><strong>Descripción</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attributes.map((attr, index) => (
                  <TableRow key={index}>
                    <TableCell><code>{attr.name}</code></TableCell>
                    <TableCell><Chip label={attr.type} size="small" variant="outlined" /></TableCell>
                    <TableCell>{attr.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Relaciones
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Entidad Relacionada</strong></TableCell>
                  <TableCell><strong>Cardinalidad</strong></TableCell>
                  <TableCell><strong>Descripción</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {relationships.map((rel, index) => (
                  <TableRow key={index}>
                    <TableCell><strong>{rel.entity}</strong></TableCell>
                    <TableCell><Chip label={rel.cardinality} color="secondary" size="small" /></TableCell>
                    <TableCell>{rel.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
      
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          CasaMia &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
