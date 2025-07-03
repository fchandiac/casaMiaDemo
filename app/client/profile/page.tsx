'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  IconButton,
  Grid,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Chip,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  MenuItem,
  Select,
  InputLabel
} from '@mui/material';
import { 
  Person,
  ArrowBack,
  Email,
  Phone,
  LocationOn,
  CalendarToday,
  Edit,
  SaveAlt,
  LocalCafe,
  Restaurant,
  Star,
  Favorite,
  FavoriteBorder,
  LocalOffer
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ClientHeader, ClientBottomBar } from '@/components/client';

// Tipos para los datos del perfil
interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  joinDate: string;
  avatar?: string;
  preferences: UserPreference[];
  loyaltyPoints: number;
  segmentQuestions: SegmentQuestion[];
}

interface UserPreference {
  id: string;
  category: string;
  value: string;
}

interface SegmentQuestion {
  id: string;
  question: string;
  type: 'select' | 'radio' | 'checkbox' | 'text';
  options?: string[];
  answer?: string | string[];
}

export default function ProfilePage() {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  
  // Datos de ejemplo para el perfil del usuario
  const [profile, setProfile] = useState<UserProfile>({
    id: 'user-123',
    name: 'María González',
    email: 'maria.gonzalez@example.com',
    phone: '+56 9 1234 5678',
    address: 'Av. Providencia 1234, Santiago',
    birthDate: '1990-05-15',
    joinDate: '2024-02-10',
    avatar: '/profile-avatar.jpg',
    preferences: [
      { id: 'pref-1', category: 'Bebida', value: 'Cappuccino' },
      { id: 'pref-2', category: 'Comida', value: 'Croissant de Almendras' },
      { id: 'pref-3', category: 'Ambiente', value: 'Terraza' },
      { id: 'pref-4', category: 'Música', value: 'Chill/Acústica' }
    ],
    loyaltyPoints: 3450,
    segmentQuestions: [
      {
        id: 'sq-1',
        question: '¿Con qué frecuencia visitas nuestras tiendas?',
        type: 'select',
        options: ['Diariamente', '2-3 veces por semana', 'Semanalmente', 'Mensualmente', 'Raramente'],
        answer: ''
      },
      {
        id: 'sq-3',
        question: '¿Sueles trabajar o estudiar en nuestras tiendas?',
        type: 'radio',
        options: ['Sí, frecuentemente', 'A veces', 'Raramente', 'Nunca'],
        answer: ''
      }
    ]
  });
  
  // Manejar cambios en los campos editables
  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Manejar cambios en las respuestas de segmentación
  const handleSegmentAnswerChange = (questionId: string, value: string | string[]) => {
    setProfile(prev => ({
      ...prev,
      segmentQuestions: prev.segmentQuestions.map(q => 
        q.id === questionId ? { ...q, answer: value } : q
      )
    }));
  };
  
  // Activar el modo de edición
  const handleEdit = () => {
    setEditing(true);
  };
  
  // Guardar los cambios
  const handleSave = () => {
    setEditing(false);
    // Aquí iría la lógica para guardar los cambios en el servidor
  };
  
  // Obtener el icono para la categoría de preferencia
  const getPreferenceIcon = (category: string) => {
    switch(category) {
      case 'Bebida':
        return <LocalCafe color="primary" />;
      case 'Comida':
        return <Restaurant color="primary" />;
      case 'Ambiente':
        return <FavoriteBorder color="primary" />;
      case 'Música':
        return <Star color="primary" />;
      default:
        return <Favorite color="primary" />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: '90px', // Espacio para el top bar fijo
          mb: '90px',  // Espacio para el bottom bar fijo
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
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Person /> Mi Perfil
          </Typography>
          
          {/* Botón de edición/guardar */}
          <Box sx={{ ml: 'auto' }}>
            {editing ? (
              <Button 
                variant="contained" 
                startIcon={<SaveAlt />}
                onClick={handleSave}
              >
                Guardar
              </Button>
            ) : (
              <Button 
                variant="outlined" 
                startIcon={<Edit />}
                onClick={handleEdit}
              >
                Editar
              </Button>
            )}
          </Box>
        </Box>

        {/* Información principal del perfil */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 3, 
            border: '2px solid #ddd', 
            boxShadow: 'none', 
            borderRadius: 2 
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar 
                src={profile.avatar} 
                alt={profile.name}
                sx={{ 
                  width: 120, 
                  height: 120, 
                  mb: 2,
                  border: '3px solid #212121'
                }}
              >
                {!profile.avatar && profile.name.charAt(0)}
              </Avatar>
              
              <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                {profile.name}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 2 }}>
                Cliente desde {new Date(profile.joinDate).toLocaleDateString()}
              </Typography>
              
              {/* Espacio para elementos adicionales futuros si son necesarios */}
            </Grid>
            
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Información de Contacto
              </Typography>
              
              <List dense disablePadding>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Email color="primary" />
                  </ListItemIcon>
                  {editing ? (
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="Email"
                      value={profile.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                    />
                  ) : (
                    <ListItemText primary={profile.email} />
                  )}
                </ListItem>
                
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Phone color="primary" />
                  </ListItemIcon>
                  {editing ? (
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="Teléfono"
                      value={profile.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                    />
                  ) : (
                    <ListItemText primary={profile.phone} />
                  )}
                </ListItem>
                
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  {editing ? (
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="Dirección"
                      value={profile.address}
                      onChange={(e) => handleProfileChange('address', e.target.value)}
                    />
                  ) : (
                    <ListItemText primary={profile.address} />
                  )}
                </ListItem>
                
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CalendarToday color="primary" />
                  </ListItemIcon>
                  {editing ? (
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="Fecha de nacimiento"
                      type="date"
                      value={profile.birthDate}
                      onChange={(e) => handleProfileChange('birthDate', e.target.value)}
                      InputLabelProps={{ shrink: true }}
                    />
                  ) : (
                    <ListItemText primary={`Fecha de nacimiento: ${new Date(profile.birthDate).toLocaleDateString()}`} />
                  )}
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Preferencias */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 3, 
            border: '2px solid #ddd', 
            boxShadow: 'none', 
            borderRadius: 2 
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Tus Preferencias
          </Typography>
          
          <Grid container spacing={2}>
            {profile.preferences.map(pref => (
              <Grid item xs={6} sm={3} key={pref.id}>
                <Card sx={{ boxShadow: 'none', border: '1px solid #ddd', height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center', p: 2 }}>
                    {getPreferenceIcon(pref.category)}
                    <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 'bold' }}>
                      {pref.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pref.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
        
        {/* Se eliminó la sección de Segmentación del Cliente */}
        
        {/* Se eliminó la sección de Productos Favoritos */}
        
        {/* Se eliminó la sección de Estadísticas */}
        
        {/* Preguntas de Segmentación */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 3, 
            border: '2px solid #ddd', 
            boxShadow: 'none', 
            borderRadius: 2 
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Person /> Cuéntanos sobre ti
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Tus respuestas nos ayudarán a personalizar mejor tu experiencia y ofrecerte recomendaciones más acertadas.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => router.push('/client/profile/segmentation')}
              sx={{ px: 4, py: 1.5, borderRadius: 2 }}
            >
              Responder Cuestionario Completo
            </Button>
          </Box>
          
          <Grid container spacing={3}>
            {profile.segmentQuestions.map((question) => (
              <Grid item xs={12} key={question.id}>
                <Card sx={{ 
                  boxShadow: 'none', 
                  border: '1px solid #ddd', 
                  borderLeft: '4px solid #212121',
                  mb: 2 
                }}>
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {question.question}
                    </Typography>
                    
                    {question.type === 'select' && (
                      <FormControl fullWidth size="small">
                        <InputLabel id={`select-label-${question.id}`}>Selecciona una opción</InputLabel>
                        <Select
                          labelId={`select-label-${question.id}`}
                          value={question.answer as string || ''}
                          onChange={(e) => handleSegmentAnswerChange(question.id, e.target.value)}
                          label="Selecciona una opción"
                        >
                          {question.options?.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                    
                    {question.type === 'radio' && (
                      <FormControl component="fieldset">
                        <RadioGroup
                          value={question.answer as string || ''}
                          onChange={(e) => handleSegmentAnswerChange(question.id, e.target.value)}
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
                      <FormControl component="fieldset">
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
                                    handleSegmentAnswerChange(question.id, newAnswers);
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
                        onChange={(e) => handleSegmentAnswerChange(question.id, e.target.value)}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
            
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                Estas son solo algunas preguntas clave. Para un perfil más completo, accede al cuestionario completo.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant="outlined" 
                  color="primary"
                  onClick={() => {
                    alert('¡Gracias por compartir tu información!');
                  }}
                >
                  Guardar Respuestas
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => router.push('/client/profile/segmentation')}
                >
                  Ver Cuestionario Completo
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      
      <ClientBottomBar />
    </Box>
  );
}
