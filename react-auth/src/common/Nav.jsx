import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


 class Nav extends Component {
   state ={
     logout:''
   }
   userLogout=()=>{
     localStorage.clear()
     this.props.setUser(null)
   }
    render() {


      let buttons;
      let profile;
      if(localStorage.getItem('token')){
        buttons = (
          <div>
           <Link class="nav-link active" to="/" onClick={this.userLogout}>Logout</Link>

          </div>
        )
        profile = (
          <div>
         <Link class="nav-link active" to="/profile">Profile</Link>

          </div>
        )
      }else{
      buttons =  (
        <div>
                <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" to="/login">Login</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/register">Register</Link>
        </li>
        </ul>
        </div>
        )
      }
        return (
            <div>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">React Auth</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item">
          {profile}
        </li>
      
      </ul>
     
    </div>
    {buttons}

  </div>
</nav>
</div>
        )
    }
}

export default Nav
