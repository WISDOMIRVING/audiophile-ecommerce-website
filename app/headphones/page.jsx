import React from 'react'
import BestGear from "@/components/ui/BestGear";
import CategoryCard from "@/components/ui/CartegoryCard";
import Footer from '../../components/ui/Footer'
import Image from 'next/image'
import lo from "../../public/headset-white.png"


import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
    <div className='bg-[black] p-20 font-bold w-full'>
       <h1 className=' text-[white] font-10 text-center'>HEADPHONES</h1>
    </div>
    <main className='flex flex-col md:flex-row justify-center items-center p-19 gap-10'>
      <div className='w-full max-w-[400px]'>
      <Image src={lo} alt=''/>            
      </div>
      <div className='w-full max-w-[450px]'>
            <p className="text-sm tracking-[10px] text-orange-400">NEW PRODUCT</p>
            <h1 className="text-4xl md:text-5xl font-bold uppercase mt-4 mb-6 text-white">
              <span className="text-black">XX99 Mark II Headphones</span>
            </h1>
            <p className="text-gray-600 mb-8">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
          <Button variant="none" className="w-[180px] h-[50px] bg-[#D87D4A]">
            Shop Now
          </Button>
        </div>
    </main>
        <main className='flex flex-col md:flex-row justify-center items-center p-19 gap-10'>
          <div className='w-full max-w-[450px]'>
            <p className="text-sm tracking-[10px] text-orange-400">NEW PRODUCT</p>
            <h1 className="text-4xl md:text-5xl font-bold uppercase mt-4 mb-6 text-white">
              <span className="text-black">XX99 Mark I Headphones</span>
            </h1>
            <p className="text-gray-600 mb-8">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
          <Button variant="none" className="w-[180px] h-[50px] bg-[#D87D4A]">
            Shop Now
          </Button>
        </div>
      <div className='w-full max-w-[400px]'>
      <Image src='/blackheadset.png'
      width={400}
      height={400}
      alt=''/>
      </div>
    </main>
     <main className='flex flex-col md:flex-row justify-center items-center p-19 gap-10'>
      <div className='w-full max-w-[400px]'>
      <Image src='/w-headset.png'
        width={400}
      height={400}
       alt=''/>
      </div>
      <div className='w-full max-w-[450px]'>
            <p className="text-sm tracking-[10px] text-orange-400">NEW PRODUCT</p>
            <h1 className="text-4xl md:text-5xl font-bold uppercase mt-4 mb-6 text-white">
              <span className="text-black">XX99 Mark II Headphones</span>
            </h1>
            <p className="text-gray-600 mb-8">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
          <Button variant="none" className="w-[180px] h-[50px] bg-[#D87D4A]">
            Shop Now
          </Button>
        </div>
    </main>
    <section className="px-6 md:px-10 lg:px-20 py-24 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CategoryCard
                title="Headphones"
                imageSrc="/headphones.png"
                href="/headphones"
              />
              <CategoryCard
                title="Speakers"
                imageSrc="/speaker.png"
                href="/speakers"
              />
              <CategoryCard
                title="Earphones"
                imageSrc="/pods.png"
                href="/earphones"
              />
            </div>
          </section>
          
      <BestGear/>
    <Footer/>
    </>
  )
}
