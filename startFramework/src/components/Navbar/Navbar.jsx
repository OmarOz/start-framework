import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [navHeight,setnavHeight]=useState(false);
  const [openNav,setopenNav]=useState(false);


  const navbarScroll=()=>{
    if(window.scrollY>=30){
      setnavHeight(true);
    }
    else{setnavHeight(false);}
  }

  const resetNav=()=>{
    if(window.screenX>=768){
      setopenNav(false);
    }
  }
  window.addEventListener('scroll',navbarScroll);
  window.addEventListener('resize',resetNav);

  const toggleNav=()=>{
    setopenNav(!openNav);
    console.log(openNav);
  }

  const {pathname}=useLocation();
  console.log(pathname);

  function linkNavigate(type=null){
    let classes=" text-l uppercase font-bold font-sans hover:text-[#1abc9c] duration-300"
    if(type===pathname){
      classes+=" text-xl bg-[#1abc9c] p-3 rounded-xl"
    }
    return classes
  }
  function linkNavigateSmaill(type=null){
    let classes=" text-3xl uppercase font-bold font-sans hover:text-[#1abc9c] duration-300"
    if(type===pathname){
      classes+=" text-4xl bg-[#1abc9c] p-3 rounded-xl"
    }
    return classes
  }

  
  return (
    <>
    <nav className='bg-[#2c3e50] fixed w-full left-0 top-0 flex justify-center overflow-visible z-20'>
      <div className={` container flex justify-between  items-center duration-500 ` + (navHeight?'h-[80px]':'h-[120px]')}>
      <div className="logo uppercase font-bold font-sans flex justify-start items-center md:text-3xl text-xl px-7 py-10 h-fit"><Link to=''>Start Framework</Link></div>
      <div className="navs hidden md:block">
        <ul className='flex gap-4 px-7'>
          <li><Link className={(linkNavigate('/about'))} to='about'>about</Link></li>
          <li><Link className={linkNavigate('/portfolio')} to='portfolio'>portfolio</Link></li>
          <li><Link className={linkNavigate('/contact')}to='contact'>contact</Link></li>
        </ul>
      </div>
      <button className='md:hidden px-7 active:text-[#1abc9c] duration-200' onClick={toggleNav}><FontAwesomeIcon className='text-4xl' icon={faBars}></FontAwesomeIcon></button>
      </div>
      <div className="navs">
        <ul className={`flex flex-col gap-7 absolute left-0 py-8 delay-100 -z-20 bg-[#2c3e50] w-full duration-300 `+ (openNav?'top-[80px]':'top-[-250px]') }>
          <li><Link className={linkNavigateSmaill('/about')} to='about'>about</Link></li>
          <li><Link className={linkNavigateSmaill('/portfolio')} to='portfolio'>portfolio</Link></li>
          <li><Link className={linkNavigateSmaill('/contact')} to='contact'>contact</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}
