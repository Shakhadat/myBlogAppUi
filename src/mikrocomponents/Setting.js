import React from "react";
import './setting.css';

class SettingForm extends React.Component{
    constructor(){
        super();
        this.state={
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
        }
    }
    render(){
        return(
           <>
           <form>
               <fieldset className="mainField">
                   <fieldset className="form-group">
                        <input type="text" placeholder="URL of profile picture" value={this.state.image}/>
                        
                   </fieldset>
                   <fieldset>
                       <input className="formelement" type="text" placeholder="Username" value={this.state.username} />
                   </fieldset>
                   <fieldset>
                       <textarea className="formtextarea" rows="8" placeholder="Short bio about you" value={this.state.bio}></textarea>
                   </fieldset>
                   <fieldset>
                       <input className="formelement" type="email" placeholder="Email" value={this.state.email} />
                   </fieldset>
                   <fieldset>
                       <input className="formelement pass" type="password" placeholder="New password" value={this.state.password} />
                   </fieldset>
                   <fieldset>
                       <button type="submit" className="setsubmit">Update Settings</button>
                   </fieldset>
               </fieldset>
           </form>
           
           </>
        );
    }
}

class Settings extends React.Component {
    render() {
      return (
        <div className="settings-page">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xs-12 setform">
  
                <h1 className="text-xs-center">Your Settings</h1>
  
                {/* <ListErrors errors={this.props.errors}></ListErrors> */}
  
                <SettingForm />
  
                <div className="line"></div>
  
                <button
                  className="btn btn-outline-danger ">
                  Or click here to logout.
                </button>
  
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Settings;