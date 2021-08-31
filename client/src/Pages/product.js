import React,{useState,useEffect} from "react"
import { useHistory,useParams } from "react-router"
import {HomeServices} from "../Services/HomeServices"
import { useDispatch } from 'react-redux';

export default function ProductPage(){
 
const[products,setProducts]=useState([])
const[categories,setCategories]=useState([])
const history=useHistory()
const {id}=useParams()
const dispatch=useDispatch()

useEffect(()=>{
    getCategory()
  },[])

  useEffect(()=>{
  getProducts()
 
  },[id])

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
      setCategories(data)
  }


  const getProducts= async()=>{
    let {data}= await HomeServices.getPsroducts()
    if(id){
       data= data.filter((ObjId)=> ObjId.category===id)
    }
    setProducts(data)
}

const addProductToCart=(products)=>{
  try{
dispatch({
  type:"ADD_DATA_TO_CART",
  payload:products
})
  }
  catch(err){
    console.log(err)
  }
}

    return( <>
<div className="d-flex">
<div className="sidebar">
{
    categories.map(({name,id},i)=><span onClick={()=>history.push(`/${id}`)} key={i}>
        {name}
    </span>)
}


</div>
<div className="d-flex flex-wrap m-3">
{
    products.map((prod,i)=>
    <div className="products" key={i}>
        <strong className="label">{prod.name}</strong>
        <div>
        <img
        className="image"
        src={prod.imageURL}
        alt={prod.name}
        
        /></div>
        <p className="description">{prod.description}</p>
        <div >
            <span>MRP Rs{prod.price} </span>
            
            <button onClick={()=>addProductToCart(prod)} className="categoryButton p-1 ">Buy Now</button>
        </div>

    </div>
    
   )
}
    
</div>

</div>
    </>)
}