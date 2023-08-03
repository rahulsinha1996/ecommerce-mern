import React from 'react'
import styles from '../../styles/styles'
import { navItems } from '../../static/data'
import { Link } from 'react-router-dom'

const Navbar = ({ active }) => {
    return (
        <div className={`${styles.noramlFlex}`}>
            {navItems && navItems.map((i, index) => (
                <div key={index}>
                    <Link
                        className={`${active === index + 1 ? "text-[#17dd1f]" : "text-[#ffff]"} font-[500] px-6 cursor-pointer`}
                        to={i.url}
                    >
                        {i.title}
                    </Link>
                </div>
            ))}


        </div>
    )
}

export default Navbar