import React from 'react';
import {
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Container,
  Box,
  Chip
} from '@mui/material';
import Link from 'next/link';

export default function EntitiesPage() {
  const entities = [
    {
      name: 'User',
      description: 'Representa a una persona que utiliza la aplicación e interactúa con la interfaz.',
      category: 'Core',
      path: '/project/entitiesFlow/user',
      color: '#1976d2'
    },
    {
      name: 'Profile',
      description: 'Compuesto por múltiples opciones de segmentación. Define grupos con listas, casillas de verificación o valores numéricos.',
      category: 'Core',
      path: '/project/entitiesFlow/profile',
      color: '#1976d2'
    },
    {
      name: 'Role',
      description: 'Define acceso y permisos. Puede ser cliente, operador o administrador.',
      category: 'Core',
      path: '/project/entitiesFlow/role',
      color: '#1976d2'
    },
    {
      name: 'Wallet',
      description: 'Cuenta virtual para recompensas del usuario en dinero.',
      category: 'Financial',
      path: '/project/entitiesFlow/wallet',
      color: '#388e3c'
    },
    {
      name: 'Wallet Movement',
      description: 'Registro de transacciones de la billetera.',
      category: 'Financial',
      path: '/project/entitiesFlow/walletmovement',
      color: '#388e3c'
    },
    {
      name: 'Product',
      description: 'Elemento utilizado en misiones, no necesariamente vendido.',
      category: 'Catalog',
      path: '/project/entitiesFlow/product',
      color: '#f57c00'
    },
    {
      name: 'Image',
      description: 'Archivo visual utilizado por productos, misiones u otras entidades.',
      category: 'Media',
      path: '/project/entitiesFlow/image',
      color: '#7b1fa2'
    },
    {
      name: 'Mission',
      description: 'Desafío que entrega recompensa cuando se completa.',
      category: 'Gamification',
      path: '/project/entitiesFlow/mission',
      color: '#d32f2f'
    },
    {
      name: 'Survey',
      description: 'Misión tipo encuesta para validar respuestas.',
      category: 'Gamification',
      path: '/project/entitiesFlow/survey',
      color: '#d32f2f'
    },
    {
      name: 'Trivia',
      description: 'Misión basada en preguntas de trivia. Recompensa por respuesta correcta.',
      category: 'Gamification',
      path: '/project/entitiesFlow/trivia',
      color: '#d32f2f'
    },
    {
      name: 'Location Mission',
      description: 'Misión GPS para validar presencia en tienda física.',
      category: 'Gamification',
      path: '/project/entitiesFlow/locationmission',
      color: '#d32f2f'
    },
    {
      name: 'QR Code Mission',
      description: 'Misión tipo búsqueda. Escanear código QR oculto.',
      category: 'Gamification',
      path: '/project/entitiesFlow/qrcodemission',
      color: '#d32f2f'
    },
    {
      name: 'Purchase Mission',
      description: 'Misión que requiere comprar producto y validarlo.',
      category: 'Gamification',
      path: '/project/entitiesFlow/purchasemission',
      color: '#d32f2f'
    },
    {
      name: 'Reward',
      description: 'Premio por completar misión o acción. Puede ser dinero, producto, cupón o insignia.',
      category: 'Rewards',
      path: '/project/entitiesFlow/reward',
      color: '#fbc02d'
    },
    {
      name: 'Badge',
      description: 'Recompensa simbólica o funcional asociada con beneficios.',
      category: 'Rewards',
      path: '/project/entitiesFlow/badge',
      color: '#fbc02d'
    },
    {
      name: 'Collection Card',
      description: 'Tarjeta coleccionable que acumula productos para recompensa.',
      category: 'Rewards',
      path: '/project/entitiesFlow/collectioncard',
      color: '#fbc02d'
    },
    {
      name: 'Store',
      description: 'Representa tienda física utilizada para misiones GPS o registros de compra.',
      category: 'Location',
      path: '/project/entitiesFlow/store',
      color: '#5d4037'
    },
    {
      name: 'Receipt',
      description: 'Registro de boleta escaneada que puede generar recompensa.',
      category: 'Transaction',
      path: '/project/entitiesFlow/receipt',
      color: '#455a64'
    },
    {
      name: 'Menu Scan',
      description: 'Escaneo de menú QR en tienda. Registra visita o recompensa.',
      category: 'Transaction',
      path: '/project/entitiesFlow/menuscan',
      color: '#455a64'
    },
    {
      name: 'Product Rating',
      description: 'Permite calificar productos.',
      category: 'Engagement',
      path: '/project/entitiesFlow/productrating',
      color: '#e91e63'
    },
    {
      name: 'Notification',
      description: 'Mensaje enviado al usuario desde el sistema o administrador.',
      category: 'Communication',
      path: '/project/entitiesFlow/notification',
      color: '#00796b'
    },
    {
      name: 'Segment',
      description: 'Agrupa usuarios por criterios definidos por el administrador.',
      category: 'Segmentation',
      path: '/project/entitiesFlow/segment',
      color: '#3f51b5'
    },
    {
      name: 'Segment Option',
      description: 'Preguntas de segmentación. Pueden ser de opción múltiple, valor numérico, etc.',
      category: 'Segmentation',
      path: '/project/entitiesFlow/segmentoption',
      color: '#3f51b5'
    },
    {
      name: 'User Segment Option',
      description: 'Almacena respuestas de segmentación para asignar a segmentos.',
      category: 'Segmentation',
      path: '/project/entitiesFlow/usersegmentoption',
      color: '#3f51b5'
    }
  ];

  const categories = ['Core', 'Financial', 'Catalog', 'Media', 'Gamification', 'Rewards', 'Location', 'Transaction', 'Engagement', 'Communication', 'Segmentation'];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Core': '#1976d2',
      'Financial': '#388e3c',
      'Catalog': '#f57c00',
      'Media': '#7b1fa2',
      'Gamification': '#d32f2f',
      'Rewards': '#fbc02d',
      'Location': '#5d4037',
      'Transaction': '#455a64',
      'Engagement': '#e91e63',
      'Communication': '#00796b',
      'Segmentation': '#3f51b5'
    };
    return colors[category as keyof typeof colors] || '#666666';
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Entidades del Proyecto
        </Typography>
        <Typography variant="h5" component="p" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
          Esta sección está diseñada para mostrar y describir todas las entidades del proyecto del sistema de lealtad CasaMia. 
          Cada entidad representa un componente central de la aplicación con sus atributos y relaciones específicas.
        </Typography>
      </Box>

      {categories.map((category) => {
        const categoryEntities = entities.filter(entity => entity.category === category);
        if (categoryEntities.length === 0) return null;

        return (
          <Box key={category} sx={{ mb: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{ 
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: getCategoryColor(category),
                  mr: 2
                }} 
              />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'medium' }}>
                {category === 'Core' ? 'Entidades de Identidad' : `${category} Entities`}
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {categoryEntities.map((entity) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={entity.name}>
                  <Link href={entity.path} passHref style={{ textDecoration: 'none' }}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        },
                        border: `2px solid ${entity.color}20`,
                        borderRadius: 2
                      }}
                    >
                      <CardActionArea sx={{ height: '100%' }}>
                        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <Box sx={{ 
                            width: '100%', 
                            height: '4px', 
                            backgroundColor: entity.color,
                            borderRadius: '2px',
                            mb: 2
                          }} />
                          
                          <Typography 
                            variant="h6" 
                            component="h3" 
                            gutterBottom 
                            sx={{ 
                              fontWeight: 'bold',
                              color: entity.color,
                              minHeight: '2.5rem',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            {entity.name}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                              flexGrow: 1,
                              lineHeight: 1.5
                            }}
                          >
                            {entity.description}
                          </Typography>
                          
                          <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #e0e0e0' }}>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: entity.color,
                                fontWeight: 'medium'
                              }}
                            >
                              Click to view details →
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}

      <Box sx={{ mt: 6, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Entity Relationship Diagram
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          For a visual representation of how all these entities connect and relate to each other, 
          visit the interactive flow diagram.
        </Typography>
        <Link href="/project/entitiesFlow" passHref>
          <Box 
            component="button"
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 'medium',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#1565c0',
                transform: 'translateY(-1px)',
              }
            }}
          >
            View Entities Flow Diagram
          </Box>
        </Link>
      </Box>
    </Container>
  );
}
