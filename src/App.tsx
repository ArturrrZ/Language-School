import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KidsPage from './pages/KidsPage';
import ConsultationPage from './pages/ConsultationPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar/NavBar';
import { Box } from '@mui/material';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Logout from './pages/Logout';
import ProfilePage from './pages/ProfilePage';
import RequireAuth from './components/auth/RequireAuth';
import PublicOnlyRoute from './components/auth/PublicOnlyRoute';


function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
      <Box id='main'>
      <Routes >
        <Route  path='/' element={<HomePage />}/>
        <Route  path='/kids' element={<KidsPage />}/>
        <Route  path='/consultation' element={<ConsultationPage />}/>
        <Route element={<PublicOnlyRoute />}>
          <Route  path='/login' element={<LoginPage />}/>
          <Route  path='/register' element={<RegisterPage />}/>
        </Route>
        <Route  path='/forgot-password' element={<ForgotPasswordPage />}/>
        <Route  path='/logout' element={<Logout />}/>
        <Route element={<RequireAuth />}>
          <Route  path='/profile' element={<ProfilePage />}/>
        </Route>
      </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
