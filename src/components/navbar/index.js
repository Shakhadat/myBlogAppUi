import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';
import avatar from '../../avatar.jfif'

const LogoutView=()=>{
  return(
    <ul className="listgroup">
    <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Sign in
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Sign up
            </Link>
          </li>
    </ul>
  );
  
}

const LogInview=()=>{
  return(
    <ul className="listgroup">
    <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
          <Link to="/editor" className="nav-link">
          <ion-icon name="newspaper-outline"></ion-icon>&nbsp;New Post
          </Link>
          </li>

          <li className="nav-item">
          <Link to="/settings" className="nav-link">
          <ion-icon name="settings-outline"></ion-icon>&nbsp;Settings
          </Link>
          </li>

          <li className="nav-item">
          <Link
            to={`/`}
            className="nav-link">
            <img src={avatar} className="user-pic" alt="username" />
            username
          </Link>
        </li>
    </ul>
  );
}

class Navbar extends React.Component{
    render(){
        return(
           
                <div className="container">
                   <nav className='mynav'>
                    <div><Link exact to="/" className="nav-brand">
                              conduit
                            </Link></div>
                   <LogoutView/>
                    </nav>
                </div>
           
        );
    }
}

export default Navbar;