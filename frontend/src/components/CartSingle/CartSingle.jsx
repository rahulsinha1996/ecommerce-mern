import React, { useState } from 'react'
import styles from '../../styles/styles';
import { HiOutlineMinus, HiPlus } from "react-icons/hi"
import { RxCross1 } from 'react-icons/rx';

const CartSingle = ({ data }) => {
    const [value, setValue] = useState(1);

    const totalPrice = data.price * value;



    return (
        <div className='border-b p-4'>
            <div className='w-full flex items-center'>
                <div>
                    <div
                        onClick={() => setValue(value + 1)}
                        className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}>
                        <HiPlus size={18} color='#fff' />
                    </div>
                    <span className='pl-[10px]'>
                        {value}
                    </span>
                    <div className='bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer'
                        onClick={() => setValue(value === 1 ? 1 : value - 1)}
                    >
                        <HiOutlineMinus size={16} color='#7d879c' />
                    </div>
                </div>
                <img src='https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg' 
                className='w-[80px] h-[80px] ml-2'
                alt='' />
                <div className="pl-[5px]">
                    <h1>{data.name}</h1>
                    <h4 className='font-[400] text-[15px] text-[#0000082]'>{data.price} X {value}</h4>
                    <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'>
                        {totalPrice}
                    </h4>
                </div>  
                <RxCross1 size={20} className='text-red cursor-pointer'/> 
            </div>
        </div>
    )
}

export default CartSingle;
