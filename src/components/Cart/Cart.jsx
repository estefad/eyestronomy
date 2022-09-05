import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
import './Cart.css'

const Cart = () => {
    const {items, removeItem, clear} = useContext(CartContext);
  return (
    <>
    <h3>Carrito</h3>
    {!items.lenght && <div>Tu carrito esta vacio</div> }
    {items &&
    <div className='cartContain'>
        
            {items.map((item, index) => <div className='cart' key={index}> Producto seleccionado: {item.title} - Cantidad: {item.quantity} - Total: {item.total}
            <button className="btn" onClick={()=> removeItem(item.id)}>Eliminar Producto</button>
            </div>)}
       
    </div>
    }
    <button className="btn" onClick={()=> clear(items)}>Vaciar Carrito</button>
    <Link to='/'>
    <button className="btn">Seguir Comprando</button>
    </Link>
    </>
    
  )
}

export default Cart