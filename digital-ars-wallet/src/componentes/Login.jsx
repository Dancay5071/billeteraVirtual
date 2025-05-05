import React from 'react'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (username, password) => {
    const pruebaUsuario = {
        email: 'usuario1@prueba.com',
        password: '1234'
      };
    console.log('Login attempt:', username, password)
    
    
    navigate('/home')
  }

  return <LoginForm onLogin={handleLogin} />
}

export default Login