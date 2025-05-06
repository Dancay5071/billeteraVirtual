import React from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { login } from '../servicios/authService'; // Importa la función de login

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      // Llama a la función de login del servicio
      const result = await login(email, password);
      
      if (result.success) {
        console.log('Login exitoso:', result.data.user);
        // Guarda el token en localStorage o contexto
        localStorage.setItem('authToken', result.data.token);
        // Redirige al home
        navigate('/home');
      }
    } catch (error) {
      console.error('Error de login:', error);
      
      throw error; // Re-lanza el error para que LoginForm lo capture
    }
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default Login;