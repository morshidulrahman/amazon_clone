import { Header } from '../app/Components'
import { useSelector } from 'react-redux'
import { baskettotal, SelectedItems } from '../app/redux/slices/Basketslice'
import CheckoutProduct from '../app/Components/Products/CheckoutProduct'
import Currency from 'react-currency-formatter';
import { SelectUser } from '../app/redux/slices/Authslice';
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios"
const stopPromise = loadStripe(process.env.STRIPE_API_KEY)


const Checkout = () => {
    const items = useSelector(SelectedItems)
    const total = useSelector(baskettotal)
    const user = useSelector(SelectUser)


    const checkoutSections = async () => {
        const stripe = await stopPromise

        const checkoutsession = await axios.post('/api/create-checkout-session', {
            items: items,
            email: user.email,

        })
    }

    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto lg:w-[1150px]'>
                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <img src="https://cdn.mos.cms.futurecdn.net/ZefaoejrEEiKKo7pBmCaL6.jpg" className="object-cover w-[1020px] h-[350px]" alt="chekcout" />
                    <div className='flex flex-col py-10 bg-white p-5'>
                        <h1 className='border-b text-3xl pb-4 capitalize font-semibold'>
                            {items.length === 0 ? "your shoping basket is empty" : "your shoping basket"}
                        </h1>
                        {
                            items.map((items, i) => (
                                <CheckoutProduct
                                    id={items.id}
                                    title={items.title}
                                    price={items.price}
                                    description={items.description}
                                    category={items.category}
                                    image={items.image}
                                    hasprime={items.hasprime}
                                    rating={items.rating}
                                    key={i} />
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {
                        items.length >= 0 && (
                            <>
                                <h2 className='whitespace-nowrap font-semibold'>
                                    SubTotal ({items.length} items) :
                                    <span className='font-bold'>
                                        <Currency quantity={total} currency="GBP" />
                                    </span>
                                </h2>

                                <button
                                    onClick={checkoutSections}
                                    role="link"
                                    disabled={!user}
                                    className={`button mt-3 shadow-md font-semibold ${!user && " bg-gradient-to-t from-gray-500 to-gray-300 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                    {!user ? "Sing in to checkout" : "Proced to chekout"}
                                </button>
                            </>
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Checkout