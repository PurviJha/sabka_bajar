import {useState} from "react"

export default function ControledInput(initial){
    const [input,setInput]=useState(initial)
    const changeInput =(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

return{
    changeInput,
    input
}

}