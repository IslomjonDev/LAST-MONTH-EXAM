
import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'

const AddWishlist = () => {

    let data = useSelector(state => state.wishlist.value)
    console.log(data);

  return (
    <div>
        <h2>xzoka</h2>
           <Products data={data} res={[]}/>  
    </div>
  )
}

export default AddWishlist

