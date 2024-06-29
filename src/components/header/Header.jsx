import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
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
                        <Link onClick={() => setBurger(p => !p) }   to="/">О компании</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/about">Доставка и оплата</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/">Возврат</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/">Гарантии</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/contact">Контакты</Link>
                        <Link onClick={() => setBurger(p => !p) }  to="/">Блог</Link>
                      </div>
                      <div  className="media-btn">
                        <button><RxHamburgerMenu />
                        Каталог</button>
                      </div>
                      <div className="top__tel">
                          <p>8 (800) 890-46-56</p>
                          <Link onClick={() => setBurger(p => !p) } >Заказать звонок</Link>
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
                  <img src={logo} alt="" />
                  <h2>NORNLIGHT</h2>
                </div>
                <div className="nav__inp">
                   <button><RxHamburgerMenu />
                   Каталог</button>
                   <div className="inp">
                      <input type="text" placeholder="Поиск по товарам" />
                      <CiSearch />
                   </div>
                </div>
                <div className="nav__icons">
                   <span>
                       <Link to={'/'}>
                        <CiHeart />
                          <p>Избранное</p>
                        </Link>
                   </span>
                   <span>
                      <Link to={'/'}>
                        <TbAntennaBars5 />
                        <p>Сравнение</p>
                      </Link>
                   </span>
                   <span>
                      <Link to={'/'}>
                        <CiShoppingCart />  
                        <p>Корзина</p>
                      </Link>
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