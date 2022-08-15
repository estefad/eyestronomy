import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = () => {
     
    const [number, setNumber] = useState(0);
  
    const Incrementar=() =>{
      number >=6 ?  alert("ALCANZO EL MAX DE STOCK") : number >=6 ? setNumber(6) : setNumber(number+1); 
    }

    const Decrementar=() =>{
      number>0 ? setNumber(number-1) : setNumber(0);
    }
    
  return (
    <div className='carrito'>
      <div className='boton'>
        <button className='btn' onClick={() => Incrementar() }>+</button>
        <span className='span'>Productos: {number}</span>
        <button className='btn' onClick={() => Decrementar() }>-</button>
      </div>
        <button className='boton2'>Agregar al carrito </button>
    </div>
  )
}

export default ItemCount