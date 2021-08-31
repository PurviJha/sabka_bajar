import React,{useState,useEffect} from "react"
import { useHistory } from "react-router"
import {HomeServices} from "../Services/HomeServices"
import Banner from "../Component/Banner/Banner"
import "./index.css"

export default function HomePage(){
    const[getCategories,setGetCategories]=useState([])
    const history=useHistory()

  useEffect(()=>{
    getCategory()
  },[])

  const getCategory= async()=>{
      let {data}= await HomeServices.getCategories()
      data= data.filter(obj=>obj.enabled===true)
      data.sort(( a, b )=> {
        if ( a.order < b.order ){
          return -1;
        }
        if ( a.order > b.order ){
          return 1;
        }
        return 0;
      })
      setGetCategories(data)
  }

    return( 
    <div className="d-flex flex-column align-items-center mt-2">
    <Banner />
    <div className="borderclass"/>
    

        {
           getCategories.map(({name,key,description,enabled,imageUrl,id},i)=>
          <> <div className="categoryDiv" key={key}>
               <div className='containerDiv'>

               {
                 i%2===0&& <img
                 className="image"
                 src={imageUrl}
                 alt={key}
                 />
               }  
              
               <div className="headerElement">
                   <strong>
                   {name}
                   </strong >
                  <p>
                  {description}
                  </p>
                  <button className="categoryButton" onClick={()=>history.push(`/${id}`)}>{key}</button>
                   

               </div>
               {
                 i%2!==0&& <img
                 className="image"
                 src={imageUrl}
                 alt={key}
                 />
               }  
               </div>
              
               
               </div>    <div className="borderclass"/> </>
               ) 
        }

    </div>)
}