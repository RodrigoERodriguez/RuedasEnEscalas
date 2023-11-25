//Librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { CartProvider} from './context/CartContex/CartContex';
import Carrito from './components/Carrito/Carrito';

//Clases
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  )

}

export default App;
