/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


function Nav () {
  
  return (
    <nav className="fixed top-0 left-0 border-t w-screen border-blueish flex items-center justify-between pt-22 px-10">
      <Link href='/'>
        <img className="w-16" src="/images/logo.png" alt="logo"/>
      </Link>
      <ul className="flex items-center justify-center text-2xl text-white">
        <li className="px-7">
          Account
        </li>
        <li className="px-7">
          Help
        </li>
        <li className="pl-7 ">
        <img src="/images/profile.jpg" className="rounded-full w-16 border-2 border-white"
        alt="avatar"/>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;