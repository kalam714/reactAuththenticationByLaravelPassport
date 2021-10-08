import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import axios from 'axios'


export class forget extends Component {
    state ={
        email:'',
        message:''
    }
    forgetPassword=(e)=>{
        e.preventDefault()
        const data ={
            email:this.state.email,
        }

        axios.post('/forgetPassword',data)
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
              
                <form onSubmit={this.forgetPassword} id="resetFrom"> 
                   
                { error }
                
                <div class="mb-3">
  <label class="form-label">Email address</label>
  <input type="email" class="form-control" name="email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
</div>
<div class="mb-3">


<button type="submit" class="btn btn-primary ">Submit</button><br></br>
Don't Have account? <Link to="/register">Register</Link><br></br>

Have Account? <Link to="/login">Login</Link>
</div>

</form>

                </div>

            </div>
      
            </div>
        )
    }
}

export default forget
