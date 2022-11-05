import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import React from 'react'

const index = () => {
    return (
        <header>
            <div className='bg-[#131921] flex items-center pl-4 pr-6 flex-grow py-2 gap-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer
                '>
                    <img src={"/images/amazon-logo.png"} width={120} height={40} />
                </div>
                {/* search */}
                <div className='hidden sm:flex items-center h-10 flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md mx-4'>
                    <input type="text" className='h-full w-6 p-2 px-4 flex-grow rounded-l-md focus:outline-none' />
                    <AiOutlineSearch size={24} className="mx-3 cursor-pointer
                    " />
                </div>
                {/* right */}
                <div className='flex space-x-2 md:space-x-5 items-center text-white text-[13px] '>
                    <div className='link'>
                        <p>Hello, Morshidul</p>
                        <p className='font-extrabold sm:text-sm'>Account & links</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold sm:text-sm'>& Orders</p>
                    </div>
                    <div className='link flex items-center relative'>
                        <span className='bg-yellow-400 w-4 h-4 flex items-center justify-center rounded-full absolute -top-1 right-11 text-xs text-black font-bold'>0</span>
                        <AiOutlineShoppingCart size={29} />
                        <p className='font-extrabold sm:text-sm mt-2 ml-1'>Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
            <div className='flex items-center bg-[#232F3E] text-white p-2 pl-4 space-x-3'>
                <p className='flex link items-center space-x-3'>
                    <AiOutlineMenu size={25} />
                    <span>All</span>
                </p>
                <p className='link'>Prime video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shooper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default index