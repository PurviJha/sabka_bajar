import React from "react"
import { useHistory } from "react-router"
import ControledInput from "../Component/Hooks/controledInput"

export default function Login(){
    
    const history=useHistory()
    const {changeInput,input}=ControledInput({email:"",password:""})
    return <div className="d-flex justify-content-evenly mt-5">
    <div>
<strong className="loginFont">Login</strong>
<p>Get access to your orders,Wishlist and Recommendations</p>
    </div>
    <div style={{width:"30%"}}>
    <form>
    <div className="form-group">
      <input type="text" required="required" name="email" value={input.email} onChange={changeInput}/>
      <label htmlFor="input" className="control-label">Email</label><i className="bar"></i>
    </div>
    <div className="form-group">
      <input type="password"  name="password" value={input.password} onChange={changeInput}  required="required"/>
      <label htmlFor="input" className="control-label">Password</label><i className="bar"></i>
    </div>
                                          <button className="categoryButton "
                                           onClick={()=>history.push("/home")} style={{
                                              width:"100%"
                                          }}>Login</button>
                                  </form>
    </div>
</div>
    
}