import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import { SelectProducts } from '../../redux/slices/Productslice';

import { updateuser, removeuser, SelectUser } from '../../redux/slices/Authslice';
import { auth } from '../../utils/firebase';
import firebase from 'firebase';
import { AiOutlineClose } from 'react-icons/ai';
import Currency from 'react-currency-formatter';
import { SelectedItems } from '../../redux/slices/Basketslice';
const index = () => {
    const [searchterm, setsearchterm] = useState("")
    const [showresults, setshowresults] = useState(false)
    const [searchresults, setsearchresults] = useState([])
    const items = useSelector(SelectedItems)
    const user = useSelector(SelectUser)
    const router = useRouter()
    const dispatch = useDispatch()
    const SelectedProducts = useSelector(SelectProducts)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(updateuser({
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }))
            } else {
                dispatch(removeuser())
            }
        })

        return unsubscribe
    }, [])

    const loginwithgoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    const singout = () => {
        auth.signOut()
    }

    const handlechnage = (e) => {
        let term = e.target.value
        setsearchterm(term)
        setsearchresults(SelectedProducts.filter(item => item.name.includes(term) || item.company.includes(term) || item.category.includes(term)))

    }

    return (
        <header id="home">
            <div className='bg-[#131921] flex items-center pl-4 pr-6 flex-grow py-2 gap-2 '>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer
                '>
                    <img
                        onClick={() => router.push("/")}
                        src={"/images/amazon-logo.png"}
                        width={120} height={40}
                        alt="logo"
                    />
                </div>
                {/* search */}

                <div className='hidden relative sm:flex items-center h-10 flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md mx-4 '>

                    <p className='pl-2 flex link items-center space-x-2 w-auto h-full bg-white rounded-tl-md rounded-bl-md border-r-[1px] border-r-gray-200 pr-3'>
                        <AiOutlineMenu size={22} />
                        <span onClick={() => router.push("/all")}>All</span >
                    </p>

                    <input
                        type="text"
                        placeholder='Search... '
                        className='h-full w-6 p-2 px-4 flex-grow  focus:outline-none'
                        onChange={handlechnage}
                        value={searchterm}
                        onMouseOver={() => setshowresults(true)}
                        onBlur={() => setshowresults(false)}
                        onFocus={() => setshowresults(true)}
                    />
                    <AiOutlineSearch size={24} className="mx-3 cursor-pointer
                    " />
                    {/* searchlist */}
                    {showresults && (
                        <div
                            onClick={() => setshowresults(true)}
                            onMouseOver={() => setshowresults(true)}
                            onMouseLeave={() => setshowresults(false)}
                            style={{ maxHeight: '400px', overflowY: 'auto' }}
                            className=' bg-white rounded-md absolute top-10 z-50 w-full'>
                            {(!!searchresults.length) ? (searchresults?.map(({ image, id, name, category, price }) => (
                                <div className='flex justify-between items-center bg-gray-100 rounded-md my-2 p-2' key={id}>
                                    {/* search-left */}
                                    <div className='flex gap-3'>
                                        <img src={image} alt={name} className='h-10 w-10 rounded-lg object-cover' />
                                        <div>
                                            <h3 className='text-sm font-semibold'>{name}</h3>
                                            <p className='text-sm text-gray-500'>{category}</p>
                                        </div>
                                    </div>
                                    {/* search-right */}
                                    <div className='flex gap-4 items-center'>
                                        <div>
                                            <Currency quantity={price} currency="GBP" />
                                        </div>
                                        <span><AiOutlineClose size={16} /></span>
                                    </div>
                                </div>
                            ))) : (
                                <>
                                    {searchterm && <p className='text-lg font-semibold text-gray-500 py-2'>No product found</p>}
                                </>
                            )
                            }
                        </div>
                    )}

                </div>



                {/* right */}
                <div className='flex space-x-2 md:space-x-5 items-center text-white text-[13px] '>
                    <div className='link' onClick={!user ? loginwithgoogle : singout} >
                        <p >
                            {user ? `Hello ${user.name}` : "Sing In"}
                        </p>
                        <p className='text-bold'>
                            Account & Links
                        </p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold sm:text-sm'>& Orders</p>
                    </div>
                    <div className='link flex items-center relative' onClick={() => router.push("/checkout")}>
                        <span className='bg-yellow-400 w-4 h-4 flex items-center justify-center rounded-full absolute -top-1 right-11 text-xs text-black font-bold'>
                            {items.length}
                        </span>
                        <AiOutlineShoppingCart size={29} />
                        <p className='font-extrabold sm:text-sm mt-2 ml-1'>Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
            <div className='flex items-center bg-[#232F3E] text-white p-2 pl-4 space-x-3'>

                <p className='link'>Prime video</p>
                <p className='link'>Amazon Business</p>
                <p className='link  hidden sm:inline-flex'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shooper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default index