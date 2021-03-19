import {React, useState} from 'react';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Login from "./Login";
import home from './signUp/home';
import SignUp from "./signUp/Signup";
import Home from "./signUp/home";
export default function App() {
  const [user, setUser] = useState(null)
  return (
    <div>
      <Router>
       <Switch>
       <Route path="/SignUp">
           <SignUp setUser={setUser}/>
         </Route>
         <Route path="/">
         <Login/>
         </Route>
        <Route path="/Home">
          <Home/>
        </Route>
         </Switch> 
      </Router>
     
    </div>
  )
}
