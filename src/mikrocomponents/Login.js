import React from "react";
import {Link} from 'react-router-dom'

class Login extends React.Component{
    render(){
        return(
            <>
             <h1 className="text-xs-center">Sign In</h1>
              <p className="cetrtext">
                <Link to="/register" className="subtitletext">
                  Need an account?
                </Link>
              </p>

              <form className="loginform">
                  <fieldset>
                  <input type="Email" className="LoginInput" placeholder="Email"/>
                  </fieldset>
                 <fieldset>
                 <input type="Password" className="LoginInput" placeholder="Password"/>
                 </fieldset>
                 <fieldset>
                 <button className="SignBtn">Sign in</button>
                 </fieldset>
                 </form>

            </>
        );
    }
}

export default Login;