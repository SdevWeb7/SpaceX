import React, { useEffect, useRef } from 'react'
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import CloseIcon from '../../public/images/shared/icon-close.svg'
import { motion } from 'framer-motion'

function Menu ({setIsOpen}) {
   const menuRef = useRef(null)

   const listener = (e) => {
      if (menuRef && !menuRef.current.contains(e.target)) {
         setIsOpen()
      }
   }
   useEffect(() => {
      setTimeout(() => {
         document.addEventListener('click', listener)
      })

      return () => {
         document.removeEventListener('click', listener)
      }
   }, [])

   return ReactDOM.createPortal(
      <motion.div ref={menuRef} initial={{x: 300}} animate={{x: 0}} exit={{x: 300}} className={'menu'}>
         <img className={'close-menu'} src={CloseIcon} alt="a" onClick={setIsOpen} />

         <NavLink to={'/'}><b>00&nbsp;&nbsp;</b>HOME</NavLink>
         <NavLink to={'/destination'}><b>01&nbsp;&nbsp;</b>DESTINATION</NavLink>
         <NavLink to={'/crew'}><b>02&nbsp;&nbsp;</b>CREW</NavLink>
         <NavLink to={'/technology'}><b>03&nbsp;&nbsp;</b>TECHNOLOGY</NavLink>
      </motion.div>,
      document.body
   )
}

export default Menu;