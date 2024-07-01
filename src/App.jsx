import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import SingleRout from './pages/singleRout/SingleRout'
import AllProducts from './pages/allProducts/AllProducts'
import Wishlist from './pages/wishlist/Wishlist'
function App() {

  return (
    <>
      <Header/>  
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path='/products/:id' element={<SingleRout/>}/>
         <Route path='/all-products' element={<AllProducts/>}/>
         <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
