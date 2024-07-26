import React from 'react'
import img2 from "../assets/datasceimg.png"

const Datascience = () => {
  return (
    <div>
      <h1>DATASCIENCE</h1>
      <img src={img2} alt="Data Science" style={{ width: '100%', height: 'auto' }} />
      <div>
        <h3>
          Welcome to the data science page where you can delve into the exciting 
          world of data analytics and machine learning. Our company is at the 
          forefront of harnessing data to drive insightful decisions and innovative 
          solutions. We offer a collaborative environment that supports exploration 
          and application of advanced data science techniques. Below, you can see 
          an illustrative image that symbolizes the intricate and powerful data 
          models we create to solve real-world problems.
        </h3>
      </div>
    </div>
  )
}

export default Datascience
