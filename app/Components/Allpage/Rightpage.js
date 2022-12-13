import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from '../Products/product'
import { SelectedItems } from '../../redux/slices/Basketslice'
import { AiOutlineSearch } from 'react-icons/ai'
const Rightpage = () => {
    const products = useSelector(SelectedItems)
    const [showresults, setshowresults] = useState(true)
    return (
        <div className='col-span-1 md:col-span-3'>
            <div className='hidden relative sm:flex items-center h-10 flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md mx-4 '>
                <input
                    type="text"
                    placeholder='Search... '
                    className='h-full w-6 p-2 px-4 flex-grow  focus:outline-none rounded-l-md'
                    onMouseOver={() => setshowresults(true)}
                    onBlur={() => setshowresults(false)}
                    onFocus={() => setshowresults(true)}
                />
                <AiOutlineSearch size={24} className="mx-3 cursor-pointer" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                {products.map((item, i) => (
                    <Product key={i} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Rightpage