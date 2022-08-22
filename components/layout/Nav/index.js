/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from "next/link";
import classes from './Nav.module.css'

function Nav () {
  const [showNav, setShowNav] = useState(false);


  return (
    <nav className={classes.nav}>
      <Link href='/'>
        <img className={classes.nav_logo} src="/images/logo.png" alt="logo"/>
      </Link>
      <div>
        {/* show slide out nav */}
        <ul className={
        (showNav ? "left-0" : "-left-full")}>
        <Link href='/#'>
          <li>
            Account
          </li>
        </Link>
        <Link href='/#'>
          <li>
            Help
          </li>
        </Link>
      </ul>
      {showNav ? (
          <img src="/images/profile.jpg" className={classes.nav_icon}
          alt="avatar" onClick={() => setShowNav(!showNav)}/>
        ) : (
          <img src="/images/profile.jpg" className={classes.nav_icon}
          alt="avatar" onClick={() => setShowNav(!showNav)}/>
        )}
      </div>
      
        
    </nav>
  )
}

export default Nav;