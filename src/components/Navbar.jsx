import React, { useContext } from 'react'
import { Link } from 'react-router'
import { CartContext } from '../Provider/Context'

const Navbar = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl">FlagshipFaceOff</Link>
  </div>

  <div className="navbar-center hidden lg:flex">  
  </div>
  
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <li className='relative'>
        <Link to={'/cart'}>Cart</Link>
        <p>{cart.length}</p>
      </li>
      <li>
        <Link to={'/favorites'}>Favorites</Link>
      </li>
    
    </ul>
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default Navbar