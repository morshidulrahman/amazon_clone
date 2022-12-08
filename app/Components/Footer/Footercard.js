import React from 'react'

const Footercard = ({ title, list }) => {
    return (
        <div className='text-white'>
            <h1 className='text-lg font-semibold mb-3 capitalize'>{title}</h1>
            <div className='flex flex-col gap-1'>
                {list.map((item, index) => (
                    <a href="/" className=' hover:underline text-gray-300 text-sm' key={index}>{item}</a>
                ))}
            </div>
        </div>
    )
}

export default Footercard