import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Pages/Home'
import Products from './Pages/Products/Products'
import Product from './Pages/Product/Product'
import Checkout from './Pages/Checkout/Checkout'
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import './App.scss'
function App() {

   const SharedLayout = ()=> {
      return (
        <>
      <Navbar/>
      <Outlet/>
      </>
      )
  }
  
  return (
  //  <Home/>


  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='products' element={<SharedLayout/>}>
     <Route index element={<Products/>}/>
    </Route>
    <Route path='product/:article' element={<SharedLayout/>} >
     <Route index element={<Product/>}/>
    </Route>
    <Route path='checkout' element={<SharedLayout/>}>
     <Route index element={<Checkout/>}/>
    </Route>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>

  );
}

export default App;
