import React, { useState, useEffect } from 'react'
import { Header } from '../app/Components'
import Footer from './footer'
import Link from 'next/link'
import Leftpage from '../app/Components/Allpage/Leftpage'
import Rightpage from '../app/Components/Allpage/Rightpage'
import { useSelector } from 'react-redux'
import { SelectProducts } from '../app/redux/slices/Productslice'

const AllPage = () => {
    const [searchterm, setsearchterm] = useState('')
    const [selectcategory, setselectedcategory] = useState("all")
    const [products, setproducts] = useState([])
    const [category, setcategory] = useState([])
    const ProductsData = useSelector(SelectProducts)

    //    handle search 
    const handlesearch = (e) => {
        let term = e.target.value
        setsearchterm(term)
        setproducts(ProductsData.filter(item => item.name.includes(term) || item.company.includes(term) || item.category.includes(term)))
        setselectedcategory("")
    }

    const categoryhandeler = (data) => {
        setsearchterm('')
        setselectedcategory(data)
    }

    // rmove duplicate array uniq set category
    useEffect(() => {
        setcategory(["all", ...new Set(ProductsData?.map(item => item.category))])
    }, [ProductsData])


    useEffect(() => {
        if (selectcategory = "all") {
            setproducts(ProductsData)
            return
        }

        if (searchterm) {
            setproducts(ProductsData.filter(item => item.name.includes(searchterm) || item.company.includes(searchterm) || item.category.includes(searchterm)))
            return
        }

        setproducts(ProductsData.filter(item => item.category === selectcategory))

    }, [ProductsData, selectcategory])

    return (
        <div className='bg-gray-100'>
            <Header />
            <div className='bg-[#E5E7EB] h-52 flex items-center justify-center font-bold'>
                <Link href='/' className='font-bold'>Home /</Link>
                <p className='text-orange-500 capitalize font-bold ml-1'> all products</p>
            </div>
            <main className='max-w-screen-2xl mx-auto'>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-2 py-9'>
                    {/* leftpage */}
                    <Leftpage category={category} categoryhandeler={categoryhandeler} selectcategory={selectcategory} />
                    {/* rightpage */}
                    <Rightpage handlesearch={handlesearch} products={products} searchterm={searchterm} />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AllPage