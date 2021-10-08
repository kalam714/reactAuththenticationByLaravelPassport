import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import axios from 'axios';

 class register extends Component {
   state ={
     name:'',
     email:'',
     password:'',
     password_confirmation:''
   }

   registerUser=(e)=>{
    e.preventDefault()
    const data ={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        password_confirmation:this.state.password_confirmation
    }

    axios.post('/register',data)
      .then((response)=> {
           localStorage.setItem('token',response.data.token)
           this.setState({login:true})
           this.props.setUser(response.data.user)


      })
      .catch((error)=> {
        console.log(error);
      });

}
    render() {
      if(this.state.login){
        return <Redirect to ='/profile' />
    }
    if(localStorage.getItem('token')){
      return <Redirect to={'profile'}/>
  }
        return (
          <div><br></br>
          <div class='row'>
              <div class="jumbtron col-lg-4 offset-lg-4"> 
              
<form onSubmit={this.registerUser}> 
<div class="mb-3">
<label class="form-label">Name</label>
<input type="text" class="form-control" name="name" required onChange={(e)=>{this.setState({name:e.target.value})}} />
</div>    
<div class="mb-3">
<label class="form-label">Email address</label>
<input type="email" class="form-control" name="email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
</div>
<div class="mb-3">
<label class="form-label">Password</label>
<input type="password" class="form-control" name="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>


</div>     
<div class="mb-3">
<label class="form-label">Email address</label>
<input type="password" class="form-control" name="email" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} /><br></br>
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

export default register
