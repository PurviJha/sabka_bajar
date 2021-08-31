import React,{useState,useEffect} from "react"
import {Carousel} from 'react-bootstrap'
import {HomeServices} from "../../Services/HomeServices"
import  "./Banner.css"


export default function Banner(){

  const[bannerImage,setBannerImage]=useState([])

  useEffect(()=>{
      getBanner()
  },[])

  const getBanner= async()=>{
      const {data}= await HomeServices.getBanner()
      setBannerImage(data)
  }


    return(
 <Carousel className="carousel">
          {
bannerImage.map(({bannerImageUrl,bannerImageAlt},i)=> <Carousel.Item key={i}>
<img
 className="d-block w-100"
  src={bannerImageUrl}
  alt={bannerImageAlt}
/>

</Carousel.Item>

)

          }
 
  </Carousel>
       
    )
}