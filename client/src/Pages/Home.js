import React from 'react'
import {Link} from 'react-router-dom'
import HeaderImageOne from '../images/beautify-img-1.jpg'
import HeaderImageTwo from '../images/beautify-img-3.jpg'

import './Home.scss'

const Home = () => {
  return (
    <main>
        <div className="container">

        <nav className='nav'>
             <h1 className='nav__logo'>
                {/* <Link to='/'>.Beautify</Link> */}
                .Beautify
            </h1>
        </nav>
        <header className='header'>
            <div className="header__imgs header-left">
             <img src={HeaderImageOne} alt=""/>
            </div>
            <div className="header__titles">
            <h2 className='header__title'>Everyone is Beautiful, We just make it clear.</h2>
            {/* <h2 className='header__title'></h2>
            <h2 className='header__title'></h2> */}
            <Link to='products' className='btn header__btn'>Shop now</Link>
            </div>
            <div className="header__imgs header-right">
            <img src={HeaderImageTwo} alt="" />
            </div>
            
        </header>
        </div>
    </main>
  )
}

export default Home