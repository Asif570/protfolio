import Link from "next/link"


const Header = () => {
  return (<>


{/* =====================================  */}
<div className="navbar bg-[#1c2068dc] fixed top-0 h-16  border-b border-white  shadow-sm shadow-white">
  <div className="navbar-start lg:hidden w-full">
    <div className="dropdown w-full">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-[#161B58]  w-full">
      <li><Link href='#hero' >Home</Link></li>
      <li><Link href='#about'>About</Link></li>
      <li><Link href='#skils'>Skils</Link></li>
      <li><Link href='#works'>Works</Link></li>
      <li><Link href='#contact'>Contact</Link></li>
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
    <li><Link href='#hero' >Home</Link></li>
      <li><Link href='#about'>About</Link></li>
      <li><Link href='#skils'>Skils</Link></li>
      <li><Link href='#works'>Works</Link></li>
      <li><Link href='#contact'>Contact</Link></li>
    </ul>
  </div>
 
</div>
</>

  )
}

export default Header