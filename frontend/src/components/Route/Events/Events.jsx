import React from 'react'
import styles from '../../../styles/styles'
import { productData } from '../../../static/data'
import EventCard from '../../EventCard/EventCard'


const Events = () => {

    return (
        <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
                <h1>Popular Events</h1>
            </div>
            <div className="w-full grid">
                <EventCard data={productData[1]} />
            </div>
        </div>
    )
}

export default Events