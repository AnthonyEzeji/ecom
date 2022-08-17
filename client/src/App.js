import logo from './logo.svg';
import './App.css';
import Products from './admin/pages/Products';
import CreateProduct from './admin/pages/CreateProduct';
import Landing from './shop/pages/Landing';
import Cart from './shop/pages/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './admin/pages/Dashboard'
import ProductPage from './shop/pages/ProductPage';
import Register from './shop/pages/Register'
import Login from './shop/pages/Login';
import UserPage from './shop/pages/UserPage';
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
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/user/:_id" element={<UserPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
