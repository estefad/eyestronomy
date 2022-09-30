import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


  const ItemDetailContainer = () => {

  const {id} = useParams()
  const [item, setDatos]= useState([]);

    useEffect(() => {
      const getData = async()=>{

        try {
          const data= collection(db, 'products')
          const col=await getDocs(data)
          const res= col.docs.map((doc)=> doc={id:doc.id, ...doc.data()})
          const resFinal = res.find((e)=>e.id === id)
          setDatos(resFinal)
          
        } catch (error) {
          console.log(error)
        }
        
      }
      getData()
    
      return () => {
        
      }
    }, [id])
    

  return (
    <div className='miCard'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer