import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const products=[
  {id: 0, title: "Buzo AstroNasa", price: 8000, src: "./buzo 1.jpeg", descripcion: "Buzo 100% algodon, con sublimado. Productos de excelente calidad para aficionados al universo"}];

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
        {products.length?
           <ItemDetail item={item}/> : <h1>Cargando..</h1>
        } 
    </div>
  )
}

export default ItemDetailContainer