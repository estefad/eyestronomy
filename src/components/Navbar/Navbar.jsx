import React from 'react'
import './Nabvar.css'

const Navbar = () => {
  const navItems=["Contacto","Nosotros", "Preguntas Frecuentes"];
  return (
    <div className='bar'>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className='navbar-brand nav-link' href='"#"'>Productos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {navItems.map((item) =>(
          <li className="nav-item"><a className="nav-link active" aria-current="page" href='"#"'>{item}</a></li>
        ))}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar