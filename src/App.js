import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter> 
          <header className="App-header">
          <img className='logo' src={logo} alt= 'logo'/>
          <div className='titulo'>
            <h1>EYESTRONOMY</h1>
            <p>Tienda del Multiverso</p>
          </div>
          </header>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
