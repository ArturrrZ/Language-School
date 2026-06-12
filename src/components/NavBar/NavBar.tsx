import { useState, useEffect } from 'react'
import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const closeMenu = (e: React.MouseEvent) => {
    setOpen(false);
    let closestLink = (e.target as HTMLElement).closest('a');
    if(closestLink){
      let href = closestLink.getAttribute('href');
      if (location.pathname === href ){window.scrollTo({ top: 0, behavior: 'smooth' })}
      
    }
    
  }

  // Close menu on click outside when open
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('nav')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true); // capture phase
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, [open]);
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {

    await logout();
    setOpen(false);
    navigate('/login');
    }
  };

  return (
    <nav>
      <div className="nav-inner">
        <Link to='/' id='nav_primary' onClick={closeMenu}>AZ <span id='nav_secondary'>language school</span></Link>

        {/* Desktop + Mobile links */}
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link to='/'              className='lTd' id='nav_home' onClick={closeMenu}>Home</Link>
          <Link to='/kids'          className='lTd' onClick={closeMenu}>Kids</Link>
          <Link to='/consultation'  className='lTd' id='nav_consult' onClick={closeMenu}>Free consultation</Link>
          {!isAuthenticated ? (
            <>
              <Link to='/login' className='lTd' onClick={closeMenu}>Login</Link>
              <Link to='/register' className='lTd' onClick={closeMenu}>Register</Link>
            </>
          ) : (
            <>
              <span className='lTd' style={{ cursor: 'default' }}>
                {user?.username}{user?.is_teacher ? ' (Teacher)' : ''}
              </span>
              <a type='button' className='lTd' onClick={handleLogout} style={{ background: 'none', border: 'none' }}>
                Logout
              </a>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button 
          className="nav-toggle" 
          aria-expanded={open} 
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
      <MenuIcon />
      </button>
      </div>
    </nav>
  )
}

export default NavBar
