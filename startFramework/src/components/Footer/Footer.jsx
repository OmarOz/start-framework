import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return <>
    
    <div className="footer absolute w-full left-0 ">
      <div className="bg-[#2c3e50] flex flex-col justify-center items-center">
        <div className="about container flex md:flex-row flex-col justify-between items-center py-20 gap-20">
          <div className="location flex flex-col justify-center gap-2 md:w-[350px]">
            <div className="title text-2xl font-bold">LOCATION</div>
            <div className="desc ">2215 John Daniel Drive accordion</div>
            <div className="desc ">Clark, MO 65243</div>
          </div>
          <div className="social-media flex flex-col justify-center gap-2 md:w-[350px]">
          <div className="title text-2xl font-bold">AROUND THE WEB</div>
          <div className="icons flex justify-center gap-3">
            <div className="facebook border-2 w-[40px] h-[40px] rounded-full flex justify-center items-center "><FontAwesomeIcon className="text-xl" icon={faFacebook} /></div>
            <div className="twitter border-2 w-[40px] h-[40px] rounded-full flex justify-center items-center"><FontAwesomeIcon className="text-xl" icon={faTwitter} /></div>
            <div className="linkedin border-2 w-[40px] h-[40px] rounded-full flex justify-center items-center"><FontAwesomeIcon className="text-xl" icon={faLinkedin} /></div>
            <div className="website border-2 w-[40px] h-[40px] rounded-full flex justify-center items-center"><FontAwesomeIcon className="text-xl" icon={faGlobe} /></div>
          </div>
          </div>
          <div className="about-freelancer flex flex-col justify-center gap-2">
          <div className="title text-2xl font-bold">ABOUT FREELANCER</div>
          <div className="desc md:w-[350px]">Freelance is a free to use, licensed Bootstrap theme created by Route</div>
          </div>
        </div>
        <div className="copyright bg-[#1a252f] w-full py-5">Copyright © Your Website 2021</div>
      </div>
    </div>
  </>
    
  
}
