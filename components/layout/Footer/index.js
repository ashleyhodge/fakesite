/* eslint-disable @next/next/no-img-element */


function Footer () {
  return (
    <footer className="border-t w-screen border-blueish flex items-center justify-between pb-16 px-10 pt-5">
      <img className="w-16" src="/images/logo.png" alt="logo"/>
      <ul className="flex items-center justify-center text-2xl text-blueish">
        <li className="px-7">
          Terms
        </li>
        <li className="px-7">
          Privacy
        </li>
        <li className="pl-7">
          Site Map
        </li>
      </ul>
      
    </footer>
  )
}

export default Footer;