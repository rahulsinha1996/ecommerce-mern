import React from 'react'
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import EventCard from '../components/EventCard/EventCard';
import { productData } from '../static/data';

const EventsPage = () => {
  return (
   <>
   <Header activeHeading={4}/>
   <EventCard data={productData[0]}/>
   <EventCard data={productData[1]}/>
   <Footer/>
   </>
  )
}

export default EventsPage;
