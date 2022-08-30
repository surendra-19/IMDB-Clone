import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Searchbar from '../UI/Searchbar'
// import Watchlist from '../UI/Watchlist'

function Navbar() {
  return (
    <div className='p-4 sm:space-y-4' >
      <div className='flex flex-wrap justify-between items-center max-w-7xl mx-auto  '>
        <a href='/'><img src={logo} alt='logo' className='h-16 ' /></a>
        <Searchbar/>
        <div className='space-x-4 '>
          <Link to ='/watchlist'>Watchlist</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar