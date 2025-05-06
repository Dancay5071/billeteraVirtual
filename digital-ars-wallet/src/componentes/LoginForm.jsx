import React, { useState, useEffect } from "react";
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Paper, 
  InputAdornment, 
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { login, getUsuario } from '../servicios/authService';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const loadUsuario = async () => {
      const result = await getUsuario();
      if (result.success) {
        setUsuarios(result.data);
      }
    };
    loadUsuario();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const result = await login(email, password);
      if (result.success) {
        console.log('Usuario autenticado:', result.data.user);
        // Redirigir o manejar el login exitoso
      }
    } catch (err) {
      setError(err.error || 'Error al iniciar sesión');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: isMobile ? 1 : 3,
        backgroundColor: '#f5f5f5'
      }}
    >
      <Paper
        elevation={isMobile ? 1 : 3}
        sx={{
          p: isMobile ? 2 : 4,
          width: '100%',
          maxWidth: isMobile ? '90%' : '450px',
          borderRadius: 2,
          boxSizing: 'border-box'
        }}
      >
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h1" 
          gutterBottom 
          align="center" 
          sx={{ 
            mb: 4,
            fontSize: isMobile ? '1.5rem' : '2.125rem'
          }}
        >
          Billetera virtual
        </Typography>
        
        {error && (
          <Typography 
            color="error" 
            align="center" 
            sx={{ 
              mb: 2,
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}
          >
            {error}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            size={isMobile ? "small" : "medium"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            margin="normal"
            size={isMobile ? "small" : "medium"}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    size={isMobile ? "small" : "medium"}
                  >
                    {showPassword ? <VisibilityOff fontSize={isMobile ? "small" : "medium"} /> : <Visibility fontSize={isMobile ? "small" : "medium"} />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{ mb: 3 }}
          />
          
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size={isMobile ? "medium" : "large"}
            sx={{ 
              py: isMobile ? 1 : 1.5,
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;