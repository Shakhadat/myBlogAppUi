import React from "react";
import {Link} from 'react-router-dom';
import avatarpic from '../avatar.jfif';


const isUser=true;
const  EditProfileSettings=()=>{
    if (isUser) {
        return (
          <Link
            to="/settings"
            className="linkinfo">
            <ion-icon name="settings-outline" className="icon"></ion-icon><span>Edit Profile Settings</span>
          </Link>
        );
      }
      return null;
}

class Profile extends React.Component{
    render(){
       
        return(
            <>
            <div className="headprofile">
                <div className="userinfo">
                    <img src={avatarpic} className="userImg"/>
                    <h1 className="usernametr">User Name</h1>
                </div>
                <button className="btn-grey"><EditProfileSettings/></button>
            </div>
           
           <div className="conatiner">
           <div className="form form2">
                    <button className="feedBtn">My Articles</button>
                    <button className="feedBtn">Favorite Articles</button>
            </div>
            <div className="form2">
            <p>No articles are here... yet.</p>
            
            </div>
          
           </div>
            
            </>
           
        );
    }
}

export default Profile;