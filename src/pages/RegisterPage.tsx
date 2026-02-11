import { Box, TextField } from '@mui/material';
import { useState } from 'react'
import { Link,  } from 'react-router-dom';

type Props = {}

function RegisterPage({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  function handleClick() {
    // Perform register logic here (e.g., API call)
    alert(`Perform register logic here`);}
  return (
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
      <button
        onClick={handleClick}
        type='submit'
        style={{ height: '56px', width: '100%', borderRadius: '8px',   }}
        className="pricing-card-button"
      >
        Register
      </button>
      <Box sx={{fontSize: '0.75rem'}}>
        Already have an account? <Link to="/login" style={{ textDecoration: 'underline', color: 'black', }}>Login</Link>
      </Box>
    </Box>
  )
}

export default RegisterPage