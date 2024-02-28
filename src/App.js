
import './App.css';
import { Box } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <Box>
      <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/react-cart' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Router>
      </ShopContextProvider>
    </Box>
  );
}

export default App;
