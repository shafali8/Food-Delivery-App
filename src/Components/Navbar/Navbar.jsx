import './Navbar.css'
import {assets} from '../assets/assets.js'
import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext.jsx'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <nav className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
     <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=> setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
       <div className="navbar-right">
        <img src={assets.search_icon} alt="Search bar" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="Cart"/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
