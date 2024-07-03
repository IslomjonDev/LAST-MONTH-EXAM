import React from 'react'
import './KatalogPage.scss'
import { Link } from 'react-router-dom'
import {  MdKeyboardArrowRight} from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa6'
import Brends from '../../components/brends/Brends'
import Blog from '../../components/blog/Blog'

///images

import kat1 from '../../assets/kat1.png'
import kat2 from '../../assets/kat2.png'
import kat from '../../assets/kat.png'
import kat4 from '../../assets/kat4.png'
import kat5 from '../../assets/kat5.png'
import kat6 from '../../assets/kat6.png'
import kat7 from '../../assets/kat7.png'
import kat8 from '../../assets/kat8.png'
import kat9 from '../../assets/kat9.png'
import kat10 from '../../assets/kat10.png'
import kat11 from '../../assets/kat11.png'

const KatalogPage = () => {
  return (
    <>
      <div className="katalog__page">
         <div className="container">
            <div className="catalog__title">
                <Link to={'/'}>Главная</Link>
                <MdKeyboardArrowRight/>
                <p>Каталог</p>
            </div>
            <div className="catalog__content">
                <h1>Каталог</h1>
               <div className="catalog__cards">
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Люстры</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                              <h3>Люстры</h3>
                               <img src={kat1} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Светильники</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                               <h3>Светильники</h3>
                               <img src={kat2} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Бра</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                                <h3>Бра</h3>
                                 <img src={kat} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Торшеры</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                                <h3>Торшеры</h3>
                               <img src={kat4} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Настольные лампы</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                           <div className="card__right">
                               <h3>Настольные лампы</h3>
                               <img src={kat5} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                     <div className="katalog__card">
                           <div className="card__left">
                                <h3>Споты</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                           </div>
                          <div className="card__right">
                                <h3>Споты</h3>
                               <img src={kat6} alt="" />
                               <p>От 540₽ <FaArrowRight /></p>
                           </div>
                     </div>
                    <div className="katalog__card">
                        <div className="card__left">
                            <h3>Трековые светильники</h3>
                            <p>От 540₽ <FaArrowRight /></p>
                        </div>
                        <div className="card__right">
                            <h3>Трековые светильники</h3>
                            <img src={kat7} alt="" />
                            <p>От 540₽ <FaArrowRight /></p>
                        </div>
                    </div>
                    <div className="katalog__card">
                        <div className="card__left">
                            <h3>Уличные светильники</h3>
                            <p>От 540₽ <FaArrowRight /></p>
                        </div>
                        <div className="card__right">
                          <h3>Уличные светильники</h3>
                            <img src={kat8} alt="" />
                            <p>От 540₽ <FaArrowRight /></p>
                        </div>
                    </div>
                    <div className="katalog__card">
                        <div className="card__left">
                            <h3>Технические светильники</h3>
                            <p>От 540₽ <FaArrowRight /></p>
                        </div>
                        <div className="card__right">
                             <h3>Технические светильники</h3>
                            <img src={kat9} alt="" />
                            <p>От 540₽ <FaArrowRight /></p>
                        </div>
                    </div>
                    <div className="katalog__cardxz">
                        <div className="card__left">
                            <h3>Светодиодные ленты</h3>
                            <p>От 540₽ <FaArrowRight /></p>
                        </div>
                        <div className="card__right">
                           <h3>Светодиодные ленты</h3>
                            <img src={kat10} alt="" />
                            <p>От 540₽ <FaArrowRight /></p>
                        </div>
                    </div>
               </div>
               <div className="duo__cards">
                    <div className="duo__card">
                            <div className="card__left">
                                <h3>Светодиодные ленты</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                            </div>
                            <div className="card__right">
                                <img src={kat10} alt="" />
                                <p>От 540₽ <FaArrowRight /></p>
                        </div>
                    </div>
                    <div className="duo__card">
                            <div className="card__left">
                                <h3>Комплектуюшие</h3>
                                <p>От 540₽ <FaArrowRight /></p>
                            </div>
                            <div className="card__right">
                                <h3>Комплектуюшие</h3>
                                <img src={kat11} alt="" />
                                <p>От 540₽ <FaArrowRight /></p>
                          </div>
                    </div>
               </div>
            </div>
            <div className="xzdn">
                <Brends/>   
            </div>
            <Blog/>
         </div>
      </div>
    </>
  )
}

export default KatalogPage