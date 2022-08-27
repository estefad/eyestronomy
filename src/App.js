import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
