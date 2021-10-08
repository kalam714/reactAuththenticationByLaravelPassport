import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import axios from 'axios';



export class login extends Component {
    state ={
        email:'',
        password:'',
        message:''
    }
    loginUser=(e)=>{
        e.preventDefault()
        const data ={
            email:this.state.email,
            password:this.state.password
        }

        axios.post('/login',data)
          .then((response)=> {
               localStorage.setItem('token',response.data.token)
               this.setState({login:true})
               this.props.setUser(response.data.user)

          })
          .catch((error)=> {
            this.setState({message:error.response.data.message})
          });

    }
    render() {
        if(this.state.login){
            return <Redirect to ='/profile' />
        }

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
        if(localStorage.getItem('token')){
            return <Redirect to={'profile'}/>
        }
        return (
            <div><br></br>
            <div class='row'>
                <div class="jumbtron col-lg-4 offset-lg-4"> 
                
  <form onSubmit={this.loginUser}>     
  {error}
  <div class="mb-3">
  <label class="form-label">Email address</label>
  <input type="email" class="form-control" name="email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
</div>
<div class="mb-3">
<label class="form-label">Password</label>
<input type="password" class="form-control" name="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>

<button type="submit" class="btn btn-primary ">Submit</button>

 </div>     
      
  </form>
         
 


Don't Have account? <Link to="/register">Register</Link><br></br>

Forget Password? <Link to="/forget">Click Here</Link>

                </div>

            </div>
      
            </div>
        )
    }
}

export default login
