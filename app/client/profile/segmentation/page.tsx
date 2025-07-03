'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Radio,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  CircularProgress,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Person,
  ArrowBack,
  Save,
  HelpOutline
} from '@mui/icons-material';
import { ClientHeader, ClientBottomBar } from '@/components/client';

// Tipos para los datos de segmentación
interface SegmentQuestion {
  id: string;
  question: string;
  type: 'select' | 'radio' | 'checkbox' | 'text';
  options?: string[];
  answer?: string | string[];
  required?: boolean;
  helpText?: string;
}

export default function ProfileSegmentationPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [showHelp, setShowHelp] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  // Estado para las preguntas de segmentación
  const [questions, setQuestions] = useState<SegmentQuestion[]>([
    {
      id: 'sq-1',
      question: '¿Con qué frecuencia visitas nuestras tiendas?',
      type: 'select',
      options: ['Diariamente', '2-3 veces por semana', 'Semanalmente', 'Mensualmente', 'Raramente'],
      answer: '',
      required: true,
      helpText: 'Esta información nos ayuda a entender tus hábitos de visita para ofrecerte promociones adecuadas.'
    },
    {
      id: 'sq-2',
      question: '¿Qué tipo de productos consumes más frecuentemente?',
      type: 'checkbox',
      options: ['Café', 'Té', 'Pasteles', 'Sándwiches', 'Ensaladas', 'Jugos'],
      answer: [],
      required: true,
      helpText: 'Conocer tus preferencias nos permite recomendarte productos que podrían interesarte.'
    },
    {
      id: 'sq-3',
      question: '¿Sueles trabajar o estudiar en nuestras tiendas?',
      type: 'radio',
      options: ['Sí, frecuentemente', 'A veces', 'Raramente', 'Nunca'],
      answer: '',
      required: true,
      helpText: 'Nos ayuda a mejorar nuestros espacios según las necesidades de nuestros clientes.'
    },
    {
      id: 'sq-4',
      question: '¿En qué horario sueles visitarnos?',
      type: 'select',
      options: ['Mañana (6-10h)', 'Media mañana (10-12h)', 'Mediodía (12-14h)', 'Tarde (14-18h)', 'Noche (18-22h)'],
      answer: '',
      required: true,
      helpText: 'Conocer tus horarios habituales nos permite personalizar promociones en momentos relevantes para ti.'
    },
    {
      id: 'sq-5',
      question: '¿Qué aspectos valoras más de nuestras tiendas?',
      type: 'checkbox',
      options: ['Calidad del producto', 'Servicio al cliente', 'Ambiente', 'Ubicación', 'Precios', 'Variedad', 'WiFi/Conectividad'],
      answer: [],
      required: true,
      helpText: 'Saber qué aspectos valoras nos ayuda a enfocarnos en lo que más importa a nuestros clientes.'
    },
    {
      id: 'sq-6',
      question: '¿Cuál es tu preferencia de contacto para ofertas y novedades?',
      type: 'radio',
      options: ['Email', 'Notificaciones en la app', 'SMS', 'No deseo recibir comunicaciones'],
      answer: '',
      required: true,
      helpText: 'Respetaremos tu preferencia para comunicarnos contigo de la manera que prefieras.'
    },
    {
      id: 'sq-7',
      question: '¿Qué podríamos mejorar en nuestros productos o servicio?',
      type: 'text',
      answer: '',
      required: false,
      helpText: 'Tus sugerencias son muy valiosas para mejorar continuamente nuestra oferta.'
    }
  ]);

  // Validar si hay respuestas requeridas sin contestar
  const validateResponses = () => {
    for (const q of questions) {
      if (q.required) {
        if (q.type === 'checkbox' && (q.answer as string[])?.length === 0) {
          return false;
        }
        if ((q.type === 'select' || q.type === 'radio' || q.type === 'text') && 
            (!q.answer || (typeof q.answer === 'string' && q.answer.trim() === ''))) {
          return false;
        }
      }
    }
    return true;
  };

  // Manejar cambios en las respuestas
  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setQuestions(prev => prev.map(q => 
      q.id === questionId ? { ...q, answer: value } : q
    ));
  };

  // Guardar las respuestas
  const handleSave = () => {
    if (!validateResponses()) {
      setSnackbar({
        open: true,
        message: 'Por favor, responde todas las preguntas obligatorias.',
        severity: 'error'
      });
      return;
    }

    setSaving(true);
    // Simulamos una llamada a API con un timeout
    setTimeout(() => {
      setSaving(false);
      setSnackbar({
        open: true,
        message: '¡Gracias! Tus respuestas han sido guardadas correctamente.',
        severity: 'success'
      });
      
      // Volvemos a la página de perfil después de guardar
      setTimeout(() => {
        router.push('/client/profile');
      }, 1500);
    }, 1000);
  };

  // Cerrar el snackbar
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  // Mostrar/ocultar ayuda para una pregunta
  const toggleHelp = (questionId: string | null) => {
    setShowHelp(prev => prev === questionId ? null : questionId);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: '90px', // Espacio para el header
          mb: '90px',  // Espacio para el bottom bar
          flex: 1 
        }}
      >
        {/* Header con botón de regreso */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton 
            onClick={() => router.back()}
            sx={{ mr: 2, border: '2px solid #ddd' }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Person /> Cuestionario de Segmentación
          </Typography>
        </Box>

        <Paper 
          sx={{ 
            p: 3, 
            mb: 3, 
            border: '2px solid #ddd', 
            boxShadow: 'none', 
            borderRadius: 2 
          }}
        >
          <Typography variant="body1" sx={{ mb: 3 }}>
            Tus respuestas nos ayudarán a personalizar mejor tu experiencia y ofrecerte 
            recomendaciones más acertadas. La información compartida está protegida según 
            nuestra política de privacidad.
          </Typography>
          
          <Grid container spacing={3}>
            {questions.map((question) => (
              <Grid item xs={12} key={question.id}>
                <Card sx={{ 
                  boxShadow: 'none', 
                  border: '1px solid #ddd', 
                  borderLeft: '4px solid #212121',
                  mb: 2 
                }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                        {question.question}
                        {question.required && <span style={{ color: 'red', marginLeft: '4px' }}>*</span>}
                      </Typography>
                      <IconButton size="small" onClick={() => toggleHelp(question.id)}>
                        <HelpOutline fontSize="small" />
                      </IconButton>
                    </Box>
                    
                    {showHelp === question.id && (
                      <Alert severity="info" sx={{ mb: 2 }}>
                        {question.helpText}
                      </Alert>
                    )}
                    
                    {question.type === 'select' && (
                      <FormControl fullWidth size="small" sx={{ mt: 1 }}>
                        <InputLabel id={`select-label-${question.id}`}>Selecciona una opción</InputLabel>
                        <Select
                          labelId={`select-label-${question.id}`}
                          value={question.answer as string || ''}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          label="Selecciona una opción"
                        >
                          {question.options?.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                    
                    {question.type === 'radio' && (
                      <FormControl component="fieldset" sx={{ mt: 1 }}>
                        <RadioGroup
                          value={question.answer as string || ''}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        >
                          {question.options?.map((option) => (
                            <FormControlLabel 
                              key={option} 
                              value={option} 
                              control={<Radio size="small" />} 
                              label={option} 
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    )}
                    
                    {question.type === 'checkbox' && (
                      <FormControl component="fieldset" sx={{ mt: 1 }}>
                        <FormGroup>
                          {question.options?.map((option) => (
                            <FormControlLabel
                              key={option}
                              control={
                                <Checkbox 
                                  size="small"
                                  checked={(question.answer as string[] || []).includes(option)}
                                  onChange={(e) => {
                                    const currentAnswers = question.answer as string[] || [];
                                    const newAnswers = e.target.checked
                                      ? [...currentAnswers, option]
                                      : currentAnswers.filter(item => item !== option);
                                    handleAnswerChange(question.id, newAnswers);
                                  }}
                                />
                              }
                              label={option}
                            />
                          ))}
                        </FormGroup>
                      </FormControl>
                    )}
                    
                    {question.type === 'text' && (
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        size="small"
                        placeholder="Escribe tu respuesta aquí..."
                        value={question.answer as string || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        sx={{ mt: 1 }}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
            
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                startIcon={saving ? <CircularProgress size={20} color="inherit" /> : <Save />}
                onClick={handleSave}
                disabled={saving}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  borderRadius: 2
                }}
              >
                {saving ? 'Guardando...' : 'Guardar Respuestas'}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      
      <ClientBottomBar />
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
