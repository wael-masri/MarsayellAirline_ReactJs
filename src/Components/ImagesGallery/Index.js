import React ,{useEffect, useState}from "react";
import './Style.css';
import axios from 'axios';
import Title from '../Title/Index';
const ImagesGallery = () => {
const [images , setimages] = useState([])

//fetch data from file json in public folder
useEffect(() => {
  axios.get('/Data/Data.json').then(res => { setimages(res.data.images_gallery)})
}, [])
// width image 255 px   height : 225 px 
// boocle for images view in page
const imgs = images.map(val => {
  return(
      <div className="col-md-3" key={val.id} >
      <a data-fancybox='gallery' href={val.image_link}>
      <img className='image_gallery' src={val.image_link} />
      </a>
      </div>
  )
})


//running
    return ( 
<div className='container big_div_gallery'>
  <Title title='Our Gallery' />
    <div className='row'>
      {imgs}
      </div> 
      <br /> 
      <br />  
</div>
)
}
export default ImagesGallery ;