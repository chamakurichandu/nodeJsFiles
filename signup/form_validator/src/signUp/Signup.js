import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import "../App.css";
export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:'',
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            fullnameerr:"",
            firstnameerr:"",
            lastnameerr:"",
            passworderr:"",
            emailerr:"",
            info:[],
            setUser:props.setUser
        }
    }
        fullnameHandler=(event)=>{
                this.setState({
                    fullName:event.target.value
                },()=>{
                    if(event.target.value.length<8){
                        this.setState({
                                fullnameerr:true
                        })
                    }else{
                        this.setState({
                            fullnameerr:false
                        })
                    }
                })
        }

        firstnameHandler=(event)=>{
            this.setState({
                firstname:event.target.value
            },()=>{
                if(event.target.value.length<8){
                    this.setState({
                        firstnameerr:true
                    })
                }else{
                    this.setState({
                    firstnameerr:false
                })
                }
            })
        }

        lastnameHandler=(event)=>{
            this.setState({
                lastname:event.target.value
            },()=>{
                if(event.target.value.length<8){
                    this.setState({
                        lastnameerr:true
                    })
                }else{
                    this.setState({
                    lastnameerr:false
                })
                }
            })
        }

emailHandler=(event)=>{
    this.setState({
        email:event.target.value
    },()=>{
        let emailRegex = /^[a-zA-z0-9]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9]*)\.)[a-zA-Z]+$/gm;
        if(emailRegex.test(this.state.email)){
            this.setState({
                emailerr:false
            })
        }else{
            this.setState({
                emailerr:true
            })
        }
    })
}

passwordHandler=(event)=>{
            this.setState({
                password:event.target.value
            },()=>{
                if(event.target.value.length<=8){
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

SignUp=(event)=>{
        event.preventDefault();
        const registered ={
            fullName:this.state.fullName,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            password:this.state.password,
            email:this.state.email
        }

        axios.post('http://localhost:2000/api/signup',registered)
        .then(res=>{
            this.setState({
                info: res.data,
            })
            this.props.setUser(this.state.info)
        })
        if(this.state.fullName&&this.state.firstname&&this.state.password&&this.state.email){

        }else{
            alert('please fill the all fields');
        }
}    
    render() {
        return (
            <div className="signUp">
                <h2 className="text-center text-warning pt-3 pb-3">SignUp</h2>
                <form onSubmit={this.SignUp}>
                    <div className="form-group">
                    <input type="text" className="form-control pt-4 pb-4" placeholder="fullName" value={this.state.fullName} onChange={this.fullnameHandler}/>
                    <p>{this.state.fullnameerr&&<span style={{color:"red"}}>name should be atleast 6 characters length</span>}</p>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control pt-4 pb-4" placeholder="firstName" value={this.state.firstname} onChange={this.firstnameHandler}/>
                    <p>{this.state.firstnameerr&&<span style={{color:"red"}}>name should be atleast 6 characters length</span>}</p>
                    </div>

                    <div className="form-group">
                    <input type="text" className="form-control pt-4 pb-4" placeholder="lastName" value={this.state.lastname} onChange={this.lastnameHandler}/>
                    <p>{this.state.lastnameerr&&<span style={{color:"red"}}>name should be atleast 6 characters length</span>}</p>
                    </div>

                    <div className="form-group">
                    <input type="email" className="form-control pt-4 pb-4" placeholder="Email" value={this.state.email} onChange={this.emailHandler}/>
                    <p>{this.state.emailerr&&<span style={{color:"red"}}>Username should be atleast 6 characters length</span>}</p>
                    </div>
                    <div className="form-group">
                    <input type="passwordt" className="form-control pt-4 pb-4" placeholder="password" value={this.state.password} onChange={this.passwordHandler}/>
                    <p>{this.state.passworderr&&<span style={{color:"red"}}>Username should be atleast 6 characters length</span>}</p>
                    </div>
                <Link to="/Home"> <button type="submit" className="btn btn-warning btn-block pt-3 pb-3 text-white">Submit</button></Link>
                </form>
                <div className="mt-3 float-right">Already have an acount<Link to="/Login"> <button className="btn btn-primary">Login</button></Link></div>
            <div>
            
            </div>
            </div>
        )
    }
}
