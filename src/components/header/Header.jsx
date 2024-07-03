import React, { useState } from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch , CiHeart , CiShoppingCart} from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";


const Header = () => {

  let [burger, setBurger] = useState(false)

  return (
    <>
    <header>
      <div className="container">     
          <div className="navbar">
              <div className="nav__top">
                  <div className="top__list">
                    <ul className={burger ? "show" : ""} >
                      <div className='links'>
                        <NavLink onClick={() => setBurger(p => !p) }   to="/about">О компании</NavLink>
                        <NavLink onClick={() => setBurger(p => !p) }  to="/shipping-payment">Доставка и оплата</NavLink>
                        <NavLink onClick={() => setBurger(p => !p) }  to="/return">Возврат</NavLink>
                        <NavLink onClick={() => setBurger(p => !p) }  to="/garant">Гарантии</NavLink>
                        <NavLink onClick={() => setBurger(p => !p) }  to="/contact">Контакты</NavLink>
                        <NavLink onClick={() => setBurger(p => !p) }  to="/blog">Блог</NavLink>
                      </div>
                      <div  className="media-btn">
                        <button><RxHamburgerMenu />
                        Каталог</button>
                      </div>
                      <div className="top__tel">
                          <p>8 (800) 890-46-56</p>
                          <NavLink onClick={() => setBurger(p => !p) } >Заказать звонок</NavLink>
                      </div>
                    </ul>
                  </div>
              </div>
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
                   <div className="inp">
                      <input type="text" placeholder="Поиск по товарам" />
                      <CiSearch />
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
                      <NavLink to={'/'}>
                        <TbAntennaBars5 />
                        <p>Сравнение</p>
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
                 <input type="text" placeholder='Поиск по товарам' />
                 <CiSearch />
              </div>
          </div>
      </div>
    </header>
    </>
  )
}

export default Header