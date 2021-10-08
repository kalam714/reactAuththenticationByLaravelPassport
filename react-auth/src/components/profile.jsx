import React, { Component } from 'react'
import {Redirect } from 'react-router-dom'

class profile extends Component {
    render() {
        let name
        let email
        if(this.props.user){
            name=this.props.user.name
            email=this.props.user.email
        }
        if(!localStorage.getItem('token')){
            return <Redirect to={'login'}/>
        }
        return (
            <div><br></br>
            <div class='row'>
                <div class="jumbtron col-lg-4 offset-lg-4"> 
                <div class="mb-3">
                <ul class="list-group">
  {/* <li class="list-group-item">Name : {this.props.user.name}</li>
  <li class="list-group-item">Email :{this.props.user.email} </li> */}
  <li class="list-group-item">Name : {name}</li>
  <li class="list-group-item">Email :{email} </li>
  
</ul>
 

</div>
                </div>

            </div>
      
            </div>
        )
    }
}

export default profile
