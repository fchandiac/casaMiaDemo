'use client';

import { useState } from 'react';
import { 
  Button, 
  TextField, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Container,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAlertContext } from '@/context/AlertContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { showAlert } = useAlertContext();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Attempting login with:', email, password);
      
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      console.log('Login result:', result);

      if (!result?.ok) {
        showAlert('Credenciales inválidas', 'error');
        return;
      }

      showAlert('Inicio de sesión exitoso', 'success');
      
      // Esperar un poco para asegurar que el token se genere
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Redirigir directamente basado en el email
      console.log('Redirecting based on email:', email);
      
      if (email === 'admin@casamia.com') {
        console.log('Admin login detected, redirecting to /admin');
        router.push('/admin');
        return;
      } else if (email === 'cliente@casamia.com') {
        console.log('Client login detected, redirecting to /client');
        window.location.href = '/client';
      } else if (email === 'operador@casamia.com') {
        console.log('Operator login detected, redirecting to /operator');
        window.location.href = '/operator';
      } else {
        console.log('Unknown email, redirecting to /admin');
        window.location.href = '/admin';
      }
      
    } catch (error) {
      showAlert('Error al iniciar sesión', 'error');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: 'white', mb: 4 }}>
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Logo de CasaMia */}
        <Box sx={{ mb: 3 }}>
          <img
            src="/logo.svg"
            alt="CasaMia"
            style={{
              width: '80px',
              height: '80px',
              filter: 'drop-shadow(0 4px 8px rgba(139, 69, 19, 0.3))',
            }}
          />
        </Box>
        
        <Typography 
          component="h1" 
          variant="h4" 
          gutterBottom
        >
          CasaMia
        </Typography>
        
        <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          sx={{ mb: 3, textAlign: 'center' }}
        >
          CasaMiaApp Demo
        </Typography>
        
        <Card sx={{ width: '100%', mt: 2 }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="casamia-email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                id="casamia-password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="mostrar/ocultar contraseña"
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </Box>
            
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
              Usuarios de prueba:
            </Typography>
            <Box sx={{ mt: 1, bgcolor: 'background.paper', p: 1, borderRadius: 1 }}>
              <Typography variant="body2" component="div">
                Administrador: admin@casamia.com / admin123
              </Typography>
              <Typography variant="body2" component="div">
                Cliente: cliente@casamia.com / cliente123
              </Typography>
              <Typography variant="body2" component="div">
                Operador: operador@casamia.com / operador123
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
