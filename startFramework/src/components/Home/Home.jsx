import React from 'react'
import avatar from '../../../public/images/avataaars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return <>
  <div className="home w-full h-[100vh] flex justify-center items-center">

  <div className="container flex flex-col justify-center items-center gap-5">
    <img className='w-[300px]' src={avatar} alt="avatar" />
    <h1 className='font-bold text-4xl'>START FRAMEWORK</h1>
    <div className="line flex justify-center items-center gap-4">
      <div className="first-line bg-white w-20 h-1"></div>
      <div className="star"><FontAwesomeIcon icon={faStar} /></div>
      <div className="second-line bg-white w-20 h-1"></div>
    </div>
    <div className="career">Graphic Artist - Web Designer - Illustrator</div>
  </div>
  </div>
</>
}
