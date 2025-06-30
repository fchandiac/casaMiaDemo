'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import Header from '@/components/layout/Header';

export default function ProjectPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            Proyecto CasaMiaApp
          </Typography>
          
          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            1. Contexto
          </Typography>
          <Typography variant="body1" paragraph>
            CasaMia es una cafetería reconocida por ofrecer productos de calidad —cafés especiales, pastelería y almuerzos caseros— además de ser un punto de encuentro local para la comunidad. En un mercado competitivo, donde existen múltiples opciones de cafeterías, CasaMia busca diferenciarse y fortalecer la relación con sus clientes mediante una fidelización digital y personalizada.
          </Typography>

          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            1.2 Problema / Necesidad clave
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            1.2.1 Fidelización y retención de clientes:
          </Typography>
          <Typography variant="body1" paragraph>
            Incrementar la frecuencia de visitas y el ticket promedio, manteniendo la preferencia del Usuario Cliente en CasaMia frente a otras cafeterías de la zona.
          </Typography>
          
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            1.2.2 Medición y segmentación:
          </Typography>
          <Typography variant="body1" paragraph>
            Obtener datos precisos del comportamiento del Usuario Cliente para adaptar ofertas y campañas específicas que respondan a diferentes perfiles y segmentos.
          </Typography>

          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            1.3 Propuesta de solución
          </Typography>
          <Typography variant="body1" paragraph>
            Desarrollar una aplicación móvil (CasaMiaApp) que facilite la interacción entre la cafetería y sus usuarios. La app permitirá al Usuario Cliente participar en actividades y retos que, al completarlos, otorguen recompensas, incentivando así su lealtad y aumentando la frecuencia de visitas. La experiencia digital integrará validación de acciones en tienda, seguimiento de consumo y entrega de incentivos, todo orientado a fortalecer la relación con el Usuario Cliente y ofrecerle beneficios concretos por su preferencia.
          </Typography>

          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            1.4 Objetivos generales de la aplicación
          </Typography>
          <Typography variant="body1" paragraph>
            1.4.1 Incrementar la fidelización mediante un sistema gamificado de misiones y recompensas digitales.
          </Typography>
          <Typography variant="body1" paragraph>
            1.4.2 Facilitar el seguimiento del consumo y la acumulación de beneficios.
          </Typography>
          <Typography variant="body1" paragraph>
            1.4.3 Validar presencia en tienda, compras y acciones digitales para recompensar al Usuario Cliente adecuadamente.
          </Typography>
          <Typography variant="body1" paragraph>
            1.4.4 Permitir segmentación avanzada y personalización de ofertas basadas en los datos del perfil y comportamiento del Usuario Cliente.
          </Typography>
          <Typography variant="body1" paragraph>
            1.4.5 Mejorar la comunicación con notificaciones oportunas que incentiven la participación y fomenten visitas recurrentes.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            2. Estrategia y Diseño Conceptual
          </Typography>
          
          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            2.1 Estrategia Principal
          </Typography>
          <Typography variant="body1" paragraph>
            La estrategia de CasaMia se fundamenta en dos ejes:
          </Typography>
          <Typography variant="body1" paragraph>
            • Fidelización: aplicar un sistema de misiones y recompensas que motive la interacción continua con la aplicación.
          </Typography>
          <Typography variant="body1" paragraph>
            • Conocimiento del usuario: obtener información profunda sobre comportamiento y preferencias a partir de las misiones y acciones realizadas.
          </Typography>
          <Typography variant="body1" paragraph>
            Este conocimiento se captura mediante perfiles y segmentación. Cada Usuario Cliente responde a opciones configurables; dichas respuestas permiten agrupar a los usuarios en segmentos con características comunes y lanzar campañas personalizadas. De este modo, la app incentiva la participación con recompensas claras mientras genera datos valiosos que la administración usa para mejorar continuamente la fidelización y la promoción, adaptándose a distintos perfiles y necesidades.
          </Typography>

          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            2.2 Componentes Clave de la estrategia
          </Typography>
          <Typography variant="body1" paragraph>
            2.2.1 Misiones Gamificadas — retos que el Usuario Cliente completa (visitar tienda, probar productos, encuestas, calificar artículos).
          </Typography>
          <Typography variant="body1" paragraph>
            2.2.2 Recompensas Tangibles — saldo virtual, descuentos, productos o insignias al completar misiones o acciones.
          </Typography>
          <Typography variant="body1" paragraph>
            2.2.3 Validación de Presencia y Consumo — GPS + escaneo de boletas o menús QR para confirmar compras o visitas.
          </Typography>
          <Typography variant="body1" paragraph>
            2.2.4 Comunicación Proactiva — notificaciones sobre misiones nuevas, promociones y vencimientos de recompensas.
          </Typography>
          <Typography variant="body1" paragraph>
            2.2.5 Segmentación y Perfiles — captura de datos mediante preguntas configurables; los perfiles resultantes agrupan a los usuarios en segmentos que facilitan campañas personalizadas.
          </Typography>

          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            2.3 Conceptos Clave y Taxonomías
          </Typography>
          
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            2.3.1 Acción
          </Typography>
          <Typography variant="body1" paragraph>
            Actividad de interacción del Usuario Cliente con la app: ejecutar una funcionalidad específica, completar una misión o responder una sección del perfil.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            2.3.2 Recompensa
          </Typography>
          <Typography variant="body1" paragraph>
            Incentivo digital que recibe el Usuario Cliente tras realizar una acción. Persigue:
          </Typography>
          <Typography variant="body1" paragraph>
            • Fomentar la participación y la fidelidad.
          </Typography>
          <Typography variant="body1" paragraph>
            • Reconocer comportamientos valiosos para la marca.
          </Typography>
          <Typography variant="body1" paragraph>
            • Ofrecer valor real o simbólico.
          </Typography>
          <Typography variant="body1" paragraph>
            • Promover productos, servicios o visitas a tienda.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            2.3.2.1 Tipos de Recompensa y características
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Dinero (Saldo Virtual):</strong> Monto en pesos acreditado en la billetera del Usuario Cliente. Puede usarse como pago total o parcial. Queda registro en el historial de transacciones.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Producto Gratuito:</strong> Ítem sin costo asociado a un producto específico. Canje presencial en tienda. Sujeto a disponibilidad del producto.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Descuento (%) o Monto:</strong> Beneficio en porcentaje o monto fijo aplicable a una compra. Condiciones de aplicación: fechas, productos y/o tiendas específicas. Uso único (se marca como consumido después del canje).
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Insignia (Badge):</strong> Recompensa simbólica que reconoce logros o niveles del usuario. Visible en el perfil del Usuario Cliente. Puede habilitar beneficios especiales definidos por el administrador.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            2.3.3 Misión
          </Typography>
          <Typography variant="body1" paragraph>
            En la app, las misiones son retos o tareas específicas que el Usuario Cliente debe completar para obtener recompensas. Cada misión tiene un tipo definido y está asociada a una recompensa al finalizarla con éxito.
          </Typography>
          
          <Typography variant="body1" paragraph>
            <strong>Tipos de misión:</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            • Encuesta – preguntas y validación de respuestas.
          </Typography>
          <Typography variant="body1" paragraph>
            • Trivia – preguntas de cultura; premio si acierta.
          </Typography>
          <Typography variant="body1" paragraph>
            • Estoy en CasaMia – verificación GPS en tienda.
          </Typography>
          <Typography variant="body1" paragraph>
            • Encontrar QR – escaneo de código QR oculto.
          </Typography>
          <Typography variant="body1" paragraph>
            • Comprar producto – compra validada mediante escaneo.
          </Typography>
          <Typography variant="body1" paragraph>
            • Calificar producto – estrellas + comentario.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            2.3.4 Perfil
          </Typography>
          <Typography variant="body1" paragraph>
            Conjunto de respuestas del Usuario Cliente a preguntas definidas por el administrador; al completarlas puede recibir recompensas. Base para segmentar y personalizar ofertas.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            2.3.5 Sistema de Segmentación
          </Typography>
          <Typography variant="body1" paragraph>
            Se compone de:
          </Typography>
          <Typography variant="body1" paragraph>
            • Opción de segmentación (pregunta).
          </Typography>
          <Typography variant="body1" paragraph>
            • Opción del usuario (respuesta).
          </Typography>
          <Typography variant="body1" paragraph>
            • Segmento (grupo que comparte respuestas).
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Ejemplo práctico:</strong> Para «mujeres veganas {'>'}30 años» se crean tres preguntas: 1) Género (Hombre, Mujer, Otro), 2) Edad (numérico o rangos), 3) Preferencia alimenticia (Carnívoro, Vegano, Vegetariano). Con las respuestas se forma el segmento y se dirigen campañas específicas a ese grupo.
          </Typography>
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
