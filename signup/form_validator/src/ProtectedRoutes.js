import React, { Component } from 'react'
import {Route,Redirect} from "react-router-dom";

const isAuthenticated =window.localStorage.getItem('isAuthenticated');

export default function ProtectedRoutes({isAuth:isAuth,component:Component, ...rest}) {
    return (
       
            <Route {...rest} render={(props)=>{
                    if(isAuth){
                        return <Component/>
                }else{
                    return <Redirect to={{pathname:"/SignUp", state:{from:props.location}}} />
                }
                }}/>
                
           
        
    )
}
