import React, { useEffect, useState } from 'react'
import woodenHouse from '../../../public/images/port1.png'
import cake from '../../../public/images/port2.png'
import circus from '../../../public/images/port3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {

  const [ports,setPorts]=useState([woodenHouse,cake,circus, woodenHouse,cake,circus]);
  const [selectedPort,setselectedPort]=useState();
  

  const suffleArray=(array)=>{
    return array.sort(()=>Math.random()-0.5)
  }

  const unselect=()=>{
    setselectedPort(false)
  }

  useEffect(()=>{
    setPorts(suffleArray(ports));
  },[])

  return <>
  <div className="portfolio mt-[120px] py-28 h-fit w-full bg-white flex flex-col justify-center items-center gap-8">
  <div className="title flex flex-col justify-center items-center gap-2">
  <h1 className='font-bold text-4xl text-[#2c3e50]'>PORTFOLIO COMPONENT</h1>
    <div className="line flex justify-center items-center gap-4">
      <div className="first-line bg-[#2c3e50] w-20 h-1"></div>
      <div className="star text-[#2c3e50]"><FontAwesomeIcon icon={faStar} /></div>
      <div className="second-line bg-[#2c3e50] w-20 h-1"></div>
    </div>
  </div>
    <div className="container flex justify-center items-center flex-wrap gap-10">
      {ports.map(e =>(
        
      <div className="element relative rounded-2xl overflow-hidden  w-fit">
        <img className='w-[400px] rounded-2xl' src={e} alt="" />
        <div onClick={()=>{setselectedPort(e)}} className="zoom absolute z-10 left-0 top-0 bg-[#1abc9c] w-full h-full flex justify-center items-center cursor-pointer opacity-0 hover:opacity-80 duration-300"> <FontAwesomeIcon className='text-6xl' icon={faPlus}></FontAwesomeIcon></div>
        </div>       
      ))}
      </div>{
        selectedPort &&
      <div onClick={unselect} className="background fixed top-0 z-50 w-[100%] h-[100%] backdrop-blur-lg">
        <img  className='w-[700px] rounded-2xl fixed z-20 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]' src={selectedPort} alt="" />
      </div>}
  </div>
</>
}
