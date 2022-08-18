

function Nav () {
  return (
    <nav className="flex items-center justify-between mt-6 mx-16">
      <img className="w-10" src="/images/logo.png" alt="logo"/>
      <ul className="flex items-center justify-center">
        <li className="px-7 ">
          Account
        </li>
        <li className="px-7">
          Help
        </li>
        <li className="pl-7 ">
        <img src="/images/profile.jpg" className="rounded-full w-10 border-2 border-white"
        alt="avatar"/>
        </li>
      </ul>
      
    </nav>
  )
}

export default Nav;