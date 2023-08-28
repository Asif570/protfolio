import Link from "next/link"


const Header = () => {
  return (
<div className="navbar bg-[#1c2068dc] fixed top-0 h-16  border-b border-white  shadow-sm shadow-white">
 
  <div className="navbar-center hidden lg:flex container mx-auto ">
    <ul className="menu menu-horizontal px-1">
      <li><Link href='#hero' >Home</Link></li>
      <li><Link href='#about'>About</Link></li>
      <li><Link href='#skils'>Skils</Link></li>
      <li><Link href='#works'>Works</Link></li>
      <li><Link href='#contact'>Contact</Link></li>
    </ul>
  </div>
 
</div>
  )
}

export default Header