import { Alert, Box, TextField, Typography } from '@mui/material';
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { confirmPasswordReset, requestPasswordReset } from '../api/auth';
import { getErrorMessage } from '../utils/errorMessage';
import { useAuth } from '../context/AuthContext';

type Props = {}

function ForgotPasswordPage({}: Props) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const uid = params.get('uid') ?? '';
  const token = params.get('token') ?? '';
  const isResetMode = Boolean(uid && token);

  const [email, setEmail] = useState(user?.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      if (!isResetMode) {
        const response = await requestPasswordReset(email);
        setSuccessMessage(response.detail);
      } else {
        if (newPassword !== confirmPassword) {
          setErrorMessage('Passwords do not match.');
          return;
        }
        const response = await confirmPasswordReset({ uid, token, new_password: newPassword });
        setSuccessMessage(response.detail);
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 1200);
      }
    } catch (error) {
      setErrorMessage(getErrorMessage(error, 'Request failed. Please try again.'));
    } finally {
      setIsLoading(false);
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
      <h2>{isResetMode ? 'Set New Password' : 'Forgot Password'}</h2>
      {errorMessage ? <Alert severity='error' sx={{ width: '100%' }}>{errorMessage}</Alert> : null}
      {successMessage ? <Alert severity='success' sx={{ width: '100%' }}>{successMessage}</Alert> : null}

      {!isResetMode ? (
        <>
          {isAuthenticated ? (
            <Typography sx={{ width: '100%', color: 'text.secondary', fontSize: '0.875rem' }}>
              Signed in as: <strong>{user?.email || '—'}</strong>
            </Typography>
          ) : null}
          <TextField
            required
            type='email'
            id='forgot-password-email'
            name='email'
            label='Email'
            autoComplete='email'
            variant='outlined'
            sx={{ width: '100%' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
      ) : (
        <>
          <TextField
            required
            type='password'
            id="forgot-password-new-password"
            name="newPassword"
            label="New password"
            autoComplete="new-password"
            variant="outlined"
            sx={{ width: '100%' }}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            required
            type='password'
            id="forgot-password-confirm-password"
            name="confirmPassword"
            label="Confirm new password"
            autoComplete="new-password"
            variant="outlined"
            sx={{ width: '100%' }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </>
      )}
      
      <button
        type='submit'
        disabled={isLoading}
        style={{ height: '56px', width: '100%', borderRadius: '8px',   }}
        className="pricing-card-button"
      >
        {isLoading ? (isResetMode ? 'Saving...' : 'Sending...') : (isResetMode ? 'Save password' : 'Send reset link')}
      </button>
      {!isAuthenticated ? (
        <Box sx={{fontSize: '0.75rem'}}>
          Already have an account? <Link to="/login" style={{ textDecoration: 'underline', color: 'black', }}>Login</Link>
        </Box>
      ) : null}
    </Box>
    </form>
  )
}

export default ForgotPasswordPage