import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

const Item = (item) => {
  return (
    <Card className='unaCard' style={{ width: '15rem'}}>
      <Card.Img className='photo' variant="top" src={item.src} />
      <Card.Body>
        <Card.Title className='titulo'>{item.title}</Card.Title>
        <Card.Text className='precio'>${item.price}, {item.id}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default Item