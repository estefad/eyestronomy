import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
    const {items} = useContext(CartContext);
  return (
    <>
    <div>Carrito</div>
    {!!items?.length && <div>Tu carrito esta vacio</div>}
        {items?.lenght &&
        <div>
            <ul>
            {items.map((item, index) => <li key={index}>Producto seleccionado: {item.tittle} cantidad: {item.quantity} Total: {item.total}</li>)}
            </ul>
        </div>
        }
    </>
    
  )
}

export default Cart