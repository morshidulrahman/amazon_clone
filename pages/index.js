import { Banner, Header, ProductFeed } from "../app/Components"
import Footer from "./footer"

export default function Home({ products }) {
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
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
  return {
    props: {
      products
    }
  }
}