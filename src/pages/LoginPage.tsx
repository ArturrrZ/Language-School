import { Box, TextField } from '@mui/material'
import {useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

type Props = {}

function LoginPage({}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuth();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname || '/profile';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('');
    try {
      await login({ username, password });
      navigate(from, { replace: true });
    } catch {
      setError('Invalid credentials.');
    }
  }
  return (
    <form onSubmit={handleSubmit}>

    
    <Box className='login-page' 
    sx={{ 
    width:{
      xs: '100%',
      sm: '450px',
    },
    margin: '80px auto',
    padding: '0px 30px 30px 30px', 
    borderRadius: '15px',
    boxShadow: {
      xs: '0',
      sm: '10px 15px 50px -5px rgba(0, 0, 0, 0.1)',
    },
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '20px' 
    
    }}>
      <h2>Login</h2>
      <TextField
        required
        id="login-username"
        name="username"
        label="Username"
        autoComplete="username"
        variant="outlined"
        sx={{ width: '100%' }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
      value={password}
        required
        type='password'
        id="login-password"
        name="password"
        label="Password"
        autoComplete="current-password"
        variant="outlined"
        sx={{ width: '100%' }}
      />
      {error ? <Box sx={{ color: 'error.main', width: '100%', fontSize: '0.875rem' }}>{error}</Box> : null}
      <Link to="/forgot-password" style={{ alignSelf: 'flex-start', marginBottom: '10px', textDecoration: 'underline', color: 'black', fontSize: '0.75rem' }}>Forgot Password?</Link>
      <button
        type='submit'
        disabled={isLoading}
        style={{ height: '56px', width: '100%', borderRadius: '8px',   }}
        className="pricing-card-button"
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
      <Box sx={{fontSize: '0.75rem'}}>
        Don't have an account? <Link to="/register" style={{ textDecoration: 'underline', color: 'black', }}>Register</Link>
      </Box>
    </Box>
    </form>
  )
}

export default LoginPage