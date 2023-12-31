//Librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { CartProvider} from './context/CartContex/CartContex';
import Carrito from './components/Carrito/Carrito';
import Favoritos from './components/Favoritos/Favoritos';
import { FavProvider } from './context/FavContext/FavContext';
import CheckOut from './components/CheckOut/CheckOut';

//Clases
import 'bootstrap/dist/css/bootstrap.min.css';
import Pedidos from './components/Pedidos/Pedidos';

function App() {
  
  return (
    <CartProvider>

      <FavProvider>

        <BrowserRouter>

          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/mispedidos" element={<Pedidos />} />
          </Routes>

        </BrowserRouter>

      </FavProvider>

    </CartProvider>
  )

}

export default App;
