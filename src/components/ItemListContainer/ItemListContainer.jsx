import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Spinner from 'react-bootstrap/Spinner';
import db from '../../services'
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {

  const [products, setProducts]= useState([]);

  const {category} = useParams();

  useEffect(() => {
    const getData = async()=>{
      const data= collection(db, 'products')
      const col=await getDocs(data)
      const res= col.docs.map((doc)=> doc={id:doc.id, ...doc.data()})
      const resFinal = category ? res.filter(e=> e.category === category) : res
      setProducts(resFinal)
    }
    getData()
  
    return () => {
      
    }
  }, [category])

  return (
    <main>
      <div className='miCard'>
        {products.length?
           <ItemList items={products}/> : <Spinner animation="grow" />} 
      </div>
    </main>
    
  )
}

export default ItemListContainer