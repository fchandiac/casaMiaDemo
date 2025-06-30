'use client';

import { Box, Container, Typography, Paper, Grid, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Header from '@/components/layout/Header';

export default function ProjectPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Grid container spacing={3}>
          {/* Título principal */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                Proyecto CasaMiaApp
              </Typography>
              <Divider sx={{ my: 2 }} />
            </Paper>
          </Grid>

          {/* 1. Contexto */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  1. Contexto
                </Typography>
                <Typography variant="body1" paragraph>
                  CasaMia es una cafetería reconocida por ofrecer productos de calidad —cafés especiales, pastelería y almuerzos caseros— además de ser un punto de encuentro local para la comunidad. En un mercado competitivo, donde existen múltiples opciones de cafeterías, CasaMia busca diferenciarse y fortalecer la relación con sus clientes mediante una fidelización digital y personalizada.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 1.2 Problema/Necesidad */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  1.2 Problema / Necesidad clave
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                  1.2.1 Fidelización y retención:
                </Typography>
                <Typography variant="body2" paragraph>
                  Incrementar la frecuencia de visitas y el ticket promedio, manteniendo la preferencia del Usuario Cliente en CasaMia frente a otras cafeterías de la zona.
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                  1.2.2 Medición y segmentación:
                </Typography>
                <Typography variant="body2">
                  Obtener datos precisos del comportamiento del Usuario Cliente para adaptar ofertas y campañas específicas que respondan a diferentes perfiles y segmentos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 1.3 Propuesta de solución */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  1.3 Propuesta de solución
                </Typography>
                <Typography variant="body1">
                  Desarrollar una aplicación móvil (CasaMiaApp) que facilite la interacción entre la cafetería y sus usuarios. La app permitirá al Usuario Cliente participar en actividades y retos que, al completarlos, otorguen recompensas, incentivando así su lealtad y aumentando la frecuencia de visitas. La experiencia digital integrará validación de acciones en tienda, seguimiento de consumo y entrega de incentivos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 1.4 Objetivos */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  1.4 Objetivos generales de la aplicación
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                      <strong>1.4.1</strong> Incrementar la fidelización mediante un sistema gamificado de misiones y recompensas digitales.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>1.4.2</strong> Facilitar el seguimiento del consumo y la acumulación de beneficios.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                      <strong>1.4.3</strong> Validar presencia en tienda, compras y acciones digitales para recompensar al Usuario Cliente adecuadamente.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>1.4.4</strong> Permitir segmentación avanzada y personalización de ofertas basadas en los datos del perfil y comportamiento del Usuario Cliente.
                    </Typography>
                    <Typography variant="body1">
                      <strong>1.4.5</strong> Mejorar la comunicación con notificaciones oportunas que incentiven la participación y fomenten visitas recurrentes.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* 2. Estrategia */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  2. Estrategia y Diseño Conceptual
                </Typography>
                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                  2.1 Estrategia Principal
                </Typography>
                <Typography variant="body1" paragraph>
                  La estrategia de CasaMia se fundamenta en dos ejes:
                </Typography>
                <Typography variant="body1" paragraph>
                  • <strong>Fidelización:</strong> aplicar un sistema de misiones y recompensas que motive la interacción continua con la aplicación.
                </Typography>
                <Typography variant="body1" paragraph>
                  • <strong>Conocimiento del usuario:</strong> obtener información profunda sobre comportamiento y preferencias a partir de las misiones y acciones realizadas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 2.2 Componentes Clave */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  2.2 Componentes Clave de la estrategia
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                      <strong>2.2.1 Misiones Gamificadas</strong> — retos que el Usuario Cliente completa (visitar tienda, probar productos, encuestas, calificar artículos).
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>2.2.2 Recompensas Tangibles</strong> — saldo virtual, descuentos, productos o insignias al completar misiones o acciones.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>2.2.3 Validación de Presencia y Consumo</strong> — GPS + escaneo de boletas o menús QR para confirmar compras o visitas.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                      <strong>2.2.4 Comunicación Proactiva</strong> — notificaciones sobre misiones nuevas, promociones y vencimientos de recompensas.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>2.2.5 Segmentación y Perfiles</strong> — captura de datos mediante preguntas configurables; los perfiles resultantes agrupan a los usuarios en segmentos que facilitan campañas personalizadas.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* 2.3 Conceptos Clave */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  2.3 Conceptos Clave y Taxonomías
                </Typography>
                
                <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                  2.3.1 Acción
                </Typography>
                <Typography variant="body1" paragraph>
                  Actividad de interacción del Usuario Cliente con la app: ejecutar una funcionalidad específica, completar una misión o responder una sección del perfil.
                </Typography>

                <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                  2.3.2 Recompensa
                </Typography>
                <Typography variant="body1" paragraph>
                  Incentivo digital que recibe el Usuario Cliente tras realizar una acción. Persigue:
                </Typography>
                <Typography variant="body1" paragraph>
                  • Fomentar la participación y la fidelidad<br/>
                  • Reconocer comportamientos valiosos para la marca<br/>
                  • Ofrecer valor real o simbólico<br/>
                  • Promover productos, servicios o visitas a tienda
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Tabla de Tipos de Recompensa */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  2.3.2.1 Tipos de Recompensa y características
                </Typography>
                <TableContainer component={Paper} variant="outlined">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Tipo de Recompensa</strong></TableCell>
                        <TableCell><strong>Descripción</strong></TableCell>
                        <TableCell><strong>Características</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Dinero (Saldo Virtual)</TableCell>
                        <TableCell>Monto en pesos acreditado en la billetera del Usuario Cliente</TableCell>
                        <TableCell>• Puede usarse como pago total o parcial<br/>• Queda registro en el historial de transacciones</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Producto Gratuito</TableCell>
                        <TableCell>Ítem sin costo asociado a un producto específico</TableCell>
                        <TableCell>• Canje presencial en tienda<br/>• Sujeto a disponibilidad del producto</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Descuento (%) o Monto</TableCell>
                        <TableCell>Beneficio en porcentaje o monto fijo aplicable a una compra</TableCell>
                        <TableCell>• Condiciones de aplicación: fechas, productos y/o tiendas específicas<br/>• Uso único (se marca como consumido después del canje)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Insignia (Badge)</TableCell>
                        <TableCell>Recompensa simbólica que reconoce logros o niveles del usuario</TableCell>
                        <TableCell>• Visible en el perfil del Usuario Cliente<br/>• Puede habilitar beneficios especiales definidos por el administrador</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Misiones */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  2.3.3 Misión
                </Typography>
                <Typography variant="body1" paragraph>
                  En la app, las misiones son retos o tareas específicas que el Usuario Cliente debe completar para obtener recompensas. Cada misión tiene un tipo definido y está asociada a una recompensa al finalizarla con éxito.
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Tipos de misión:
                </Typography>
                <Typography variant="body2">
                  • Encuesta – preguntas y validación de respuestas<br/>
                  • Trivia – preguntas de cultura; premio si acierta<br/>
                  • Estoy en CasaMia – verificación GPS en tienda<br/>
                  • Encontrar QR – escaneo de código QR oculto<br/>
                  • Comprar producto – compra validada mediante escaneo<br/>
                  • Calificar producto – estrellas + comentario
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Sistema de Segmentación */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  2.3.5 Sistema de Segmentación
                </Typography>
                <Typography variant="body1" paragraph>
                  Se compone de:
                </Typography>
                <Typography variant="body2" paragraph>
                  • Opción de segmentación (pregunta)<br/>
                  • Opción del usuario (respuesta)<br/>
                  • Segmento (grupo que comparte respuestas)
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Ejemplo práctico:
                </Typography>
                <Typography variant="body2">
                  Para «mujeres veganas {'>'}30 años» se crean tres preguntas:<br/>
                  1) Género (Hombre, Mujer, Otro)<br/>
                  2) Edad (numérico o rangos)<br/>
                  3) Preferencia alimenticia (Carnívoro, Vegano, Vegetariano)<br/>
                  Con las respuestas se forma el segmento y se dirigen campañas específicas a ese grupo.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          CasaMia &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
