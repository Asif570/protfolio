'use client'
import clsx from 'clsx'
import React, { useState } from 'react'

const Skills = () => {
  const [activTab,setActivTab] = useState('frontend')
  const activeTabHandler = (data)=>{
    setActivTab(data)
  }
const data = {
  frontend:[
    {
      title:'HTML5',
      image:'/icons/html.png'
    },  {
      title:'CSS3',
      image:'/icons/css.png'
    },  {
      title:'TaildwindCSS',
      image:'/icons/tailwind.png'
    },  {
      title:'Bootstrap',
      image:'/icons/bootstrap.png'
    },  {
      title:'SCSS',
      image:'/icons/scss.png'
    },    {
      title:'JavaScript',
      image:'/icons/js.png'
    },  {
      title:'ReactJs',
      image:'/icons/react.png'
    },  {
      title:'NextJs',
      image:'/icons/next.png'
    }, 
  ],
  backend:[
    {
      title:'JavaScript',
      image:'/icons/js.png'
    },  {
      title:'NodeJs',
      image:'/icons/node.png'
    },  {
      title:'ExpressJS',
      image:'/icons/express.png'
    },  {
      title:'NextJS',
      image:'/icons/next.png'
    },  {
      title:'JWT',
      image:'/icons/jwt.png'
    }, 
  ],
  database:[
    {
      title:'MongoDB',
      image:'/icons/mongodb.png'
    },  {
      title:'MySQL',
      image:'/icons/mysql.png'
    },  {
      title:'PostGreSQL',
      image:'/icons/postgresql.png'
    },
  ],
  ui:[
    {
      title:'Figma',
      image:'/icons/figma.png'
    },  {
      title:'Adobe XD',
      image:'/icons/xd.png'
    },  {
      title:'VS code',
      image:'/icons/vscode.png'
    }, 
  ]
}


  return (
    <div id='skils' className='bg-[#161B58] min-h-[600px] h-auto'>
<div className="container px-5 mx-auto py-20 flex items-center flex-col md:flex-row gap-5 justify-center" >
{/* text  */}
<div className="max-w-[600px] flex-1 border-r-4 border-[#E5E5E5] pr-6">
<div className="text-3xl font-bold text-white mb-5">Skills.</div>
<div className="text-xl font-normal text-[#928A97] leading-10  break-words">With a diverse range of skills, including expertise in ReactJS, React Native, NodeJS, MongoDB, and GraphQL, I am a versatile software engineer with the ability to tackle a wide variety of projects and challenges.</div>



<div className="tab-section mt-6">
<div className="tabs tabs-boxed">
  <a className={clsx('tab',activTab==='frontend'?"tab-active	":"")} onClick={()=>activeTabHandler('frontend')}>Front-end</a> 
  <a className={clsx('tab',activTab==='backend'?"tab-active	":"")} onClick={()=>activeTabHandler('backend')}>Back-end</a> 
  <a className={clsx('tab',activTab==='database'?"tab-active	":"")} onClick={()=>activeTabHandler('database')}>Data base</a>
  <a className={clsx('tab',activTab==='ui'?"tab-active	":"")} onClick={()=>activeTabHandler('ui')}>UI Design</a>
</div>
<div className="tab-box   mt-3 grid grid-cols-3 md:grid-cols-4 px-2 py-4 gap-5 border-2 border-[#000C24] min-h-[100px] rounded-md">
{
  data[activTab]?.map((item,i)=>{
    return <div key={i} className='h-[120px] w-[100px]'>
   <img src={item.image} alt="img"  className='w-[100px] h-[100px]'/>
   <div className="text-lg">{item.title}</div>
    </div>
  })
}
</div>
</div>
</div>
{/* image  */}
<div className="flex-1">
    <img src="/images/skill.png" alt="a" className=' max-h-[400px]'/>
</div>
</div>
    </div>
  )
}

export default Skills