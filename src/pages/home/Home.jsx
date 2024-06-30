import React from 'react'
import Banner from '../../components/banner/Banner'
import Katalog from '../../components/katalog/Katalog'
import NORNLIGHT from '../../components/nornlight/NORNLIGHT'
import Products from '../../components/products/Products'
import Brends from '../../components/brends/Brends'
import Blog from '../../components/blog/Blog'
import Text from '../../components/text/Text'

const Home = () => {
  return (
    <>
      <Banner/>
      <Katalog/>
      <NORNLIGHT/>
      <Products/>
      <Brends/>
      <Blog/>
      <Text/>
    </>
  )
}

export default Home