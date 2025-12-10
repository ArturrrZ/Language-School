import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
type Props = {}

function NavBar({}: Props) {
  return (
    <nav>
      <Link to='/' id='nav_primary'>AZ <span id='nav_secondary'>language school</span></Link>
      <div>
        <Link to='/kids'          className='lTd'>Kids</Link>
        <Link to='/consultation'  className='lTd' id='nav_consult'>Free consultation</Link>
        <Link to="/login"         className='lTd'>Login</Link>
      </div>
    </nav>
  )
}

export default NavBar