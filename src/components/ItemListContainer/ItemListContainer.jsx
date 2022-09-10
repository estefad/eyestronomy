import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Spinner from 'react-bootstrap/Spinner';

const productos=[
  {id: 0, title: "Buzo AstroNasa", price: 8000, src: "./buzo.jpeg"},
  {id: 1, title: "Buzo Astro", price: 7500, src: "./buzo4.jpg"},
  {id: 2, title: "Buzo AstroIris", price: 7500, src: "./buzo3.webp"},
  {id: 3, title: "Reme NASA", price: 8000, src: "./reme3.jpg"},
  {id: 4, title: "Reme SpaceX", price: 7500, src: "./reme2.jpg"},
  {id: 5, title: "Pantalon my Universe", price: 7500, src: "./vaqueros-bordado-print-zodiaco-bershka-650x800.jpg"},
  {id: 6, title: "Denim NASA", price: 8000, src: "./nasa-denim-jacket-for-boys.jpg"},
  {id: 7, title: "Tazas Mathmatics", price: 7500, src: "./taza1.jpg"},
  {id: 8, title: "Tazas Galaxy", price: 7500, src: "./Taza-Galaxia-para-café-2.jpg"},
  {id: 9, title: "Tesla Lamparas", price: 8000, src: "./lampara tesla.jpg"},
  {id: 10, title: "Breve Historia del Tiempo", price: 7500, src: "./breve historia.jpeg"},
  {id: 11, title: "Agujeros Negros", price: 7500, src: "./agujeros y pequeños.jpg"}
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
            .catch(error => console.log(error));   
  }, [])

  return (
    <div className='miCard'>
        {products.length?
           <ItemList items={products}/> : <Spinner animation="grow" />} 
    </div>
  )
}

export default ItemListContainer