import React from 'react'
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/api/productApi'

const ManageProduct = () => {

 let {data}  = useGetProductsQuery()
 console.log(data);

  return (
    <>
    <div className="container">
      <h2>Manage Product</h2>
      <div>
        <Products  sliceCount={Infinity} isAdmin={true} data={data}/>
      </div>
    </div>
    </>
  )
}

export default ManageProduct