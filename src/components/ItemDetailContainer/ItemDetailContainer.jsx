import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const products=[
  {id: 0, title: "Buzo AstroNasa", price: 8000, src:"../../../buzo.jpeg", descripcion: "Buzo 100% algodon, con sublimado. Productos de excelente calidad para aficionados al universo"},
  {id: 1, title: "Buzo Astro", price: 7500, src: "../../../buzo4.jpg", descripcion: "Buzo 100% algodon, con sublimado. Productos de excelente calidad para aficionados al universo"},
  {id: 2, title: "Buzo AstroIris", price: 7500, src: "../../../buzo3.webp", descripcion: "Buzo 100% algodon, con sublimado. Productos de excelente calidad para aficionados al universo"},
  {id: 3, title: "Reme NASA", price: 8000, src: "../../../reme3.jpg", descripcion: "Remera 40% algodon, 60% Pol. Productos de excelente calidad para aficionados al universo"},
  {id: 4, title: "Reme SpaceX", price: 7500, src: "../../../reme2.jpg", descripcion: "Remera 40% algodon, 60% Pol. Productos de excelente calidad para aficionados al universo"},
  {id: 5, title: "Pantalon my Universe", price: 7500, src: "../../../vaqueros-bordado-print-zodiaco-bershka-650x800.jpg", descripcion: "Jean trabajado a Mano. Productos de excelente calidad para aficionados al universo"},
  {id: 6, title: "Denim NASA", price: 8000, src: "../../../nasa-denim-jacket-for-boys.jpg", descripcion: "Chaqueta de Denim Estampada. Productos de excelente calidad para aficionados al universo"},
  {id: 7, title: "Tazas Mathmatics", price: 7500, src: "../../../taza1.jpg"},
  {id: 8, title: "Tazas Galaxy", price: 7500, src: "../../../Taza-Galaxia-para-café-2.jpg"},
  {id: 9, title: "Tesla Lamparas", price: 8000, src: "../../../lampara tesla.jpg"},
  {id: 10, title: "Breve Historia del Tiempo", price: 7500, src: "../../../breve historia.jpeg"},
  {id: 11, title: "Agujeros Negros", price: 7500, src: "../../../agujeros y pequeños.jpg"}
];

  const ItemDetailContainer = () => {

  const {id} = useParams();
  const [item, setDatos]= useState([]);

    useEffect(() => {

      new Promise((resolve) =>{
        //simula retraso de red
        setTimeout(() =>{
          resolve(products.find((el) => Number(el.id) === Number(id)));
        }, 2000)
      }).then((data) =>{
        //recibo el producto una vez cargado
        setDatos(data);
      }).catch((err)=> console.log(err))
    }, [id]);

  return (
    <div className='miCard'>
           <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer