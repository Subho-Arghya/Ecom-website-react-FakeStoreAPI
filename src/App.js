
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from "./pages/Register"
import './App.css';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
