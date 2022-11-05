import { Banner, Header, ProductFeed } from "../app/Components"

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export async function getServerSideProps(contex) {
  const products = await fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
  return {
    props: {
      products
    }
  }
}