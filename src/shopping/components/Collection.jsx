import React from 'react'

const Collection = (props) => {
  const{title,image1, image2, image3, image4,image5}=props.gentsFashion
  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      <div className="menImage">

        <img src="images\banners\men1.jpeg"alt={title}/>
        <img src="images\banners\men2.jpeg "alt={title}/>
        <img src="images\banners\men8.jpeg"alt={title}/>
        <img src="images\banners\men6.jpeg"alt={title}/>
        <img src="images\banners\men5.jpeg"alt={title}/>
      </div>
    </div>
  )
}

export default Collection
