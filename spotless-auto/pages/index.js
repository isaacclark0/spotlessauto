import Head from 'next/head'
import Navbar from '@/components/Navbar'
import LandingBody from '@/components/LandingBody'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Car Detailing Company</title>
        <meta name="description" content="Welcome to our car detailing company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow bg-gray-100">
        <Navbar />
        <LandingBody />
      
      </main>

      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Car Detailing Company. All rights reserved.</p>
      </footer>
    </div>
  )
}







