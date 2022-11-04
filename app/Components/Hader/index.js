import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <header>
            <div className='bg-[#131921] flex items-center p-1 flex-grow py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <img src={"/images/amazon-logo.png"} width={120} height={40}
                        objectFit="contain" />
                </div>
                {/* search */}
            </div>
            {/* bottom nav */}
            <div>

            </div>
        </header>
    )
}

export default index