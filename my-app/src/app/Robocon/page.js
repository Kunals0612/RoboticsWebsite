import React from 'react'
import Logo from '../public/logo.png'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Buttons from '../components/Buttons'
function page() {
  return (
    <>
    <Navigation/>
    <div className='ml-[20vw] mt-[4vw] text-center mt-10 w-[60vw]'>
      <h1 className='text-[2vw] font-bold text-blue-500'>ROBOCON</h1>
      <p className='text-[1vw]'>The ABU Asia-Pacific Robot Contest (ABU Robocon) is an Asian-Oceanian college robot competition, founded in 2002 by Asia-Pacific Broadcasting Union. In the competition, robots compete to complete a task within a set period of time. The contest aims to create friendships among young people with similar interests who will lead their countries in the 21st century, as well as help advance engineering and broadcasting technologies in the region.
      </p>
    </div>
    <div className='ml-[14vw] mt-[5vw]  border-black flex flex-row gap-[5vw]'>
        <Image src={Logo} width={500} className='shadow-md  rounded-md'></Image>
        <div className='flex flex-col'>
          <p className='w-[45vw] text-[1vw]'>DD Robocon India 2025, powered by IIT Delhi, stands as the beacon of the national stage for the Asian-Oceanian college robot competition (an event fostered internationally by the esteemed Asia-Pacific Broadcasting Union). In this thrilling contest, robots face off in a race against time, striving to conquer complex tasks within precise windows. Beyond mere competition, DD Robocon is a crucible for forging lasting bonds. It serves as a melting pot for visionary young minds, united by their drive to lead their nations towards a vibrant 21st century. More than friendship, this contest is a conduit for propelling engineering and broadcasting technologies to unprecedented heights in the region. Join us in this celebration of innovation and unity, where the future is shaped by circuits and connections. Welcome to DD Robocon India 2025!</p>
          <div className='mt-11'>
            <a href="https://aburobocon2025.mnb.mn/en"> <Buttons title="Know More"/> </a>
          </div>
        </div>
    </div>
    <p className='text-gray-600 text-[1vw] text-center py-[4vw]'>📍 Thyagraj Stadium, New Delhi,INDIA</p>
    </>
  )
}

export default page