import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    
    navigate('/')
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenido a DigitalArs Wallet
      </Typography>
      <Typography paragraph>
        Esta es la página principal de tu billetera virtual.
      </Typography>
      <Button 
        variant="contained" 
        color="secondary"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </Button>
    </Box>
  )
}

export default Home