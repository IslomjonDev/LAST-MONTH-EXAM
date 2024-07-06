import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/api/productApi'
import './SingleRout.scss'

/////icons
import { SiOdnoklassniki } from "react-icons/si";
import { FaVk , FaWhatsapp  } from "react-icons/fa";import { FaPhoneVolume } from "react-icons/fa6";
import { BsTelegram } from 'react-icons/bs';
import { FaPlus , FaMinus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../context/slices/CartSlice';


const SingleRout = () => {

    const cart = useSelector(v => v.cart.value);


    useEffect(() => {
        window.scrollTo(0, 0)

    } , [])

    const {id} = useParams()
    const {data , isLoading} = useGetProductByIdQuery(id)

    const dispatch = useDispatch()

  return (
    <>
      <div className="single">
         <div className="container">
            {
                isLoading
                ? 
                <div>
                    <div className="skeleton__wrapper container">
                    {
                        Array(1).fill("").map((_, inx)=>  <div key={inx} className="skeleton__card__single">
                        <div className="skeleton__image__single skeleton__anime"></div>
                        <span>
                            <div className="skeleton__title__single skeleton__anime"></div>
                            <div className="skeleton__title__single skeleton__anime"></div>
                            <div className="skeleton__title__single skeleton__anime"></div>
                            <div className="skeleton__price__single skeleton__anime"></div>
                            <div className="skeleton__desc__single skeleton__anime"></div>
                            <div className="skeleton__desc__single skeleton__anime"></div>
                            <div className="skeleton__desc__single skeleton__anime"></div>
                            <div className="skeleton__btns__single skeleton__anime"></div>
                        </span>
                    </div>)
                    }
                    </div>
                </div>
             :
             <div className="single__content">
                <div className="single__left">
                     <img src={data?.image} alt="" />
                </div>
                <div className="single__right">
                    <h1>{data?.title}</h1>
                    <div className="scot">
                        <div>
                            <p>Scott</p>
                            <p>Артикул : 7655-188</p>
                            <h5>В наличии</h5>
                        </div>
                        <div className="icons">
                            <div className="icon">
                                <SiOdnoklassniki/>
                            </div>
                            <div className="icon">
                                <FaVk/>
                            </div>
                            <div className="icon">
                                <BsTelegram/>
                            </div>
                            <div className="icon">
                                <FaWhatsapp/>
                            </div>
                            <div className="icon">
                                <FaPhoneVolume/>
                            </div>
                        </div>
                    </div>
                        <div className="price">
                            <h1>{data?.price}$</h1>
                            <p>{data?.oldPrice}$</p>
                        </div>
                        <div className="desc">
                            <p>{data?.desc}</p>
                            <div className="btns">
                              {
                                cart.some(cart => cart.id === data.id) ? 

                                <div className="count">
                                    <FaMinus/>
                                    <p>1</p>
                                    <FaPlus/>
                                </div>
                                :
                                <></>
                                }
                                {
                                cart.some(cart => cart.id === data.id) ? 
                                    <></> :
                                    <button  onClick={() => dispatch(addToCart(data))}className='cart__btn'>В корзину</button>

                                }
                      
                                <button  className='heart'><CiHeart /></button>
                            </div>
                        </div>
                </div>
             </div>
            }
             <div className="skils">
                 <div className="skills__title">
                    <h1>Характеристика</h1>
                 </div>
                <div className="skills__content">
                    <div className="skills__card">  
                        <p>Цвет</p>
                        <p>Жёлтый</p>
                    </div>
                    <div className="skills__card">  
                        <p>Год</p>
                        <p>2016</p>
                    </div>
                    <div className="skills__card">  
                        <p>Диаметр колеса</p>
                        <p>27.5</p>
                    </div>
                    <div className="skills__card">  
                        <p>Материал рамы</p>
                        <p>Карбон</p>
                    </div>
                    <div className="skills__card">  
                        <p>Размер</p>
                        <p>L</p>
                    </div>
                    <div className="skills__card">  
                        <p>Страна</p>
                        <p>Швейцария</p>
                    </div>
                    <div className="skills__card">  
                        <p>Производитель</p>
                        <p>Scott</p>
                    </div>
                    <div className="skills__card">  
                        <p>Покрышки</p>
                        <p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p>
                    </div>
                    <div className="skills__card">  
                        <p>Рама</p>
                        <p>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                    </div>
                    <div className="skills__card">  
                        <p>Подседельный Штырь</p>
                        <p>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p>
                    </div>
                    <div className="skills__card">  
                        <p>Седло</p>
                        <p>Ritchey WCS Streem V3 Titanium rails</p>
                    </div>
                    <div className="skills__card">  
                        <p>Вилка</p>
                        <p>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
                    </div>
                </div>
             </div>
         </div>
      </div>
    </>
  )
}

export default SingleRout