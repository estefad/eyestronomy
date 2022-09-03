import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({onAdd}) => {
     
    const [counter, setcounter] = useState(0);
  
    const Incrementar=() =>{
      counter >=6 ?  alert("ALCANZO EL MAX DE STOCK") : counter >=6 ? setcounter(6) : setcounter(counter+1); 
    }

    const Decrementar=() =>{
      counter>0 ? setcounter(counter-1) : setcounter(0);
    }
    
  return (
    <div className='carrito'>
      <div className='boton'>
        <button className='btn' onClick={() => Incrementar() }>+</button>
        <span className='span'>Productos: {counter}</span>
        <button className='btn' onClick={() => Decrementar() }>-</button>
      </div>
        <button onClick={() => onAdd(counter)} className='boton2'>Agregar al carrito </button>
    </div>
  )
}

export default ItemCount