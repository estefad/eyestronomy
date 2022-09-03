import React from 'react'
import Cartwidget from '../CartWidget/Cartwidget';
import './Nabvar.css'
import {Link} from 'react-router-dom'
// import config from './config.json'
// import { Nav } from 'react-bootstrap';

const Navbar = () => {
  const navItems=["Nosotros", "Preguntas Frecuentes"];

  return (
    <div className='bar'>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to={`/`}>
    <a className='navbar-brand nav-link' href='"#"'>Home</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">Menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <Link to={`/Cart`}>
      <li><a className='nav-link' href='"#"'>Carrito</a></li>
    </Link>
        {navItems.map((item, index) =>(
          <li key={index} className="nav-item"><a className="nav-link active" aria-current="page" href='"#"'>{item}</a></li>
        ))}
      </ul>
    </div>
  </div>
</nav>
<Cartwidget/>
    </div>
  )
}

export default Navbar

 /* <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/productos"}>Productos</NavLink>
    {
      config.routes.map(ruta, index)=>(
        <NavLink key={}
      )
    } */