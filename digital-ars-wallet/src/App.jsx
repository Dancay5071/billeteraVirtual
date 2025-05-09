//App.jsx
import { Routes, Route } from 'react-router-dom'
import Login from './componentes/Login'
import Home from './componentes/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App