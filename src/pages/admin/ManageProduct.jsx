import React from 'react'
import Products from '../../components/products/Products'
import { useGetProductsQuery, useUpdateProductMutation } from '../../context/api/productApi'

const ManageProduct = () => {

 let {data}  = useGetProductsQuery()

  return (
    <>
      <h2>Manage Product</h2>
      <Products data={data}/>
    </>
  )
}

export default ManageProduct