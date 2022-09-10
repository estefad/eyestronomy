import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
import './Cart.css'

const Cart = () => {
    const {items, removeItem, clear, total} = useContext(CartContext);

  return (
    <>
    <h3 className='carrito'>CARRITO</h3>
    {!items.length && <p className='carVacio'>Tu carrito esta vacio</p> }
    {items &&
    <div className='cartContain'>
            {items.map((item, index) => <div className='cart' key={index}> Producto seleccionado: {item.title} - Cantidad: {item.quantity} 
            <button className="btn" onClick={()=> removeItem(item.quantity)}>Eliminar Producto</button>
            </div>)}
            <div>
      </div>
    </div>
    }
    <div>Total de tu Compra: ${total()}</div>
    <button className="btn clear" onClick={()=> clear(items)}>Vaciar Carrito</button>
    <Link to='/'>
    <button className="btn">Seguir Comprando</button>
    </Link>
    <button className="btn">Finalizar compra</button>
    </>
    
  )
}

export default Cart