import React, {useState, useContext} from 'react'
//import Cart from '../Cart/Cart';
import './Checkout.css'
import {collection, addDoc} from 'firebase/firestore'
import db from '../../services'
import { CartContext } from '../Context/CartContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Spinner from 'react-bootstrap/Spinner';

const Checkout = () => {

    const {total, items, removeItem} = useContext(CartContext);
    const MySwal = withReactContent(Swal);
    const [carga, setCarga] = useState(false);

    const [form, setForm] = useState({
        buyer:{
            'nombre':"",
            'email':"",
            'telefono':"",
            'direccion':"",
		},
		precio: total(),
    	items: {items},
    }); 

    const {buyer: {nombre, email, telefono, direccion},} = form;
  
     const handleChange= (e)=>{
        const {name, value} = e.target;
        //copia del form para no perder los valores
        setForm({
            ...form,
            buyer:{
                ...form.buyer,//copia para mantener los campos de buyer
                [name]: value//a cada campo le asigno su valor
            },
        });
     };

     //funcion guaradar en fire
    const setFirebase= async (form)=>{
        if(nombre === "" || email === "" || telefono === "" || direccion === "" ){
            setCarga(false)
            MySwal.fire({
                title: <strong>ERROR!</strong>,
                html: <h3>Porfavor, completa todos los campos</h3>,
                icon: 'error'
            })
        }else{
            try{
                setCarga(true)
                const col =collection(db, "ordenes")//genero nueva col en fire
                await addDoc(col, form)
                .then(({id}) =>{
                    MySwal.fire({
                        title: <strong>Tu Compra fue realizada</strong>,
                        html: <h3>Guarda tu ornden Nº: {id}</h3>,
                        icon: 'success',
                        timer:5000
                    }).then(removeItem())
                    .then(function(){window.location.href='/'})
                })
            } catch(error){
                    console.log(error)
            }
        }
}
  
    return (
    <>
    {carga === true ? (<Spinner animation="grow"/>):
        (<form className='contacto'>
            <div><h4 className='datos'>Completa tus datos para finalizar tu compra</h4></div>
            <input className='input' type="text" name="nombre" onChange={handleChange} value={nombre} placeholder='Nombre' required/>
            <input className='input' type="email" name="email" onChange={handleChange} value={email} placeholder='Email' required/>
            <input className='input'  type="phone"  name="telefono" onChange={handleChange} value={telefono} placeholder='Telefono' required/>
            <input className='input'  type="text"  name="direccion" onChange={handleChange} value={direccion} placeholder='Direccion' required/> 

            <div className='tot'>Total de su compra: ${total()}</div>
            <button className="btn submit" type='button' onClick={()=> setFirebase(form)}>Enviar Compra</button>
        </form>) 
    }
        
    </>
  );
}

export default Checkout
