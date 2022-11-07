import React, { useState } from 'react'
import { Header } from '../app/Components'
import { useSelector } from 'react-redux'
import { SelectedItems } from '../app/redux/slices/Basketslice'
import CheckoutProduct from '../app/Components/Products/CheckoutProduct'
const checkout = () => {
    const items = useSelector(SelectedItems)
    const [hasprime, setprime] = useState(0.1)
    const [rating, setrating] = useState(2)
    useEffect(() => {
        setprime(Math.random() < 0.5)
        setrating(Math.floor(Math.random() * (MaxNumber - MinNumber + 1) + MinNumber))
    }, [])
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <img src="https://cdn.mos.cms.futurecdn.net/ZefaoejrEEiKKo7pBmCaL6.jpg" className="object-cover w-[1020px] h-[350px]" />
                    <div className='flex flex-col py-10 bg-white p-5'>
                        <h1 className='border-b text-3xl pb-4 capitalize font-semibold'>
                            {items.length === 0 ? "your shoping basket is empty" : "your shoping basket"}
                        </h1>
                        {
                            items.map((items, i) => (
                                <CheckoutProduct
                                    id={items.id}
                                    title={items.id}
                                    price={items.price}
                                    description={items.description}
                                    category={items.category}
                                    image={items.category}
                                    hasprime={hasprime}
                                    rating={rating}
                                    key={i} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default checkout