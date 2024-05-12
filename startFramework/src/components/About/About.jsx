import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return <>
    <div className="about mt-[120px] py-28 h-[80vh] w-full flex flex-col justify-center items-center gap-4">
      <div className="container flex flex-col justify-center items-center gap-4">

      <h1 className='font-bold text-4xl'>ABOUT COMPONENT</h1>
      <div className="line flex justify-center items-center gap-4">
        <div className="first-line bg-white w-20 h-1"></div>
        <div className="star"><FontAwesomeIcon icon={faStar} /></div>
        <div className="second-line bg-white w-20 h-1"></div>
      </div>
      <div className="about flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="p-4 item text-left w-[50%]">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
        <div className="p-4 item text-left w-[50%]">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
      </div>
      </div>
    </div>
  </>
}
