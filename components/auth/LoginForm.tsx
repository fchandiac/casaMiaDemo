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
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!result?.ok) {
        showAlert('❌ Credenciales inválidas. ¡Revisa tu correo y contraseña!', 'error');
        return;
      }

      showAlert('✅ ¡Bienvenido a CasaMia! ☕', 'success');
      router.push('/dashboard');
    } catch (error) {
      showAlert('☕ Algo salió mal. ¡Inténtalo de nuevo!', 'error');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
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
          sx={{
            background: 'linear-gradient(45deg, #8B4513, #CD853F)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            mb: 1
          }}
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
        
        <Card sx={{ width: '100%', mt: 2, boxShadow: '0 8px 32px rgba(139, 69, 19, 0.1)' }}>
          <CardContent sx={{ p: 4 }}>
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#8B4513',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#8B4513',
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#8B4513',
                  },
                }}
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#8B4513',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#8B4513',
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#8B4513',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="mostrar/ocultar contraseña"
                        onClick={handleShowPassword}
                        edge="end"
                        sx={{ color: '#8B4513' }}
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
                sx={{ 
                  mt: 3, 
                  mb: 2,
                  background: 'linear-gradient(45deg, #8B4513, #CD853F)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #704010, #B8860B)',
                  },
                  boxShadow: '0 4px 16px rgba(139, 69, 19, 0.3)',
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}
                disabled={loading}
              >
                {loading ? '☕ Preparando tu acceso...' : '🔑 Iniciar Sesión'}
              </Button>
            </Box>
            
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 3, mb: 2 }}>
              🧪 Usuarios de prueba para testing:
            </Typography>
            <Box sx={{ 
              mt: 1, 
              bgcolor: '#FFF8DC', 
              p: 2, 
              borderRadius: 2,
              border: '1px solid #DEB887'
            }}>
              <Typography variant="body2" component="div" sx={{ mb: 1, fontWeight: 500 }}>
                👑 <strong>Administrador:</strong> admin@casamia.com / admin123
              </Typography>
              <Typography variant="body2" component="div" sx={{ mb: 1, fontWeight: 500 }}>
                ☕ <strong>Cliente:</strong> cliente@casamia.com / cliente123
              </Typography>
              <Typography variant="body2" component="div" sx={{ fontWeight: 500 }}>
                🛠️ <strong>Operador:</strong> operador@casamia.com / operador123
              </Typography>
            </Box>
            
            {/* Mensaje motivacional */}
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#8B4513',
                  fontStyle: 'italic',
                  display: 'block',
                  mb: 1
                }}
              >
                "¡Completa misiones, gana recompensas y disfruta de tu café favorito!"
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ☕ Cada visita cuenta • 🎁 Cada punto importa • ❤️ Cada momento es especial
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
