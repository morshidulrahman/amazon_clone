import React from 'react'
import { Header } from '../app/Components'

const checkout = () => {
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <img src="https://cdn.mos.cms.futurecdn.net/ZefaoejrEEiKKo7pBmCaL6.jpg" width={1020} height={250} className="object-contain" />
                    <div className='flex flex-col py-10 bg-white p-5'>
                        <h1 className='border-b text-3xl pb-4 capitalize font-semibold'>your shoping basket</h1>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default checkout