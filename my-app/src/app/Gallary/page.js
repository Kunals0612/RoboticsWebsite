import React from 'react'
import Navigation from '../components/Navigation'
import Image from 'next/image';

function page() {
  const images = [

  ];
  return (
    <>
      <Navigation></Navigation>
      <div className='ml-[5%] mt-[5%] grid grid-cols-3'>
          {images.map((img,index) => (
              <div key={index}>
                  <Image src={img} width={500} height={500} className='rounded-[25px] shadow-md'></Image>
              </div>
          ))}
      </div>
    </>
  )
}

export default page