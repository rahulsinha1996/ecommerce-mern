import React, { useState } from 'react'
import Header from '../components/Layout/Header';

const HomePage = () => {
  const [activeHeading, setActiveHeading]=useState(1);
  return (
    <div>
      <Header activeHeading={activeHeading}/>
    </div>
  )
}

export default HomePage;
