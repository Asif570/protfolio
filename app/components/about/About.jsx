
import React from 'react'

const About = () => {
  return (
    <div className='bg-[#E5E5E5] py-5 ' id='about'>
        <div className=' gap-5 container px-5 mx-auto flex w-full flex-col md:flex-row min-h-[600px] items-center'>
{/* image  */}
<div className='flex-1'>
    <div className='flex justify-center'>

   <img src="/images/About.jpg" alt="Hero"  className='max-h-[400px]'/>
    </div>
</div>
{/* text  */}
<div className='max-w-[600px] flex-1 border-l-4  border-[#000C24] pl-6'>
    <div className="text-3xl font-bold text-[#F44336] mb-5">About Me.</div>
    <div className="text-xl font-normal text-[#928A97] leading-10  break-words">With a passion for technology and a focus on continuous learning, I am a software engineer with expertise in JavaScript and a willingness to explore new technologies. I am a proactive problem-solver and enjoy working on complex projects that require me to think creatively and outside the box.</div>
</div>
        </div>
    </div>
  )
}

export default About