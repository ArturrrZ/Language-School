import { Box, TextField } from '@mui/material';
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type Props = {}

function RegisterPage({}: Props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { register, isLoading } = useAuth();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname || '/profile';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await register({ username, email, password });
      navigate(from, { replace: true });
    } catch {
      setError('Registration failed. Check username/email uniqueness.');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
    <Box className='register-page' 
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
      <h2>Register</h2>
      <TextField
        required
        id="register-username"
        name="username"
        label="Username"
        autoComplete="username"
        variant="outlined"
        sx={{ width: '100%' }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        required
        type='email'
        id="register-email"
        name="email"
        label="Email"
        autoComplete="email"
        variant="outlined"
        sx={{ width: '100%' }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
      value={password}
        required
        type='password'
        id="register-password"
        name="password"
        label="Password"
        autoComplete="new-password"
        variant="outlined"
        sx={{ width: '100%' }}
      />
      <TextField
        onChange={(e) => setConfirmPassword(e.target.value)}
      value={confirmPassword}
        required
        type='password'
        id="register-confirm-password"
        name="confirmPassword"
        label="Confirm Password"
        autoComplete="new-password"
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
        {isLoading ? 'Loading...' : 'Register'}
      </button>
      <Box sx={{fontSize: '0.75rem'}}>
        Already have an account? <Link to="/login" style={{ textDecoration: 'underline', color: 'black', }}>Login</Link>
      </Box>
    </Box>
    </form>
  )
}

export default RegisterPage