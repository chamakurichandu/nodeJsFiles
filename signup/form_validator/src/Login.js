import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import "./App.css";
import axios from "axios";
import {Link, withRouter} from "react-router-dom";
 class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            emailerr:false,
            password:"",
            passworderr:false,
           
            info:[]

        }
    }

    passwordHandler=(pass)=>{
        this.setState({
            password:pass.target.value
        },()=>{
            if(pass.target.value.length<=6){
                this.setState({
                    passworderr:true
                })
            }else{
                this.setState({
                    passworderr:false
                })
            }
        })
    }
        emailHandler =(event)=>{
            this.setState({
                  email:event.target.value
            },()=>{
                let emailRegex = /^[a-zA-z0-9]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9]*)\.)[a-zA-Z]+$/gm;
                  if(emailRegex.test(this.state.email)) {
                      this.setState({
                          emailerr: false
                      })
                  } else {
                      this.setState({
                          emailerr: true
                      })
                  }
            })
        }
        
        logIn=(event)=>{
            event.preventDefault();
            if(this.state.password&&this.state.email){
                axios.get('http://localhost:2000/api/login')
                .then(res=>{
                    this.setState({
                        info: res.data,
                    })
                    this.props.setUser.history.push("/Home");
                })
            }else{
                alert('please fill the all fields');
            }
    }    
       

        responseGoogle = (response) => {
            if(response.profileObj) {
                window.location = '/Home'
            }
            console.log(response);
          }
       
    render() {
        return (
            <div className="login">
                <h2 style={{textAlign:"center",color:"deeppink",margin:"1em 0"}}>Login</h2>
                <div className="google mt-2 mb-4 "><GoogleLogin
    clientId="424627207158-b8p8i4ipaj9nf616usrsul594gkbit9h.apps.googleusercontent.com"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  className="p-3" /> <span className="pl-5" style={{fontSize:"24px",fontWeight:"bolder"}}> or Login with your email</span></div>
  

            <form  onSubmit={this.logIn}>
                <div className="form-group">
                    <input type="text" className="form-control pt-4 pb-4" placeholder="Email" name="email" value={this.state.email} onChange={this.emailHandler} ></input>
                    <div>{this.state.emailerr&& <span style={{color:"red"}}>Please enter valid email</span>}</div>
                </div>
                <div className="form-group">
            <input type="password" className="form-control  pt-4 pb-4" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordHandler}></input>
            <div>{this.state.passworderr&& <span style={{color:"red"}}>Password must be 6 characters length</span>}</div>
                </div>
                <div className="float-right mb-3"><a href="/login">Forgot your password?</a></div>
                <div>
                    <button type="submit" className="btn btn-primary btn-block  pt-3 pb-3">Login</button>
                </div>
            </form>
            <div style={{marginTop:"1em",textAlign:"center"}}><p>Don't have an account?
           <Link to="/SignUp">  <button style={{marginLeft:"0.2em",padding:"0.1em"}} className="btn btn-warning text-white " >SignUp</button></Link>
                
                </p></div>

            </div>
        )
    }
}
export default withRouter(Login)