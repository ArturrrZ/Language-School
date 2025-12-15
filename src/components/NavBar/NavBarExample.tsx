import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

type Props = {}

function NavBar({}: Props) {
  const [open, setOpen] = useState(false)

  // Close mobile menu when viewport becomes >= breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      if ((e as MediaQueryList).matches) setOpen(false)
    }
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else mq.removeListener(handler)
    }
  }, [])

  return (
    <nav className="navbar">
      <Link to='/' id='nav_primary'>AZ <span id='nav_secondary'>language school</span></Link>

      {/* hamburger button - visible on small screens */}
      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(v => !v)}
      >
        <span className="hamburger" />
      </button>

      {/* links - layout changes via CSS media queries */}
      <div className={`nav-links ${open ? 'open' : ''}`} role="menu">
        <Link to='/kids' className='lTd' role="menuitem">Kids</Link>
        <Link to='/consultation' className='lTd' id='nav_consult' role="menuitem">Free consultation</Link>
        <Link to="/login" className='lTd' role="menuitem">Login</Link>
      </div>
    </nav>
  )
}

export default NavBar