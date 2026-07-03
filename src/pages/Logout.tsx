import { Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const { logout, isLoading } = useAuth();
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError('');

        try {
            await logout();
            localStorage.removeItem('token');
            sessionStorage.clear();
            navigate('/login', { replace: true });
        } catch {
            setError('Failed to logout. Please try again.');
        }
    }

    function handleCancel() {
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                className='login-page'
                sx={{
                    width: {
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
                    gap: '20px',
                }}
            >
                <h2>Logout</h2>
                <Box sx={{ width: '100%', textAlign: 'left', color: 'text.primary' }}>
                    Are you sure you want to log out?
                </Box>

                {error ? <Box sx={{ color: 'error.main', width: '100%', fontSize: '0.875rem' }}>{error}</Box> : null}

                <button
                    type='submit'
                    disabled={isLoading}
                    style={{ height: '56px', width: '100%', borderRadius: '8px' }}
                    className='myButton'
                >
                    {isLoading ? 'Logging out...' : 'Yes, log me out'}
                </button>

                <button
                    type='button'
                    onClick={handleCancel}
                    disabled={isLoading}
                    className='secondary-button'
                    style={{
                        height: '56px',
                        width: '100%',
                    }}
                >
                    Cancel
                </button>
            </Box>
        </form>
    );
};

export default Logout;