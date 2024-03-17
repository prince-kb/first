import React from 'react'
import Image from 'next/image'
const blog = () => {
  return (
    <div>
      <h1 className='container' >BLOGGGGGGGGGG PAGE</h1>
      <div className="" style={{display : "flex",justifyContent : "center"}} >
      <Image src='https://cdn.sanity.io/images/vr8gru94/production/e016bbd4d7d57ff27e261adf1e254d2d3c609aac-2447x849.png' style={{objectFit : "contain"}} alt='None' height={500} width={1000} />
      </div>
    </div>
  )
}

export default blog
