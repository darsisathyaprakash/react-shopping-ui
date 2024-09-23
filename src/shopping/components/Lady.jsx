import React from 'react'

const Lady = (props) => {
    const{ title,image1,image2,image3,image4,image5}=props.LadiesFashion
  return (
    <div className='WomenSection'>
      <h2>{title}</h2>
      <img src='images/banners/woman.jpeg' alt="title"/>
      <div className="LadyImage">
        <img src="images\banners\lad11.jpeg"alt={title}/>
        <img src="images\banners\lad12.jpeg "alt={title}/>
        <img src="images\banners\lad13.jpeg"alt={title}/>
        <img src="images\banners\lad14.jpeg"alt={title}/>
      </div>
    </div>
  )
}

export default Lady
