import React from 'react'
import Banner from '../../components/banner/Banner'
import Katalog from '../../components/katalog/Katalog'
import NORNLIGHT from '../../components/nornlight/NORNLIGHT'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <>
      <Banner/>
      <Katalog/>
      <NORNLIGHT/>
      <Products/>
    </>
  )
}

export default Home