import React, { useState, useEffect } from 'react'
import { Header } from '../app/Components'
import Footer from './footer'
import Link from 'next/link'
import Leftpage from '../app/Components/Allpage/Leftpage'
import Rightpage from '../app/Components/Allpage/Rightpage'
import { useSelector } from 'react-redux'
import { SelectedItems } from '../app/redux/slices/Basketslice'

const AllPage = () => {
    const [searchterm, setsearchterem] = useState('')
    const [selectcategory, setselectedcategory] = useState("all")
    const [products, setproducts] = useState([])
    const [category, setcategory] = useState()
    const SelectedProducts = useSelector(SelectedItems)

    const categoryhandeler = (data) => {
        setsearchterem('')
        setselectedcategory(data)
    }

    // rmove duplicate array uniq set category
    useEffect(() => {
        setcategory(["all", ...new Set(SelectedProducts.filter(item => item.category))])
    }, [SelectedProducts])


    useEffect(() => {
        if (selectcategory = "all") {
            setproducts(SelectedProducts)
            return
        }

    }, [])

    return (
        <div className='bg-gray-100'>
            <Header />
            <div className='bg-[#E5E7EB] h-52 flex items-center justify-center font-bold'>
                <Link href='/' className='font-bold'>Home /</Link>
                <p className='text-orange-500 capitalize font-bold ml-1'> all products</p>
            </div>
            <main className='max-w-screen-2xl mx-auto'>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-2 py-9'>
                    <Leftpage />
                    <Rightpage />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AllPage