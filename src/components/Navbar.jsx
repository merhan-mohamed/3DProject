import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/LOGO.svg";
import styles from "../styles";
import {NavLinks} from '../constants/index';
import menu from "../assets/menu.svg";
import close from "../assets/close.svg"

const Navbar = () => {
  const[active, setActive ] = useState('');
  const[toggle, setToggle] = useState(false);
  const[scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      const scrollTop = window.scrollY;
      if(scrollTop > 100){
        setScrolled(true);
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return()=>window.removeEventListener("scroll", handleScroll);

  },[])
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 
    ${scrolled ? "bg-primary" : "bg-transparent"}`}>
        <div className='w-full flex justify-between items-center  max-w-7xl mx-auto'>
            <Link
            to='/'
            className="flex items-center gap-2"
            onClick={() =>{
               setActive('');
               window.scrollTo(0,0)
               }}>
                <img src={logo} alt="" className='w-9 h-9 object-contain'/>
                <p className='text-white text-[18px] font-bold cursor-pointer flex'>Merhan &nbsp;
                <span className='sm:block hidden'> | &nbsp;FrontEnd Developer </span>
                </p>
            </Link>

            <ul className='list-none hidden sm:flex flex-row gap-10'>
              {NavLinks.map((NavLink) => (
                <li 
                key={NavLink.id}
                className={`${active === NavLink.tiltle ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick = {() => setActive(NavLink.title)}
                >
                  <a href={`#${NavLink.id}`}>{NavLink.title}</a>
                </li>
              ))}
            </ul>


        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="" 
          onClick = {() => setToggle(!toggle)}
          className='w-[28px] h-[28px] object-contain'/>
          <div className={`${!toggle ? "hidden" : "flex"} absolute p-6 black-gradient top-20 right-0 rounded-xl mx-4 my-2 min-w-[140px] z-10`}>
            <ul className='list-none flex flex-col gap-4 justify-end items-start'>
              {NavLinks.map((NavLink) => (
                <li 
                key={NavLink.id}
                className={`${active === NavLink.tiltle ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick = {() => setActive(NavLink.title)}
                >
                  <a href={`#${NavLink.id}`}>{NavLink.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
