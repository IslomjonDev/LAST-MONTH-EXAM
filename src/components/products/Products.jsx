import React, { useEffect, useState } from 'react'
import { useGetCategorysQuery, useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
import './Products.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCartOutline , IoHeartOutline } from "react-icons/io5";
import { Link, useSearchParams } from 'react-router-dom';
import Modul from '../modul/Modul';

const Products = ({ sliceCount = 8 }) => {
  const [detail, setDetail] = useState(null)
  const { data } = useGetProductsQuery()
  const { data : categorys } = useGetCategorysQuery()
  const [searchParams, setSearchParams] = useSearchParams()

  let id = searchParams.get('detail')
  const { data: databyId } = useGetProductByIdQuery(id)

  useEffect(() => {
    if (id) {
      setDetail(databyId);
    }
  }, [searchParams, databyId])

  const closeDetail = () => {
    setDetail(null)
    setSearchParams({})
  }

  let products__category = categorys?.map(category => (
    <button className='category__btn' key={category.id}>{category.category}</button>
  ))

  let products = data?.slice(0, sliceCount).map(product => (
    <div className="products__item" key={product.id}>
      <div className="imgp">
        <div className='imgp2' onClick={() => setSearchParams({ detail: product?.id })}>
          <img src={product?.image} alt={product?.image} />
        </div>
        <button>
          <IoHeartOutline />
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
          <button><IoCartOutline />
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
          detail ? 
          <Modul close={closeDetail}>
              <div className='detail'>
                <img src={detail?.image} alt="" />
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
