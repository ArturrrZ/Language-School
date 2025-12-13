import React,{useState} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
function NavBar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav>
      <Link to='/' id='nav_primary'>AZ <span id='nav_secondary'>language school</span></Link>

      {/* Desktop + Mobile links */}
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <Link to='/'              className='lTd' id='nav_home' onClick={closeMenu}>Home</Link>
        <Link to='/kids'          className='lTd' onClick={closeMenu}>Kids</Link>
        <Link to='/consultation'  className='lTd' id='nav_consult' onClick={closeMenu}>Free consultation</Link>
        <Link to='/login'         className='lTd' onClick={closeMenu}>Login</Link>
      </div>

      {/* Mobile toggle */}
      <button 
        className="nav-toggle" 
        aria-expanded={open} 
        aria-label="Toggle menu"
        onClick={() => setOpen(v => !v)}
      >
      <MenuIcon />
      </button>
    </nav>
  )
}

export default NavBar
