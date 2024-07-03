import React from 'react'
import './Cart.scss'

import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

import img from '../../assets/kat1.png'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, incrementCart, removeFromCart } from '../../context/slices/CartSlice'




const Cart = () => {

  const cart = useSelector(state => state.cart.value)
  
  const dispatch = useDispatch()

  let cartItems = cart?.map((item) => (
    <div key={item.id} className="cart__card">
        <div className="img">
          <img src={item?.image} alt="" />
        </div>
        <div className="dffc">
            <span>
              <p>{item.title}</p>
              <h3>{item.price}</h3>
            </span>
        <h4>{item.desc}</h4>
        <h4>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</h4>
        <div className="counts">
            <button disabled={item.quantity <= 1} onClick={() => dispatch(decrementCart(item))}><BiMinus/></button>
            <p>{item.quantity}</p>
            <button onClick= {() => dispatch(incrementCart(item))}><BiPlus/></button>
            <button onClick={() => dispatch(removeFromCart(item.id))} className='delete'><IoTrashOutline />
            </button>
        </div>
        </div>
</div>
  ))

  return (
    <>
      <div className="cart">
         <div className="container">
             <div className="cart__title">
                  <Link to={'/'}>Главная</Link>
                  <MdKeyboardArrowRight/>
                  <Link to={'/catalog'}>Каталог</Link>
                  <MdKeyboardArrowRight/>
                  <p>Корзина</p>
             </div>
             <div className="cart__content">
                <h1>Корзина</h1>
                <div className="cart__products">
                    <div className="cart__products__title">
                        <p>Фото</p>
                        <p>Товары</p>
                        <p>Описание</p>
                        <p>Артикул</p>
                        <p>Количество</p>
                    </div>
                      {cartItems}
                </div>
             </div>
             <div className="decor">
                 <h2>Оформление</h2>
                 <form action="">
                    <div className="df">
                      <input type="text" placeholder='ФИО'/>
                      <input type="text" placeholder='телефон' />
                      <input type="text" placeholder='Электронная почта' />
                    </div>
                    <div className="delivery">
                        <h2>Доставка</h2>
                        <input type="text" placeholder='Адрес доставки' />
                        <textarea name="" placeholder='Комментарий' id=""></textarea>
                    </div>
                 </form>
             </div>
             <div className="payment">
                <h2>Оплата</h2>
                <div className="dfp">
                <span>
                   <p>Товары..........................</p>
                   <p>12 300₽</p>
                </span>
                <span>
                   <p>Доставка................................</p>
                   <p>12 300₽</p>
                </span>
                </div>
                <h3>12822$</h3>
                <div className="dfb">
                  <button>Купить</button>
                    <span>
                    <input type="checkbox" />
                    <p>Я согласен наобработку моих персональных данных</p>
                    </span>
                </div>
             </div>

         </div>
      </div>
    </>
  )
}

export default Cart