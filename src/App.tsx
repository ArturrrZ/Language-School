import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KidsPage from './pages/KidsPage';
import ConsultationPage from './pages/ConsultationPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar/NavBar';
import { Box } from '@mui/material';


function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
      <Box id='main'>
      <Routes >
        <Route  path='/' element={<HomePage />}/>
        <Route  path='/kids' element={<KidsPage />}/>
        <Route  path='/consultation' element={<ConsultationPage />}/>
        <Route  path='/login' element={<LoginPage />}/>
      </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
