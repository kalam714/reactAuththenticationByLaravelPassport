import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

 class Reset extends Component {
    state ={
        token:'',
        email:'',
        password:'',
        password_confirmation:''
      }
   
      passwordReset=(e)=>{
       e.preventDefault()
       const data ={
           token:this.state.token,
           email:this.state.email,
           password:this.state.password,
           password_confirmation:this.state.password_confirmation
       }
   
       axios.post('/resetpassword',data)
         .then((response)=> {
            this.setState({message:response.data.message})
            document.getElementById('resetFrom').reset()

   
   
         })
         .catch((error)=> {
            this.setState({message:error.response.data.message})
         });
   
   }
       render() {
        let error="";
        if(this.state.message){
            error = (
                <div>
                    <div class="alert alert-danger" role="alert">
                        {this.state.message}

                    </div>
                </div>
            )
        }
       
        
           return (
             <div><br></br>
             <div class='row'>
                 <div class="jumbtron col-lg-4 offset-lg-4"> 
                 
   <form onSubmit={this.passwordReset } id="resetFrom">  
   {error}
   <div class="mb-3">
   <label class="form-label">Name</label>
   <input type="text" class="form-control" name="token" required onChange={(e)=>{this.setState({token:e.target.value})}} />
   </div>    
   <div class="mb-3">
   <label class="form-label">Email address</label>
   <input type="email" class="form-control" name="email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
   </div>
   <div class="mb-3">
   <label class="form-label">New Password</label>
   <input type="password" class="form-control" name="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>
   
   
   </div>     
   <div class="mb-3">
   <label class="form-label">Password Confirm</label>
   <input type="password" class="form-control" name="password_confirmation" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} /><br></br>
   <button type="submit" class="btn btn-primary ">Submit</button>
   
   </div>
       
   </form>
          
   
   
   
   Have an account? <Link to="/login">Login</Link><br></br>
   
   Forget Password? <Link to="/forget">Click Here</Link>
   
                 </div>
   
             </div>
       
             </div>
           )
       }
}

export default Reset
