import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (item) => {
  return (
    <Card className='unaCard'>
      <Link to={`/item/${item.id}`}>
      <Card.Img className='photo' variant="top" src={item.src} />
      </Link>
      <Card.Body>
        <Card.Title className='titulo'>{item.title}</Card.Title>
        <Card.Text className='precio'>${item.price}</Card.Text>
        <Link to={`/item/${item.id}`}>
        <Button variant="primary">Mas detalles</Button>
        </Link>
        
      </Card.Body>
    </Card>
  )
}

export default Item