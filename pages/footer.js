import Image from 'next/image'
import React from 'react'
import Footercard from '../app/Components/Footer/Footercard'
import { FooterData } from '../app/Data/data'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='hover:bg-[#485769] text-center capitalize py-4 bg-[#3a4654] text-white block cursor-pointer' >
                Back to top
            </a>
            <div className='bg-[#232F3E]'>
                <div className='max-w-5xl mx-auto py-5'>
                    <div className='flex gap-5 justify-between py-10 flex-wrap px-4 md:px-0'>
                        {FooterData.map((item, index) => (
                            <Footercard {...item} key={index} />
                        ))}
                    </div>
                </div>
                <div className='bg-[#232F3E] border-t-[1px] border-t-gray-600'>
                    <div className='max-w-5xl mx-auto py-5'>
                        <div className='flex justify-between items-center'>
                            <img src={'/images/amazon-logo.png'} width={100} height={60} />
                            <a href="https://portfolio2-vod7.vercel.app/" target='_blank' className='text-white text-sm '>
                                All rights reserved by <span className='underline font-bold cursor-pointer'>Morshidul</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer