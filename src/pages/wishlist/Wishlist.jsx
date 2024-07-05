
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'
import Empty from '../../empty/Empty'

const AddWishlist = () => {
  const heart = useSelector(state => state.wishlist.value)
  useEffect(() => {
    window.scrollTo(0, 0)

  } , [])
  return (

    <>
    {
      heart.length ? 

      <div style={{padding:"100px 0"}}>
            <Products data={heart} />  
      </div>
      :
      <Empty text={"избранное"}/>
    }
    </>

  )
}

export default AddWishlist

