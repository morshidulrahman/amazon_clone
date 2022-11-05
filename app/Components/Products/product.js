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
            <p>{category}</p>
            <img src={image} alt="image" className='w-48 h-48 object-contain' />
            <h4>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((item, index) => (
                    <AiFillStar className='text-yellow-400' key={index} />
                ))}
            </div>
            <div>{description}</div>
            <div>
                <Currency quantity={price} currency="GBP" />
            </div>
            {
                hasprime && (
                    <div>
                        <img src='/images/prime.png' />
                        <p>Free next-day Free Delivery</p>
                    </div>
                )
            }
            <div>Add to basket</div>
        </div>
    )
}

export default Product