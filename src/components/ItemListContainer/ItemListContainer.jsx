import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'

const productos=[
  {id: 0, modelo: "Buzo AstroNasa", precio: 8000, stock: 3, img: "../../buzo 1.jpeg"},
  {id: 1, modelo: "Buzo Astro", precio: 7500, stock: 5, img: "../../buzo4.jpg"},
  {id: 2, modelo: "Buzo AstroIris", precio: 7500, stock: 7, img: "../../buzo3.webp"}
];


const ItemListContainer = () => {

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
    <div>
        {products.length ?
         <ItemList products={productos}/> : 
         <h1>Cargando..</h1>
        }
    </div>
  )
}

export default ItemListContainer