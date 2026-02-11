import { Box, TextField } from '@mui/material';
import { useState } from 'react'
import {  Link } from 'react-router-dom';

type Props = {}

function ForgotPasswordPage({}: Props) {
  const [email, setEmail] = useState('');
  function handleClick() {
    // Perform forgot password logic here (e.g., API call)
    alert(`Perform forgot password logic here`);}
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      alert(`Perform forgot password logic here`)
  
      // reset native inputs
      e.currentTarget.reset()
      setEmail('')
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
      <h2>Forgot Password</h2>
      <TextField
        required
        type='email'
        id="forgot-password-email"
        name="email"
        label="Email"
        autoComplete="email"
        variant="outlined"
        sx={{ width: '100%' }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <button
        type='submit'
        style={{ height: '56px', width: '100%', borderRadius: '8px',   }}
        className="pricing-card-button"
      >
        Forgot password
      </button>
      <Box sx={{fontSize: '0.75rem'}}>
        Already have an account? <Link to="/login" style={{ textDecoration: 'underline', color: 'black', }}>Login</Link>
      </Box>
    </Box>
    </form>
  )
}

export default ForgotPasswordPage