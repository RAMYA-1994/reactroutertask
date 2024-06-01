import React from 'react'
// import{Tab} from
import fullstack from "../assets/fullstackimg.jpg"
import datascience from "../assets/datasceimg.png"
import cyber from "../assets/cyber.webp"
import career from"../assets/Careerimg.webp"

const All = () => {
  return (
    <div className='img-container1'>
      <div>
       
      <img  src={fullstack}/>
      <img  src={datascience}/>
      <img  src={cyber}/>
      <img  src={career}/>
      

     
      </div>

    </div>
  )
}

export default All