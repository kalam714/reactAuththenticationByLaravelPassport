import React, { Component } from 'react'
import Nav from './Nav'
import Home from '../components/Home'
import Profile from '../components/profile'
import Login from '../components/login'
import Register from '../components/register'
import Forget from '../components/forget'
import Reset from '../components/Reset'
import axios from 'axios'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
 class header extends Component {
     state ={
         user:{}
     }
     componentDidMount(){
         axios.get('/userData')
         .then((response)=>{
             this.setUser(response.data)

         })
         .catch((error)=>{
             console.log(error)
         })
     }
     setUser = (user)=>{
         this.setState({user:user})

     }
    render() {
        return (
            <Router>
            <div>
               
                <Nav user={this.state.user} setUser={this.setUser}/>
                <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={()=><Profile user={this.state.user}/>} />

          <Route exact path="/login" component={()=><Login user={this.state.user} setUser={this.setUser}/>}  />

          <Route exact path="/register" component={()=><Register user={this.state.user} setUser={this.setUser}/>}  />
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/reset/:id" component={Reset} />



            
          </Switch>

            </div>
            </Router>
            )
    }
}

export default header
