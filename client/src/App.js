import logo from './logo.svg';
import './App.css';
import Products from './admin/pages/Products';
import CreateProduct from './admin/pages/CreateProduct';
import Landing from './shop/pages/Landing';
import Cart from './shop/pages/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './admin/pages/Dashboard'
import ProductPage from './shop/pages/ProductPage';
function App() {
  return (
    <BrowserRouter>
     <div className="App"> 
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/create-product" element={<CreateProduct/>}/>
        <Route path="/products/:brand" element={<ProductPage />}/>
        <Route path="/products" element={<ProductPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
