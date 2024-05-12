import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return <>
  <div className="contacts mt-[120px] py-28 h-fit w-full bg-white flex flex-col justify-center items-center gap-8">
    <div className="container flex flex-col gap-8 justify-center items-center">

  <div className="title flex flex-col justify-center items-center gap-2">
  <h1 className='font-bold text-4xl text-[#2c3e50]'>CONATCT SECTION</h1>
    <div className="line flex justify-center items-center gap-4">
      <div className="first-line bg-[#2c3e50] w-20 h-1"></div>
      <div className="star text-[#2c3e50]"><FontAwesomeIcon icon={faStar} /></div>
      <div className="second-line bg-[#2c3e50] w-20 h-1"></div>
    </div>
  </div>
  <div className="form flex flex-col gap-8 justify-center items-center w-full px-7">
    <input className='md:w-[100%] w-[70%] bg-white border-bottom border-solid border-b-2 py-4 text-[#2c3e50] focus: outline-none' type="text" placeholder='userName' />
    <input className='md:w-[100%] w-[70%] bg-white border-bottom border-solid border-b-2 py-4 text-[#2c3e50] focus: outline-none' type="text" placeholder='userAge' />
    <input className='md:w-[100%] w-[70%] bg-white border-bottom border-solid border-b-2 py-4 text-[#2c3e50] focus: outline-none' type="text" placeholder='userEmail' />
    <input className='md:w-[100%] w-[70%] bg-white border-bottom border-solid border-b-2 py-4 text-[#2c3e50] focus: outline-none' type="text" placeholder='userPassword'/>
    <button className='text-2xl bg-[#1abc9c] p-3 rounded-xl md:self-start'>Send Message</button>
  </div>
    </div>
  </div>
</>
}
