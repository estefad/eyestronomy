import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'

const Cart = () => {
    const {items, removeItem} = useContext(CartContext);
  return (
    <>
    <h3>Carrito</h3>
    {!items.lenght && <div>Tu carrito esta vacio</div> }
    {items &&
    <div>
        <ul>
            {items.map((item, index) => <li key={index}>Producto seleccionado: {item.title} cantidad: {item.quantity} Total: {item.total}
            <button className="btn" onClick={()=> removeItem(item.id)}>Eliminar Producto</button>
            </li>)}
        </ul>
    </div>
    }
    <Link to='/'>
    <button className="btn">Seguir Comprando</button>
    </Link>
    </>
    
  )
}

export default Cart