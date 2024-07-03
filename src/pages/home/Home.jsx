import React from 'react'
import Banner from '../../components/banner/Banner'
import Katalog from '../../components/katalog/Katalog'
import NORNLIGHT from '../../components/nornlight/NORNLIGHT'
import Products from '../../components/products/Products'
import Brends from '../../components/brends/Brends'
import Blog from '../../components/blog/Blog'
import Text from '../../components/text/Text'
import { useGetProductsQuery } from '../../context/api/productApi'

const Home = () => {


  const { data } = useGetProductsQuery()


  return (
    <>
      <Banner/>
      <Katalog/>
      <NORNLIGHT/>
      <Products data={data}/>
      <Brends/>
      <Blog/>
      <Text/>
    </>
  )
}

export default Home