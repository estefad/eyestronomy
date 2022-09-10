import React, {useState, useContext} from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import Select from '../Select/Select';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({item}) => {
  const {id, title, price, src, descripcion} = item;
  const {addItem} = useContext(CartContext);//paso el metodo añadir, lo traigo del context
  const [counter, setCounter]=useState(0);
  const [talle, setTalle] = useState([1]);
  const options=[{value:1, text: 'S'},{value:2, text: 'M'},{value:3, text: 'L'},{value:4, text: 'XL'}];

  function optionSelected(value){
    setTalle(value);
  };

function onAdd(count){
  setCounter(count);
  addItem(item, count);
}

  return (
    <Card className='unaCard detalle'>
      <Card.Img className='photo detail' variant="top" src={src}/>
      <Card.Body>
        <Card.Title className='titulo'>{title} {id}</Card.Title>
        <Card.Text className='precio'>${price}</Card.Text>
        <Card.Text className='precio'>{descripcion}</Card.Text>
      </Card.Body>
      <Select
          options={options}
          onSelect={optionSelected}
          defaultOption={talle}/>

      {counter ? 
        <Link to="/cart"><button className='boton2 comprar'>Finalizar Compra</button></Link> :
        <ItemCount onAdd={onAdd}/>
      }
      <div>
          <p className='talle'>Talle: {talle}</p>
      </div>
    </Card>
  )
}

export default ItemDetail