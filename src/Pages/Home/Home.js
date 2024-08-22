import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Offers from '../../Components/Offers/Offers'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts'
import NewCollections from '../../Components/NewCollections/NewCollections'


const Home = () => {
  return (
    <div>
      <Hero />
      <RelatedProducts />
      <Offers />
      <NewCollections />
      <NewsLetter /> 
    </div>
  )
}

export default Home
