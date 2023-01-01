import React from 'react'
import { Link } from 'react-router-dom';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import './Navbar.scss';
import { useSelector } from 'react-redux';



const Navbar = () => {
  const amountBag = useSelector(state => state.cart.amount);
  return (
    <nav className='navbar'>
        <div className="navbar__wrapper container">
        <Link to='/products'><h1>.Beautify</h1></Link>
        <div className="navbar__icons">
            <Link to='/checkout' className='navbar__icon'>
              <LocalMallOutlinedIcon/>
              <span>{amountBag}</span>
              </Link>
        </div>
    
        </div>
    </nav>
  )
}

export default Navbar