import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Reloj from './components/Reloj/Reloj';
import Pokedex from './components/Pokedex/Pokedex';
import { ModoDarkProvider } from './Context/Context';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
      <ModoDarkProvider>
        <NavBar/>
         
        <Routes>
          <Route  path='/' element={<ItemListContainer/>}></Route>
          <Route path='/Reloj' element={<Reloj/>}></Route>
          <Route path='/Pokedex' element={<Pokedex/>}></Route>
          

          </Routes>
        
        <Footer/>
      </ModoDarkProvider>
      </BrowserRouter>
      
    </>
  );
}

export default App;
