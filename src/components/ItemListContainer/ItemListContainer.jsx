import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const productos=[
  {id: 0, title: "Buzo AstroNasa", price: 8000, src: "./buzo 1.jpeg"},
  {id: 1, title: "Buzo Astro", price: 7500, src: "./buzo4.jpg"},
  {id: 2, title: "Buzo AstroIris", price: 7500, src: "./buzo3.webp"}
];


const ItemListContainer = ({items}) => {

  const [products, setProducts]= useState([]);

  useEffect(()=>{

    const tarea= new Promise((resolve, rejected)=>{

      setTimeout(()=>{
        resolve(productos);
      },2000);
    })
      tarea.then((data)=>{setProducts(data)})
            .catch(error => console.log(error))
      
      
  }, [])

  return (
    <div className='miCard'>
         {/* <span>{props.greeting}</span>  */}
        {products.length?
           <ItemList items={products}/> : <h1>Cargando..</h1>
        }
        
    </div>
  )
}

export default ItemListContainer