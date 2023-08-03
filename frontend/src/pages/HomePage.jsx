import React, { useState } from 'react'
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero/Hero';
import Categories from '../components/Categories/Categories';
import { brandingData, categoriesData } from '../static/data';
import BestDeals from '../components/BestDeals/BestDeals';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import Sponsored from '../components/Sponsored/Sponsored';
import Events from '../components/Route/Events/Events';
import Footer from '../components/Layout/Footer';

const HomePage = () => {
  const [activeHeading, setActiveHeading]=useState(1);
  return (
    <div>
      <Header activeHeading={activeHeading}/>
      <Hero/>
      <Categories brandingData={brandingData} categoriesData={categoriesData}/>
      <BestDeals/>
      <Events/>
      <FeaturedProduct/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}

export default HomePage;
