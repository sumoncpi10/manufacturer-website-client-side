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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import NotFound from './Pages/NotFound/NotFound';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Testimonials from './Pages/Home/Testimonials';
import Footer from './Pages/Shared/Footer';
import Business from './Pages/Business/Business';
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
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="manageOrder" element={<MyOrders></MyOrders>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path='/testimonials' element={<Testimonials />}></Route>
        <Route path='/business' element={<Business />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
