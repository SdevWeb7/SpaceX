import { NavLink, useLocation } from "react-router-dom";
import Logo from '../../public/images/shared/logo.svg'
import Burger from '../../public/images/shared/icon-hamburger.svg'
import { useEffect, useState } from "react";
import Menu from "./Menu.jsx";
import { AnimatePresence } from "framer-motion";


function Navbar () {

   const [isOpenMenu, setIsOpenMenu] = useState(false)
   const location = useLocation()

   useEffect(() => {
      setIsOpenMenu(false)
   }, [location.pathname])

   const handleMenu = () => {
      setIsOpenMenu(v => !v)
   }

   return (
      <header className={'header'}>
         <AnimatePresence>
            {isOpenMenu && <Menu setIsOpen={handleMenu} />}
         </AnimatePresence>

         <img className={'logo'} src={Logo} alt="a" />

         <div className="trait-header"></div>

         <nav className={'navbar'}>
            <img className="burger" src={Burger} onClick={handleMenu}></img>

            <NavLink to={'/'}><b>00</b> HOME</NavLink>
            <NavLink to={'/destination'}><b>01</b> DESTINATION</NavLink>
            <NavLink to={'/crew'}><b>02</b> CREW</NavLink>
            <NavLink to={'/technology'} style={{marginRight: 0}}><b>03</b> TECHNOLOGY</NavLink>
         </nav>
      </header>
   )
}

export default Navbar;