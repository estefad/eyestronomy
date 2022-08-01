import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img className='logo' src={logo} alt= 'logo'/>
      <div className='titulo'>
        <h1>EYESTRONOMY</h1>
        <p>Tienda del Multiverso</p>
      </div>
      <Navbar/>
      </header>
      
    </div>
  );
}

export default App;
