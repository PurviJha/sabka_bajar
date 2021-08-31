import React from "react"
import { useHistory } from "react-router"
import ControledInput from "../Component/Hooks/controledInput"

export default function Register(){
    
    const history=useHistory()
    const {changeInput,input}=ControledInput({firstName:"",lastName:"",
    email:"",password:"",confirmPassword:""})
    return <div className="d-flex justify-content-evenly mt-5">
    <div>
<strong className="loginFont">Signup</strong>
<p>We do not share your personal detail with anyone</p>
    </div>
    <div style={{width:"30%"}}>
    <form>
    <div className="form-group">
      <input type="text" required="required" name="firstName" value={input.firstName} onChange={changeInput}/>
      <label htmlFor="input" className="control-label">First Name</label><i className="bar"></i>
    </div>
    <div className="form-group">
      <input type="text" required="required" name="lastName" value={input.lastName} onChange={changeInput}/>
      <label htmlFor="input" className="control-label">Last Name</label><i className="bar"></i>
    </div> 
    <div className="form-group">
      <input type="text" required="required" name="email" value={input.email} onChange={changeInput}/>
      <label htmlFor="input" className="control-label">Email</label><i className="bar"></i>
    </div>
    <div className="form-group">
      <input type="password"  name="password" value={input.password} onChange={changeInput}  required="required"/>
      <label htmlFor="input" className="control-label">Password</label><i className="bar"></i>
    </div>
    <div className="form-group">
      <input type="password"  name="confirmPassword" value={input.confirmPassword} onChange={changeInput}  required="required"/>
      <label htmlFor="input" className="control-label">Confirm Password</label><i className="bar"></i>
    </div>  
                                          <button className="categoryButton "
                                           onClick={()=>history.push("/")} style={{
                                              width:"100%"
                                          }}>SignUp</button>
                                  </form>
    </div>
</div>
}