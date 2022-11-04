import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import React from 'react'

const index = () => {
    return (
        <header>
            <div className='bg-[#131921] flex items-center px-2 flex-grow py-2 gap-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer
                '>
                    <img src={"/images/amazon-logo.png"} width={120} height={40}
                        objectFit="contain" />
                </div>
                {/* search */}
                <div className='hidden sm:flex items-center h-10 flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md mx-4'>
                    <input type="text" className='h-full w-6 p-2 px-4 flex-grow rounded-l-md focus:outline-none' />
                    <AiOutlineSearch size={24} className="mx-3 cursor-pointer
                    " />
                </div>
                {/* right */}
                <div className='flex space-x-6 items-center text-white text-sm'>
                    <div className='link'>
                        <p>Hello Morshidul Rahman</p>
                        <p className='font-extrabold sm:text-sm'>Account & links</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold sm:text-sm'>& Orders</p>
                    </div>
                    <div className='link flex items-center relative'>
                        <span className='bg-yellow-400 w-4 h-4 flex items-center justify-center rounded-full absolute -top-1 right-10 text-xs text-black font-bold'>0</span>
                        <AiOutlineShoppingCart size={28} />
                        <p className='font-extrabold sm:text-sm mt-2'>Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
            <div>

            </div>
        </header>
    )
}

export default index