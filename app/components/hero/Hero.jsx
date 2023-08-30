'use client'
import Link from 'next/link'
import {AiFillGithub,AiFillLinkedin,AiOutlineWhatsApp} from 'react-icons/ai'
const Hero = () => {

  return (
    <div id='hero' className=' bg-cover  bg-[url("/images/heroBg.jpg")] w-full h-[600px]'>
    <div className='pt-20 container mx-auto h-full px-5'>
{/* info part  */}
<div className="flex justify-end items-center h-full">
<div className="w-full max-w-[400px] ">
<div className="text-5xl font-extrabold text-white uppercase ">Md asem iqbal</div>
<div className="text-3xl font-semibold text-white capitalize">Full Stack Web Devoloper</div>

<div className="flex w-full items-center gap-5 mt-6">

<Link href={''} className='hover:scale-125 transition-all duration-300 h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black'>
<AiFillLinkedin size={36} fill='#E5E5E5'/>
</Link>
<Link href={''} className='hover:scale-125 transition-all duration-300 h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black'>
<AiFillGithub size={36} fill='#E5E5E5'/>
</Link>
<Link href={''} className='hover:scale-125 transition-all duration-300 h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black'>
<AiOutlineWhatsApp size={36} fill='#E5E5E5'/>
</Link>
</div>
</div>
</div>

    </div>
  </div>
  )
}

export default Hero