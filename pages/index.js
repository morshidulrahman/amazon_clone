import { Banner, Header, ProductFeed } from "../app/Components"
import Footer from "./footer"
import { useDispatch } from "react-redux"
import { addtoProduct } from "../app/redux/slices/Basketslice"
import { useEffect } from "react"

export default function Home({ products }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addtoProduct(products))
  }, [products])
  return (
    <div className="bg-gray-100">
      {/* { Header start} */}
      <Header />
      {/* {header end} */}

      {/* {main section start} */}
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
      {/* {main section end} */}

      {/* footer start */}
      <Footer />
      {/* footer end */}

    </div>
  )
}

export async function getServerSideProps(contex) {
  const products = await fetch('https://course-api.com/react-store-products')
    .then(res => res.json())

  // products?.map(item => {
  //   return (
  //     // add new rating mathord for Products because is not available in API
  //     item.rating = Array(Math.floor(Math.random() * (5 - 1 + 1)) + 1)?.fill(1),
  //     // add new review mathord for Products because is not available in API
  //     item.review = Math.floor(Math.random() * 200),
  //     // add new hasPrime mathord for Products because is not available in API
  //     item.hasPrime = Math.random() < 0.5,
  //     // add new totalPrice mathord for Products because is not available in API
  //     item.totalPrice = item.price,
  //     // add new quantity mathord for Products because is not available in API
  //     item.quantity = 1,
  //     // add new product to cart for Products because is not available in API
  //     item.cart = false,
  //     // add new product bookMark mathord for Products because is not available in API
  //     item.save = false,
  //     // add new product shopping mathord default false
  //     item.shipping = false

  //   )
  // })


  return {
    props: {
      products
    }
  }
}