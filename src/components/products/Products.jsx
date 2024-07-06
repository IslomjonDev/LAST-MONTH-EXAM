import React, { useEffect, useState } from 'react';
import { useDeleteProductMutation, useGetCategorysQuery, useGetProductByIdQuery, useGetProductsQuery, useUpdateProductMutation } from '../../context/api/productApi';
import './Products.scss';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCartOutline, IoHeartOutline, IoHeart } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Modul from '../modul/Modul';
import { toggleHeart } from '../../context/slices/WishliSlice';
import { addToCart } from '../../context/slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiEdit2Line } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";

const Products = ({  isAdmin, isLoading, data, sliceCount = 8 }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlist = useSelector(v => v.wishlist.value);
  const cart = useSelector(v => v.cart.value);

  const { data: categorys } = useGetCategorysQuery();
  const [model, setModel] = useState(null); 
  const [value, setValue] = useState("all");
  const [editModul , setEditModul] = useState(null)

  console.log(editModul);

  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  const closeDetail = () => {
    setModel(null);
    setEditModul(null)
  };

  let [updateProduct , {isLoading:isUpdateLoading , isSuccess}] = useUpdateProductMutation()

  const handleUpdateProduct = e => {
    e.preventDefault()
    let product = {
      id: editModul?.id,
      title: editModul?.title,
      price: editModul?.price,
      image: editModul?.image,
      oldPrice: editModul?.oldPrice,
      category: editModul?.category,
      desc: editModul?.desc
    }
    updateProduct({body: product , id: editModul.id})
  }

  useEffect(() => {
    if (isSuccess) {
      setEditModul(null)
    }
  }, [isSuccess])

  let products__category = categorys?.map(category => (
    <button onClick={() => setValue(category?.category)} className='category__btn' key={category.id}>
      {category.category}
    </button>
  ));

  const categoryFilter = value === "all" ? data : data.filter(el => el?.category === value);

  let products = categoryFilter?.slice(0, sliceCount).map(product => (
    <div className="products__item" key={product.id}>
      <div className="imgp">
        <div className='imgp2' onClick={() => setModel(product)}>
          <img src={product?.image} alt={product?.image} />
        </div>
        <button onClick={() => dispatch(toggleHeart(product))}>
          {
            isAdmin ? <></> : 
            wishlist.some(heart => heart.id === product.id) ? 
            <IoHeart style={{ color: "red" }} /> : 
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
            <p>{product.oldPrice}$</p>
            <h3>{product.price}$</h3>
          </span>
          {
            isAdmin ? 
            <div className="edit__btn">

              <button onClick={() => setEditModul(product)}  ><RiEdit2Line /></button>
            
              <button onClick={() => handleDeleteProduct(product.id)}><FaRegTrashCan /></button>
            </div> :
            cart.some(cart => cart.id === product.id) ? 
            <button className='cart__btn__check'><FaCheck /></button> :
            <button className='cart__btn' onClick={() => dispatch(addToCart(product))}><IoCartOutline /></button>
          }
          
        </div>
      </div>
      {
                editModul ? 
                <Modul close={closeDetail} >
                  <div className='create__product'>
                      <form onSubmit={handleUpdateProduct} action="">
                                <span>
                              <label htmlFor="">Title</label>
                              <input value={editModul.title} onChange={e => setEditModul(prev => ({...prev , title : e.target.value}))} name='title' type="text" />
                          </span>
                          <span>
                              <label htmlFor="">price in $</label>
                              <input value={editModul.price} onChange={e => setEditModul(prev => ({...prev , price : e.target.value}))}   name='price' type="number" />
                          </span>
                          <span>
                              <label htmlFor="">image-url</label>
                              <input value={editModul.image} onChange={e => setEditModul(prev => ({...prev , image : e.target.value}))}   name='image' type="text" />
                          </span>
                          <span>
                              <label htmlFor="">old-price in $</label>
                              <input value={editModul.oldPrice} onChange={e => setEditModul(prev => ({...prev , oldPrice : e.target.value}))}   name='oldPrice' type="number" />
                          </span>
                          <span>
                              <label htmlFor="">category</label>
                              <select value={editModul.category} onChange={e => setEditModul(prev => ({...prev , category : e.target.value}))}    name="category" id="">
                                <option value="all">Tanlang</option>
                                
                              </select>
                          </span>
                          <span>
                              <label  htmlFor="">desc</label>
                              <textarea  value={editModul.desc} onChange={e => setEditModul(prev => ({...prev , desc : e.target.value}))}   name='desc' type="text" />
                          </span>
                           <div className="update__btn">
                              <button disabled={isUpdateLoading}>{isUpdateLoading ? "Loading..." : "Update"}</button>
                              <button onClick={closeDetail}>cancel</button>
                           </div>
                      </form>
                  </div>
                </Modul>
                :
                <></>
              }
    </div>
  ));

  return (
    <>
    <div className="products">
      <div className="container">
        { !isAdmin && (
          <div className="products__title">
            <h2>Популярные товары</h2>
            <Link to={'/all-products'}>
              <button>Все товары <FaArrowRightLong /></button>
            </Link>
          </div>
        )}
        <div className="product__categorys">
          { !isAdmin && (
            <div className='product__categorys'>
              <button onClick={() => setValue('all')} className='category__btn'>all</button>
              {products__category}
            </div>
          )}
        </div>
        <div className="product__cards">
          { isLoading ? (
            <div className='skeleton__wrapper container'>
              {Array(4).fill("").map((_, inx) => (
                <div key={inx} className="skeleton__card">
                  <div className="skeleton__image skeleton__anime"></div>
                  <div className="skeleton__title skeleton__anime"></div>
                  <div className="skeleton__price skeleton__anime"></div>
                </div>
              ))}
            </div>
          ) : products }
        </div>
        <div className="product__btn">
          <Link to={'/all-products'}>
            <button>Все товары <FaArrowRightLong /></button>
          </Link>
        </div>
      </div>
      { model && (
        <Modul close={closeDetail}>
          <div className='detail'>
            <img src={model?.image} alt="" />
            <button onClick={() => navigate(`/products/${model.id}`)}>see-More</button>
          </div>
        </Modul>
      )}
    </div>
    </>
    
  );
};

export default Products;
