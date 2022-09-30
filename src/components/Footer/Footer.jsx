import React from 'react'
import logo from '../../logo.png';
import'./Footer.css';

const Footer = () => {
  return (
    <footer>
       <div className='footContain' >
        <img className='logo foot img' src={logo} alt= 'logo'/>
        <p className='tit'>Eyestronomy - Since 2022</p>
      </div>
    </footer>
  )
    
}

export default Footer