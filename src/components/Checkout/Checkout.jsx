import React, {useState} from 'react'
//import Cart from '../Cart/Cart';

const Checkout = ({total, compra}) => {
   
    const [form, setForm] = useState({
        
        buyer:{
            'nombre':"",
            'email':"",
            'telefono':"",
            'direccion':"",
		},
		total: total,
		items: compra,
    }); 

    const {
        buyer: {nombre, email, telefono, direccion},
    } = form;
    
    // const onSubmit =(e)=>{

    // }
  
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
  
    return (
    <>
         <div>
            <form>
                <input type="text" name="nombre" onChange={handleChange} value={nombre}/>
                <label htmlFor="nombre">Nombre</label>


                <input type="email" name="email" onChange={handleChange} value={email}/>
                <label htmlFor="mail">E-mail</label>

                <input type="phone"  name="telefono" onChange={handleChange} value={telefono}/>
                <label htmlFor="telefono">Telefono</label>

                <input type="text"  name="direccion" onChange={handleChange} value={direccion} />
                <label htmlFor="direccion">Direccion</label>

                <button className="btn" onClick={()=> setForm(form)}>Enviar Compra</button>
            </form>
        </div>
    </>
  )
}

export default Checkout


//orden generica
/*
const sendOrder=()=>{
    const order={
        buyer:{}
        items:[{}
        
        ] date.now()
    }
}


const generaTicket= async({datos})=>{
    setCargar(true)
    try{

    }
}

const miData
//funcion guaradar en fire
const setFirebase=(orden)=>{
    try{
        const col =collection(db, "ordenes")//genero nueva col en fire
        const generarOrden= await addDoc(col, orden) //addDoc agrega doc a firebase
        console.log(generarOrden.id)
    } catch(error){

    }
}

button onclick= setFirebase(data)
*/