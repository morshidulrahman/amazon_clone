import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import Currency from 'react-currency-formatter';

const MaxNumber = 5
const MinNumber = 1

const Product = ({ id, title, price, description, category, image }) => {
    const [rating, setrating] = useState(2)
    const [hasprime, setprime] = useState(0.1)

    useEffect(() => {
        setprime(Math.random() < 0.5)
        setrating(Math.floor(Math.random() * (MaxNumber - MinNumber + 1) + MinNumber))
    }, [])

    return (
        <div className='flex flex-col relative p-10 m-5 z-30 bg-white'>
            <p className='capitalize absolute top-4 right-4 italic text-sm text-gray-400'>{category}</p>
            <img src={image} alt="image" className='w-48 h-48 object-contain mx-auto' />
            <h4 className='
            my-3'>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((item, index) => (
                    <AiFillStar className='text-yellow-400' key={index} />
                ))}
            </div>
            <div className='my-3 line-clamp-2'>{description}</div>
            <div>
                <Currency quantity={price} currency="GBP" />
            </div>
            {
                hasprime && (
                    <div>
                        <img src='/images/prime.png' />
                        <p>Free next-day Delivery</p>
                    </div>
                )
            }
            <div>Add to basket</div>
        </div>
    )
}

export default Product