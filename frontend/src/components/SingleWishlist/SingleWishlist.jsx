import React, { useState } from 'react'
import styles from '../../styles/styles';
import { HiOutlineMinus, HiPlus } from "react-icons/hi"
import { RxCross1 } from 'react-icons/rx';

const SingleWishlist = ({ data }) => {
    const [value, setValue] = useState(1);

    const totalPrice = data.price * value;



    return (
        <div className='border-b p-4'>
            <div className='w-full flex items-center'>
                <RxCross1 size={25} className='text-red cursor-pointer' />
                <img src='https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg'
                    className='w-[80px] h-min ml-2 mr-2 rounded-[5px]'
                    alt='' />
                <div className="pl-[5px]">
                    <h1>{data.name}</h1>
                    <h4 className='font-[400] text-[15px] text-[#0000082]'>{data.price} X {value}</h4>
                    <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'>
                        Rs {totalPrice}
                    </h4>
                </div>

            </div>
        </div>
    )
}

export default SingleWishlist;
