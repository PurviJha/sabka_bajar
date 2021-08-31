import axios from 'axios';

const url="http://localhost:5000"

export const  HomeServices={
    getBanner: ()=>{
       return  new Promise((resolve,reject)=>{
            axios.get(`${url}/banners`)
            .then((res)=>resolve(res))
            .catch(err=>reject(err))
        })
    },
    postAddToCart:(data)=>{
        return  new Promise((resolve,reject)=>{
             axios.post(`${url}/addToCart`,data)
             .then((res)=>resolve(res))
             .catch(err=>reject(err))
         })
     },
     getCategories:()=>{
        return  new Promise((resolve,reject)=>{
             axios.get(`${url}/categories`)
             .then((res)=>resolve(res))
             .catch(err=>reject(err))
         })
     },
     getPsroducts:()=>{
        return  new Promise((resolve,reject)=>{
             axios.get(`${url}/products`)
             .then((res)=>resolve(res))
             .catch(err=>reject(err))
         })
     },
}   