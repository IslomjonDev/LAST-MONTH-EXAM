import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch , CiHeart , CiShoppingCart ,CiUser} from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { useGetProductsQuery } from '../../context/api/productApi';

import Navtop from '../navtop/Navtop';


const Header = () => {

  let {pathname} = useLocation()

  if(pathname.includes('login') || pathname.includes('admin') || pathname.includes('register')){
      return <></>
  }

  useEffect(() => {} , [])

  let [burger, setBurger] = useState(false)

  const [searchValue , setSearchValue] = useState("")
  const [filterData, setFilterData] = useState(null)


  const {data} = useGetProductsQuery()

  useEffect(() => {
      if(data){
          setFilterData(data?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase())))
      }
  } , [searchValue])



  const handleClear = () => {
    setSearchValue("")
  }


  const searchItems = filterData?.map(product => (
    <Link onClick={() => handleClear()} key={product.id} to={`/products/${product.id}`}>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
    </Link>
  ))
  


  return (
    <>
  <Navtop burger={burger} setBurger={setBurger}/>
    <header>
      <div className="container">     
          <div className="navbar">
              <div className="nav__bottom">
                <div className="nav__logo">
                  <div>
                    <button onClick={() => setBurger(p => !p) } className="burger">
                     <RxHamburgerMenu/>
                    </button>
                  </div>
                  <NavLink  to={'/'} onClick={() => setBurger()} >
                      <img src={logo} alt="" />
                      <h2>NORNLIGHT</h2>
                  </NavLink>
                </div>
                <div className="nav__inp">
                  <Link to={'/catalog'}>
                    <button><RxHamburgerMenu />
                    Каталог</button>
                  </Link>
                  <div className="inp__content">
                    <div className="inp">
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Поиск по товарам" />
                        <CiSearch />
                    </div>
                        {
                          searchValue.trim() ?
                         <div className="inp__modul">
                          {
                            searchItems
                          }
                         </div>
                          :
                          <></>
                        }
                  </div>
                </div>
                <div className="nav__icons">
                   <span>
                       <NavLink to={'/wishlist'}>
                        <CiHeart />
                          <p>Избранное</p>
                        </NavLink>
                   </span>
                   <span>
                      <NavLink to={'/register'}>
                        <CiUser />
                        <p>войти</p>
                      </NavLink>
                   </span>
                   <span>
                      <NavLink to={'/cart'}>
                        <CiShoppingCart />  
                        <p>Корзина</p>
                      </NavLink>
                   </span>
                </div>
              </div>
                <div className="media__inp">
                <div className="inp__content">
                  <span>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Поиск по товарам' />
                    <CiSearch />
                  </span>
                  {
                        searchValue.trim() ?
                      <div className="inp__modul">
                        {
                          searchItems
                        }
                      </div>
                        :
                      <></>
                      }
                  </div>
              </div>
          </div>
      </div>
    </header>
    </>
  )
}

export default Header