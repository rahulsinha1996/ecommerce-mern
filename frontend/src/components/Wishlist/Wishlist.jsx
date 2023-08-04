import React from 'react';
import { RxCross1 } from "react-icons/rx"
import { IoBagHandleOutline } from "react-icons/io5"

import styles from '../../styles/styles';
import CartSingle from '../CartSingle/CartSingle';
import { Link } from 'react-router-dom';

const Wishlist = ({ setOpenWishlist }) => {

    const cartData = [
        {
            name: "Iphone 14 Pro max 256Gb SSD and 8gb ram silver colour",
            description: "test",
            price: 100000,
        },
        {
            name: "Iphone 12 Pro max 256Gb SSD and 8gb ram silver colour",
            description: "test",
            price: 90000,
        },
        {
            name: "Iphone 11 Pro max 256Gb SSD and 8gb ram silver colour",
            description: "test",
            price: 80000,
        }
    ]


    return (
        <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
            <div className="fixed top-0 right-0 h-full 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
                <div>
                    <div className="flex w-full justify-end pt-5 pr-5 ease-in-out">
                        <RxCross1
                            size={25}
                            className='cursor-pointer'
                            onClick={() => setOpenWishlist(false)}
                        />
                    </div>

                    <div className={`${styles.noramlFlex} p-2`}>
                        <IoBagHandleOutline size={25} />
                        <h5 className='pl-2 text-[20px] font-[500]'>
                            3 items
                        </h5>
                    </div>

                    <br />
                    <div className='w-full border-t'>
                        {
                            cartData && cartData.map((i, index) => (
                                <CartSingle data={i} />
                            ))
                        }
                    </div>
                </div>
                <div className="px-5 mb-3">
                    <Link to={"/checkout"}>
                        <div className='h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]'>
                            <h1 className='text-[#fff] text-[18px]'>
                                Checkout Now
                            </h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Wishlist;
