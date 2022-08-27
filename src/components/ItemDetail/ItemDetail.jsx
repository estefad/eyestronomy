import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = (item) => {
  const {id, src, title, price, descripcion} = item;
  return (
    <Card className='unaCard'>
      <Card.Img className='photo' variant="top" src={src} />
      <Card.Body>
        <Card.Title className='titulo'>{title} {id}</Card.Title>
        <Card.Text className='precio'>${price}</Card.Text>
        <Card.Text className='precio'>${descripcion}</Card.Text>
      </Card.Body>
      <ItemCount/>
    </Card>
  )
}

export default ItemDetail