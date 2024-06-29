import React from 'react'
import { useGetProductsQuery } from '../../context/api/productApi'

const Products = () => {


     const {data} = useGetProductsQuery()

     console.log(data);

  return (
    <>
        <div className="products">

        </div>
    </>
  )
}

export default Products