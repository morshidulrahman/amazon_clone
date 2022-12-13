import React, { useState } from 'react'
import Product from '../Products/product'
import { AiOutlineSearch } from 'react-icons/ai'
const Rightpage = ({ handlesearch, products, searchterm }) => {

    const [showresults, setshowresults] = useState(true)
    return (
        <div className='col-span-1 md:col-span-3'>
            <div className='hidden relative sm:flex items-center h-10 flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md mx-4 '>
                <input
                    type="text"
                    placeholder='Search... '
                    className='h-full w-6 p-2 px-4 flex-grow  focus:outline-none rounded-l-md'
                    value={searchterm}
                    onChange={handlesearch}
                    onMouseOver={() => setshowresults(true)}
                    onBlur={() => setshowresults(false)}
                    onFocus={() => setshowresults(true)}
                />
                <AiOutlineSearch size={24} className="mx-3 cursor-pointer" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                {products?.map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}
            </div>
            {products.length == 0 && (
                <div className='flex items-center flex-col mt-8'>
                    <img src='/images/npf.jpg' alt="not found" className='w-[50%] h-[30%] rounded-sm' />
                    <p className='text-lg font-semibold mb-5'>product is not found</p>
                </div>
            )}
        </div>
    )
}

export default Rightpage