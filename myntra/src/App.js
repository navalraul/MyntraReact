// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AllProduct from './components/AllProduct/AllProduct';
import AddProduct from './components/AddProduct/AddProduct';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/single/:id' element={<SingleProduct />} />
        <Route exact path='/add-product' element={<AddProduct />} />
        <Route exact path='/all-product' element={<AllProduct />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/' element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
