import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import SingleRout from './pages/singleRout/SingleRout'
import AllProducts from './pages/allProducts/AllProducts'
import Wishlist from './pages/wishlist/Wishlist'
import About from './pages/about/About'
import ShippingAndPayment from './pages/shippingAndPayment/ShippingAndPayment'
import Return from './pages/return/Return'
import Garant from './pages/garant/Garant'
import Contact from './pages/contact/Contact'
import BlogPage from './pages/blogpage/BlogPage'
import KatalogPage from './pages/katalogPage/KatalogPage'
import NotFound from './pages/not-found/NotFound'
import Cart from './pages/cart/Cart'
import Admin from './pages/admin/Admin'
import Login from './pages/login/Login'
import CreateProduct from './pages/admin/CreateProduct'
import ManageProduct from './pages/admin/ManageProduct'
import CreateCategory from './pages/admin/CreateCategory'
import ManageCategory from './pages/admin/ManageCategory'
function App() {

  return (
    <>
      <Header/>  
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path='/products/:id' element={<SingleRout/>}/>
         <Route path='/all-products' element={<AllProducts/>}/>
         <Route path='/wishlist' element={<Wishlist/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/shipping-payment' element={<ShippingAndPayment/>}/>
         <Route path='/return' element={<Return/>}/>
         <Route path='/garant' element={<Garant/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/blog' element={<BlogPage/>}/>
         <Route path='/catalog' element={<KatalogPage/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/admin' element={<Admin/>}>
            <Route path='create-product' element={<CreateProduct/>}></Route>
            <Route path='manage-product' element={<ManageProduct/>}></Route>
            <Route path='create-category' element={<CreateCategory/>}></Route>
            <Route path='manage-category' element={<ManageCategory/>}></Route>
         </Route>
         <Route path='/login' element={<Login/>}/>
         <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
