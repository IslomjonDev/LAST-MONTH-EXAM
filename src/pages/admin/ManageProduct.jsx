import React from 'react'
import Products from '../../components/products/Products'
import { useUpdateProductMutation } from '../../context/api/productApi'

const ManageProduct = ({data}) => {

  let {data} = useUpdateProductMutation()

  return (
    <>
      
    </>
  )
}

export default ManageProduct