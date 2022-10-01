import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
import './Cart.css'

const Cart = () => {
    const {items, removeItem, clear, total} = useContext(CartContext);

  return (
    <>
    <div className='contain'>
    <h3 className='carrito'>CARRITO</h3>
    {!items.length && <p className='carVacio'>Tu carrito esta vacio</p> }
    {items &&
    <div className='cartContain'>
            {items.map((item, index) => <div className='cart' key={index}> <img className='mini' src={item.src} alt="" /> <div>Producto seleccionado: {item.title} - Cantidad: {item.quantity} - Precio: ${item.price}</div>
            <button className="btn remove" onClick={()=> removeItem(item.id)}>Eliminar Producto</button>
            </div>)}
            <div>
      </div>
    </div>
    }
    
    <div className='total'>Total de tu Compra: ${total()}</div>
    <button className="btn clear" onClick={()=> clear(items)}>Vaciar Carrito</button>
    <Link to='/'>
    <button className="btn seguir">Seguir Comprando</button>
    </Link>
    {items.length ? <Link to='/checkout'><button className="btn clear2">Finalizar compra</button></Link> : 
    <span className='carga'>Carga tus productos para finalizar tu compra</span> }
    </div>
    
    
    </>
    
  )
}

export default Cart