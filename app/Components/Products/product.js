import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../redux/slices/Basketslice';
const MaxNumber = 5
const MinNumber = 1

const Product = ({ id, title, price, description, category, image }) => {
    const [rating, setrating] = useState(2)
    const [hasprime, setprime] = useState(0.1)
    const dispatch = useDispatch()

    useEffect(() => {
        setprime(Math.random() < 0.5)
        setrating(Math.floor(Math.random() * (MaxNumber - MinNumber + 1) + MinNumber))
    }, [])

    const addtoitemsbasket = () => {
        dispatch(addToBasket(
            {
                id, title, price, description, category, image, rating, hasprime
            }
        ))
    }

    return (
        <div className='flex flex-col relative p-10 m-5 z-30 bg-white rounded-sm'>
            <p className='capitalize absolute top-4 right-4 italic text-sm text-gray-400'>{category}</p>
            <img src={image} alt="image" className='w-48 h-48 object-contain mx-auto' />
            <h4 className='
            my-3 line-clamp-1'>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((item, index) => (
                    <AiFillStar className='text-yellow-400' key={index} />
                ))}
            </div>
            <div className='my-3 line-clamp-2'>{description}</div>
            {!hasprime ? (
                <div className='font-semibold mb-12'>
                    <Currency quantity={price} currency="GBP" />
                </div>
            ) : (
                <div className='font-semibold mb-3'>
                    <Currency quantity={price} currency="GBP" />
                </div>
            )}
            {
                hasprime && (
                    <div className='flex  mb-3 space-x-3'>
                        <img src='/images/prime.png' className='w-[40px]' />
                        <p className='font-semibold text-sm
                        '>Free next-day Delivery</p>
                    </div>
                )
            }
            <div className='mx-auto button' onClick={addtoitemsbasket}>Add to basket</div>
        </div>
    )
}

export default Product