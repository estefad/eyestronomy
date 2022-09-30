import React, {useState, createContext} from 'react'

export const CartContext = createContext();
export function CartProvider({children}) {

    const [items, setItems]=useState([]);//el estado para guardar los items seleccionados
                                        //en un array nuevo
    function addItem(item, quantity){
        //console.log({...item, quantity});

        if(isInCart(item.id)){
            let aux= item; //copio array
            let itemId = aux.indexOf((e) => e.id === item.id);//traigo el i
            aux[itemId].quantity += quantity;//que aumente la cantidad y la sume a la ya cargada
            setItems([...aux]);//se carga en el new array
        }else{
            setItems([...items, {...item, quantity}]);
        }
    }

    function removeItem(itemId){
        setItems(items.filter((producto) => producto.id !== itemId));
    }

    function clear(){
        setItems([]);
    }

    function isInCart(itemId){
        
        return items.find((e) =>e.id === itemId);
    }

    const total = ()=> {
        let total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        return total;
    }

  return ( 
    <CartContext.Provider value={{items, addItem, removeItem, clear, total}}>
        {children}
    </CartContext.Provider>
  )
}



