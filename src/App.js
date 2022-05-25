import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Products from './Pages/Products/Products';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Login/RequireAuth';
import ProductAdd from './Pages/Products/ProductAdd';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/product/addProduct' element={
          <RequireAuth>
            <ProductAdd></ProductAdd>
          </RequireAuth>}>
        </Route>
        <Route path='/product/:id' element={
          <RequireAuth>
            <PlaceOrder />
          </RequireAuth>}>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
