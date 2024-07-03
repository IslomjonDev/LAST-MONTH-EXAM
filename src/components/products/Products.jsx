import React, { useEffect, useState } from 'react'
import { useGetCategorysQuery, useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
import './Products.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCartOutline , IoHeartOutline  , IoHeart} from "react-icons/io5";
import { Link, useSearchParams } from 'react-router-dom';
import Modul from '../modul/Modul';
import { toggleHeart } from '../../context/slices/WishliSlice';
import {addToCart} from '../../context/slices/CartSlice'
import { useDispatch, useSelector } from'react-redux';
import { useNavigate } from 'react-router-dom';


 const Products = ({ data , sliceCount = 8 }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const wishlist = useSelector(v => v.wishlist.value)


  const { data : categorys } = useGetCategorysQuery()
  const [model, setModel] = useState(null)


  const closeDetail = () => {
    setModel(null)
  }

  let products__category = categorys?.map(category => (
    <button className='category__btn' key={category.id}>{category.category}</button>
  ))

  let products = data?.slice(0, sliceCount).map(product => (
    <div className="products__item" key={product.id}>
      <div className="imgp">
        <div className='imgp2' onClick={() => setModel(product)}>
          <img onlci src={product?.image} alt={product?.image} />
        </div>
        <button onClick={() => dispatch(toggleHeart(product))}>
          {
            wishlist.some(heart => heart.id === product.id) ? 
            <IoHeart style={{color: "red"}} />
            : 
            <IoHeartOutline />

          }
        </button>
      </div>
      <div className="pro__prag">
        <Link to={`/products/${product.id}`}>
         <h3>{product.title}</h3>
        </Link>
        <div className="price">
          <span>
            <p>{product.oldPrice}</p>
            <h3>{product.price}</h3>
          </span>
          <button onClick={() => dispatch(addToCart(product))} ><IoCartOutline />
          </button>
        </div>
      </div>
    </div>
  ))

  return (
    <>
      <div className="products">
        <div className="container">
          <div className="products__title">
            <h2>Популярные товары</h2>
            <Link to={'/all-products'}>
              <button>Все товары <FaArrowRightLong />
              </button>
            </Link>
          </div>
          <div className="product__categorys">
            {products__category}
          </div>
          <div className="product__cards">
            {products}
          </div>
          <div  className="product__btn">
            <Link to={'/all-products'}>
               <button>Все товары <FaArrowRightLong /></button>
            </Link>
          </div>
        </div>
        {
          model ? 
          <Modul close={closeDetail}>
              <div className='detail'>
                <img src={model?.image  } alt="" />
                <button onClick={() => navigate(`/products/${model.id}`)}>see-More</button>
              </div>
          </Modul>
          :
          <></>
        }
      </div>
    </>
  )
}

export default Products
