"use client"

import React from 'react'

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
    <div>


      {/* We can use Script as here and importing them as well */}
      {/* <Script>
        {`
          alert("Welcome to Contact Page");

        `}
      </Script> */}
      <h1 className='container'>CONTACTTTTTTT PAGE</h1>


      {/* <img src="https://cdn.sanity.io/images/vr8gru94/production/
      e016bbd4d7d57ff27e261adf1e254d2d3c609aac-2447x849.png" alt="None" /> */}
          <div style={{display : "flex",justifyContent : "center" }}>

      <button style={{fontSize : "3vh",padding : "2vh" ,margin : "2vh", borderRadius : "12vh"}}onClick={postt}>POST</button>
        </div>

    </div>
  )
}

export default contact
