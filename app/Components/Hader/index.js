import { AiOutlineSearch } from 'react-icons/ai';
import React from 'react'

const index = () => {
    return (
        <header>
            <div className='bg-[#131921] flex items-center p-2 flex-grow py-2 gap-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer
                '>
                    <img src={"/images/amazon-logo.png"} width={120} height={40}
                        objectFit="contain" />
                </div>
                {/* search */}
                <div className='hidden sm:flex items-center h-10 flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md'>
                    <input type="text" className='h-full w-6 p-2 px-4 flex-grow rounded-l-md focus:outline-none' />
                    <AiOutlineSearch size={24} className="mx-3 cursor-pointer
                    " />
                </div>
            </div>
            {/* bottom nav */}
            <div>

            </div>
        </header>
    )
}

export default index