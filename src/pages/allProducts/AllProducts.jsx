import React from 'react'
import './AllProducts.scss'
import Products from '../../components/products/Products'

const AllProducts = () => {

  

  return (
    <>
    <div className="allProducts">
      <div className="container">
          <Products sliceCount={Infinity} /> {/* Hamma mahsulotlarni ko'rsatadi */}
      </div>
    </div>
    </>
  )
}

export default AllProducts