import React,{useEffect, useState}  from "react"
import { useSelector,useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom"


export default function MyCart(){
    const[totalCost,setTotalCost]=useState(0)
 const {products}=useSelector((state)=>state.Products)
 const history=useHistory()
 const dispatch=useDispatch()

 useEffect(()=>{
    let cost=0
    products.forEach(({price,quantity},i)=>{
  cost +=quantity*price
    })
    setTotalCost(cost)
 },[products])

 const onIncrement=(id)=>{
     try{
dispatch({
    type:"ON_INCREMENT",
    payload:id
})
     }catch(err){
         console.log(err)
     }
 }

 const onDecrement=(id)=>{
    try{
dispatch({
   type:"ON_DECREMENT",
   payload:id
})
    }catch(err){
        console.log(err)
    }
}

 if(products.length===0){
    return <>
    <div className="d-flex flex-column align-items-center">
        <strong>No items in your cart</strong>
        <p>Your favourite item is just a click away</p>
    </div>

<div className="d-flex justify-content-center">
<button className="categoryButton" onClick={()=>history.push("/products")}>Start Shopping</button>

</div>
    </>
 }


 return(
 <div className="cartContainer">
<div className="heading">
    <strong>My Cart </strong><span>({products.length} items)</span>
</div>
{
    products.map(({name,price,image,id,quantity,stock},i)=><div key={i} className="productList">
    <div className="productlistdiv">
    <img className="productImage" src={image}
    alt={name}
    />
    <div className="d-flex flex-column mt-3 ms-3">
<strong>{name}</strong>
<div className="mt-2 " >
<button className="incrementButton" disabled={quantity===0} onClick={()=>onDecrement(id)}>-</button> {quantity} <button disabled={quantity===stock} onClick={()=>onIncrement(id)} className="incrementButton">+</button> X {price}
    </div>

    </div>
    </div>
    <div className="d-flex align-items-center">
        <span>Rs.{quantity*price}</span>
    </div>
    </div>)
}

<div className="payment">
<div className="paymentButton">
    <p>Promo code can be applied onpayment page</p>
    <button className="categoryButton">Proceed To checkout Rs.{totalCost}  </button>
</div>
</div>


 </div>
)}