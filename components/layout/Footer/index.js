/* eslint-disable @next/next/no-img-element */
// * Tailwind CSS *

function Footer () {
  return (
    <footer className="wrapper font-SourceSans ">
      <div className="flex items-center justify-between border-t-[1px] pb-16 pt-5 mx-[70px] border-[#e8e8e8]">
        <img className="w-16" src="/images/logo.png" alt="logo"/>
      <ul className="flex items-center justify-center text-2xl text-blueish">
        <li className="px-7 hover:text-blackish cursor-pointer">
          Terms
        </li>
        <li className="px-7 hover:text-blackish cursor-pointer">
          Privacy
        </li>
        <li className="pl-7 hover:text-blackish cursor-pointer">
          Site Map
        </li>
      </ul>
      </div>
    </footer>
  )
}

export default Footer;