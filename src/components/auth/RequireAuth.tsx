import { Box, CircularProgress } from '@mui/material'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function RequireAuth(){
  const { isAuthenticated, isBootstrapped } = useAuth()
  const location = useLocation()

  if (!isBootstrapped){
    return (
      <Box sx={{display:'flex', justifyContent:'center', mt: 12}}>
        <CircularProgress />
      </Box>
    )
  }

  if (!isAuthenticated){
    return <Navigate to='/login' replace state={{ from: location }} />
  }

  return <Outlet />
}
