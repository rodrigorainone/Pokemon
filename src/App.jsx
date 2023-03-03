import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Reloj from './components/Reloj/Reloj';
import Pokedex from './components/Pokedex/Pokedex';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
         
        <Routes>
          <Route path='/Reloj' element={<Reloj/>}></Route>
          <Route path='/Pokedex' element={<Pokedex/>}></Route>
          

          </Routes>
        
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
