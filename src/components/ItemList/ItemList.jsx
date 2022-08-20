import React from 'react'
import './ItemList.css'
import Item from './Item'

const ItemList = ({items})=> {
  return (
    <>
        {items.map((item, index)=>
            <Item key={index} id={item.id} title={item.title} price={item.price} src={item.src}/>
        )}
    </>
    
  );
}

export default ItemList