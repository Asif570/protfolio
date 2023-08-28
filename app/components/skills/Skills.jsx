import React from 'react'

const Skills = () => {
  return (
    <div id='skils' className='bg-[#161B58] min-h-[600px] h-auto'>
<div className="container mx-auto py-20 flex items-center flex-col md:flex-row gap-5 justify-center" >
{/* text  */}
<div className="max-w-[600px] flex-1 border-r-4 border-[#E5E5E5] pr-6">
<div className="text-3xl font-bold text-white mb-5">Skills.</div>
<div className="text-xl font-normal text-[#928A97] leading-10  break-words">With a diverse range of skills, including expertise in ReactJS, React Native, NodeJS, MongoDB, and GraphQL, I am a versatile software engineer with the ability to tackle a wide variety of projects and challenges.</div>



<div className="tab-section mt-6">
<div className="tabs tabs-boxed">
  <a className="tab">Front-end</a> 
  <a className="tab ">Back-end</a> 
  <a className="tab">Data base</a>
  <a className="tab">UI Design</a>
</div>
</div>
</div>
{/* image  */}
<div className="flex-1">
    <img src="/images/skill.jpg" alt="a" className=' max-h-[400px]'/>
</div>
</div>
    </div>
  )
}

export default Skills