import {React, useState} from 'react';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./signUp/Signup";
import Home from "./signUp/Home";
export default function App() {
  const [user, setUser] = useState(null)
  return (
    <div>
      <Router>
       <Switch>
       <Route path="/SignUp">
           <SignUp setUser={setUser}/>
         </Route>
         <Route exact path="/">
         <Login />
         </Route>
         <Route exact path="/Login">
         <Login setUser={setUser} />
         </Route>
        <Route exact path="/Home">
          <Home userName={user}/>
        </Route>
         </Switch> 
      </Router>
     
    </div>
  )
}
