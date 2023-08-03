import React, { useState } from 'react'
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero/Hero';
import Categories from '../components/Categories/Categories';
import { brandingData, categoriesData } from '../static/data';
import BestDeals from '../components/BestDeals/BestDeals';

const HomePage = () => {
  const [activeHeading, setActiveHeading]=useState(1);
  return (
    <div>
      <Header activeHeading={activeHeading}/>
      <Hero/>
      <Categories brandingData={brandingData} categoriesData={categoriesData}/>
      <BestDeals/>
    </div>
  )
}

export default HomePage;
