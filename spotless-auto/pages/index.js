import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <main
      className={`flex flex-col gap-5 h-screen w-screen items-center justify-items-center py-48 bg-[url('/carbg1.jpg')] bg-cover absolute`}
    >
      <div className='text-center w-[70%]'> 
      <div className='text-center text-lg font-bold uppercase pb-4'>From Express Mobile Detailing To Full Inside And Out </div>
        <div className='text-3xl uppercase font-extrabold text-yellow-300'>
          Detailing Services With A Personal Touch
        </div>
      </div>
      <div className='flex flex-row gap-5'>
        <Link href={'/schedule'}>
        <button className='bg-yellow-300 text-black font-bold px-5 py-2 rounded-xl hover:bg-gray-300 hover:text-white'>Schedule Appointment Today</button>

        </Link>
        <button className='bg-yellow-300 text-black font-bold px-5 py-2 rounded-xl hover:bg-gray-300 hover:text-white'>Get A Quote</button>
      </div>
        
    </main>
    </>
  )
}
