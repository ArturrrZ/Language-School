import { Box, TextField } from '@mui/material'
import {useState} from 'react'
import { Link,  } from 'react-router-dom'

type Props = {}

function LoginPage({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      alert(`Perform login logic here`)
  
      // reset native inputs
      e.currentTarget.reset()
      setEmail('')
      setPassword('')
      // reset controlled checkboxes
      // setTerms(false)
      // setAds(false)
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
        type='email'
        id="login-email"
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
        id="login-password"
        name="password"
        label="Password"
        autoComplete="current-password"
        variant="outlined"
        sx={{ width: '100%' }}
      />
      <Link to="/forgot-password" style={{ alignSelf: 'flex-start', marginBottom: '10px', textDecoration: 'underline', color: 'black', fontSize: '0.75rem' }}>Forgot Password?</Link>
      <button
        type='submit'
        style={{ height: '56px', width: '100%', borderRadius: '8px',   }}
        className="pricing-card-button"
      >
        Login
      </button>
      <Box sx={{fontSize: '0.75rem'}}>
        Don't have an account? <Link to="/register" style={{ textDecoration: 'underline', color: 'black', }}>Register</Link>
      </Box>
    </Box>
    </form>
  )
}

export default LoginPage