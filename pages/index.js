import { Banner, Header } from "../app/Components"

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>
    </>
  )
}
