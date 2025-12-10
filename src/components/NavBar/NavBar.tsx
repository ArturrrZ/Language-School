import React,{useState} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
type Props = {}

function NavBar({}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav>
      <Link to='/' id='nav_primary'>AZ <span id='nav_secondary' >language school</span></Link>
      <div className={`nav-links ${open? 'open' : ''}`} onClickCapture={()=>{setOpen(v=>!v)}}>
        <Link to='/'              className='lTd' id='nav_home'>Home</Link>
        <Link to='/kids'          className='lTd'>Kids</Link>
        <Link to='/consultation'  className='lTd' id='nav_consult'>Free consultation</Link>
        <Link to="/login"         className='lTd'>Login</Link>
      </div>
      <button className="nav-toggle" aria-expanded={open} onClick={()=>{setOpen(v=>!v)}}>=</button>
    </nav>
  )
}

export default NavBar