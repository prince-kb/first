"use client"

import React from 'react'
import Image from 'next/image'

const contact = () => {

  const postt = async()=>{
    let data = {
      success : false,
      choclate : true
    }
    const p = await fetch("/api/post",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(data)
    });

    const r = await p.json();
    console.log(r);
  }

  return (
    <div >


      {/* We can use Script as here and importing them as well */}
      {/* <Script>
        {`
          alert("Welcome to Contact Page");

        `}
      </Script> */}
      <h1 className='container'>CONTACTTTTTTT PAGE</h1>


      {/* <img src="https://cdn.sanity.io/images/vr8gru94/production/
      e016bbd4d7d57ff27e261adf1e254d2d3c609aac-2447x849.png" alt="None" /> */}
      <button onClick={postt}>POST</button>

      <div className="" style={{backgroundColor : "blue"}}>
      <Image src='https://cdn.sanity.io/images/vr8gru94/production/e016bbd4d7d57ff27e261adf1e254d2d3c609aac-2447x849.png' style={{ backgroundColor : "red", objectFit : "contain"}} alt='None' height={500} width={1000} />
      </div>


    </div>
  )
}

export default contact
