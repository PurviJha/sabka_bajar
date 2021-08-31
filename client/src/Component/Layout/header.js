import React from "react"
import { useHistory } from "react-router"
import "./layout.css"
import { useSelector } from 'react-redux';


export default function Header(){
  const history=useHistory()
  const { products}=useSelector((state)=>state.Products)


    return <div className="header">
      <div className="logo">
        <div>
            <img
            src={'./static/images/logo.png'}
            alt="Sabka Bazaar Logo"
            height="60"
            width="100"
           onClick={() => history.push("/home")}
          /></div>
          <div className="navigationLink">
          <div     onClick={() => history.push("/home")}>Home</div>
       
        <div    onClick={() => history.push("/products")}>Product</div>
          </div>
        </div>

      <div className="rightDiv">
        <div className="clickableLink">
        <div onClick={() => history.push("/")} >Signin</div>  
        <div  onClick={() => history.push("/register")} >Register</div>
        </div>
      
         <div className="cart" onClick={() => history.push("/cart")}>
<img
src={'./static/images/cart.svg'}
alt="shopping Cart"
height="27"
                width="30"
/>

           <p>{products.length} items</p>
         </div>
      </div>
       
    </div>
}