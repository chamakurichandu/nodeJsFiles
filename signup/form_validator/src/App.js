import {React, useState} from 'react';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./signUp/Signup";
import Home from "./signUp/Home";
import ProtectedRoutes from "./ProtectedRoutes";

export default function App() {

  const [isAuth, setUser] = useState(false);
  return (
    <div>
      <Router>
       <Switch>
       <Route path="/SignUp">
           <SignUp setUser={setUser}/>
         </Route>
         <Route exact path="/">
         <Login setUser={setUser} />
         </Route>
        
        <ProtectedRoutes path="/Home"  component={Home} isAuth={isAuth}/>
         </Switch> 
      </Router>
     
    </div>
  )
}
