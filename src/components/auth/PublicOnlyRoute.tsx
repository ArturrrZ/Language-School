import { Box, CircularProgress } from '@mui/material'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function PublicOnlyRoute(){
  const { isAuthenticated, isBootstrapped } = useAuth()

  if (!isBootstrapped){
    return (
      <Box sx={{display:'flex', justifyContent:'center', mt: 12}}>
        <CircularProgress />
      </Box>
    )
  }

  if (isAuthenticated){
    return <Navigate to='/profile' replace />
  }

  return <Outlet />
}
