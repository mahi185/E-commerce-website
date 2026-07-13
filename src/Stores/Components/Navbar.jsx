import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContex'

const Navbar = () => {
    const {cartItems}=useCart()
  return (
    <div className='navbar-section'>
    <div className="navSection">
        <Link to='/' className='custom-link'>
        <div className="title">
            <h2>E-Mart</h2>
        </div>
        </Link>
        <div className="search">
            <input type="text" id='search' name='search' placeholder='search...' />
        </div>
        <div className="user">
            SignIN/SignUP
        </div>
        <Link to='/cart'>
        <div className="cart">cart
            <span>
                {cartItems.length}
            </span>
        </div>
        </Link>
        </div>
        <div className='subMenu'>
       <ul>
        <Link to='/mobile' className='custom-link'>
        <li>Mobiles</li>
        </Link>

        <Link to='/computer' className='custom-link'>
        <li>Computers</li>
        </Link>

        <Link to='/fridge' className='custom-link'>
        <li>Fridge</li>
        </Link>

        <Link to='/furniture' className='custom-link'>
         <li>Furniture</li>
        </Link>

        <Link to='/kitchen' className='custom-link'>
        <li>Kitchen</li>
        </Link>

        <Link to='/men' className='custom-link'>
        <li>Men</li>
        </Link>

        <Link to='/tv' className='custom-link'>
        <li>Tv</li>
        </Link>

        <Link to='/woman' className='custom-link'>
         <li>Woman</li>
        </Link>

        <Link to='/promobile' className='custom-link'>
        <li>Pro-mobiles</li>
        </Link>

        <Link to='/speaker' className='custom-link'>
         <li >Speaker</li>
        </Link>

        <Link to='/watch' className='custom-link'>
        <li>Watch</li>
        </Link>

        <Link to='/ac' className='custom-link'>
        <li>Ac</li>
        </Link>
        <Link to='/book' className='custom-link'>
        <li>Books</li>
        </Link>

       </ul>
        </div>
    </div>
  )
}

export default Navbar
