import React, { useState } from 'react'
import '../header/Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import Modul from '../modul/Modul'
import { FaArrowRightLong } from "react-icons/fa6";

const Navtop = ({setBurger , burger}) => {

  const [model, setModel] = useState(null)


  const closeDetail = () => {
    setModel(null)
  }


  return (
    <>
      <div className="container">
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
                      <Link onClick={() => setBurger(p => !p) }  to={'/catalog'}>
                        <div  className="media-btn">
                          <button><RxHamburgerMenu />
                          Каталог</button>
                        </div>
                      </Link>
                      <div className="top__tel">
                          <p>8 (800) 890-46-56</p>
                          <NavLink onClick={() => setModel(5)} >Заказать звонок</NavLink>
                      </div>
                          {
                            model ? 
                            <Modul close={closeDetail}>
                                <div className='tel__modul'>
                                   <form action="">
                                   <h1>Заполните, <br />  и мы перезвоним</h1>
                                      <input required  type="text" placeholder="ФИО" />
                                      <input required type="number" placeholder='телефон' />
                                      <button>Весь каталог <FaArrowRightLong />
                                      </button>
                                   </form>
                                </div>
                            </Modul>
                            :
                            <></>
                          }
                    </ul>
                  </div>
              </div>
         </div>
    </>
  )
}

export default Navtop