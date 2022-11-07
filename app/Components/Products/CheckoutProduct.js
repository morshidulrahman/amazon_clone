import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import Currency from 'react-currency-formatter';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../redux/slices/Basketslice';
const CheckoutProduct = ({ id, title, price, description, category, image, rating, hasprime }) => {
    const dispatch = useDispatch()
    const addtobasketitems = () => {
        dispatch(addToBasket({ id, title, price, description, category, image, rating, hasprime }))
    }
    const removefrombasketitems = () => {
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className='grid grid-cols-5 my-5'>
            <img src={image} className="w-48 h-48 object-contain" />
            <div className='col-span-3 mx-5'>
                <p className='font-semibold my-2 line-clamp-1'>{title}</p>
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
            </div>
            <div className='flex flex-col space-y-3 mt-8'>
                <button className='button font-semibold' onClick={addtobasketitems}>add to basket</button>
                <button className='button font-semibold' onClick={removefrombasketitems}>remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct