import { configureStore } from '@reduxjs/toolkit';
import _ from "lodash"

const initialState= {
    products: [],
  }


function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_DATA_TO_CART':
        let cartProduct =[...state.products]
        const index= _.findIndex(cartProduct,function(obj){
          return obj.id===action.payload.id
        })
     if (index!==-1){
        
      cartProduct[index].quantity=  cartProduct[index].quantity+1
       } else { 
         const cartData={
      price:action.payload.price,
      name:action.payload.name,
      image:action.payload.imageURL,
      id:action.payload.id,
      stock:action.payload.stock,
      quantity:1
    
    }
    cartProduct.push(cartData)}

        return {
          products:cartProduct
        }

        case 'ON_INCREMENT':
          const incrementProduct=[...state.products]
          incrementProduct.forEach((prod,i)=>{
          if(prod.id===action.payload){
            incrementProduct[i].quantity=prod.quantity+1
          }
          })

         
              return {
                products:incrementProduct
              }
      
              case 'ON_DECREMENT':
                const decrementProduct=[...state.products]
                decrementProduct.forEach((prod,i)=>{
                if(prod.id===action.payload){
                  decrementProduct[i].quantity=prod.quantity-1
                }
                })
      
               
                    return {
                      products:decrementProduct
                    }
            
      

      default:
        return state
    }
  }

export default configureStore({
  reducer: {
   Products: reducer,
  },
});
