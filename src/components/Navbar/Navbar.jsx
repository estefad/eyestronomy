import React, {useContext} from 'react'
import Cartwidget from '../CartWidget/Cartwidget';
import './Nabvar.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
  // const navItems=["Preguntas Frecuentes"];
  const {items}= useContext(CartContext);

  return (
    <div className='bar'>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to={`/`}>
    <h4 className='navbar-brand nav-link' href='"#"'>Home</h4>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">Menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <Link to={`/Cart`}>
      <li>Mi Carrito</li>
    </Link>
      <Link to={`/category/Remeras`}><li>Remeras</li></Link>
      <Link to={`/category/Buzos`}><li>Buzos</li></Link>
      <Link to={`/category/Pantalones`}><li>Pantalones</li></Link>
      <Link to={`/category/Camperas`}><li>Camperas</li></Link>
      </ul>
    </div>
  </div>
</nav>
{items.length && <Cartwidget/>}
    </div>
  )
}

export default Navbar
