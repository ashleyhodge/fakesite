/* eslint-disable @next/next/no-img-element */
// * Tailwind CSS *

function Footer () {
  return (
    <footer className="wrapper ">
      <div className="flex items-center justify-between border-t-[1px] pb-16 pt-5 mx-[70px] border-[#e8e8e8]">
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
      </div>
      
    </footer>
  )
}

export default Footer;