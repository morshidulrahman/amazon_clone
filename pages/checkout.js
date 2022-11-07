import { Header } from '../app/Components'
import { useSelector } from 'react-redux'
import { SelectedItems } from '../app/redux/slices/Basketslice'
import CheckoutProduct from '../app/Components/Products/CheckoutProduct'

const Checkout = () => {
    const items = useSelector(SelectedItems)
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
            </main>
        </div>
    )
}

export default Checkout