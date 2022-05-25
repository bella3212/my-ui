import React, { useState } from 'react';
import './Login.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useNavigate, useHistory , Redirect } from "react-router-dom";
import { GenericStyle } from './app_styles';





export default function Login() {
  const navigate = useNavigate();
  const route_to_home = e => {
   navigate("/Home") // TODO: rename this
  }

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
 /*<Routes> 
  <Route exact path="/Home" element={<Home/>} />
  <Route path="TPage" element={<TPageStyle/>} />
</Routes>
*/
  return(
    <GenericStyle>
    <div className="login-wrapper">
         
      <h1>Please Log In</h1>
      <form>
        <label>
            <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={route_to_home}>Submit</button>
        </div>
      </form>


    </div>
    </GenericStyle>
  )
}