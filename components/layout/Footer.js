

function Footer () {
  return (
    <footer className="fixed bottom-0 left-0 border-t-2 w-screen border-gray-200 flex items-center justify-between pb-10 px-16 pt-5">
      <img className="w-16" src="/images/logo.png" alt="logo"/>
      <ul className="flex items-center justify-center text-2xl">
        <li className="px-7">
          Terms
        </li>
        <li className="px-7">
          Privacy
        </li>
        <li className="pl-7 ">
          Site Map
        </li>
      </ul>
      
    </footer>
  )
}

export default Footer;