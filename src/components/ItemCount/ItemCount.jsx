import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({init=1,stock,onAdd}) => {
     
    const [counter, setcounter] = useState(init);

    const Incrementar=() =>{
      counter >=stock ?  alert("ALCANZO EL MAX DE STOCK") : counter >=stock ? setcounter(stock) : setcounter(counter+1); 
    }

    const Decrementar=() =>{
      counter>stock ? setcounter(counter-1) : setcounter(init);
      
    }
    
  return (
    <div className='carrito'>
      <div className='boton'>
        <button className='btn' onClick={() => Incrementar() }>+</button>
        <span className='span'>Productos: {counter}</span>
        <button className='btn' onClick={() => Decrementar() }>-</button>
      </div>
        <button onClick={() => onAdd(counter)} className='agregar'>Agregar al carrito </button> 
    </div>
  )
}

export default ItemCount