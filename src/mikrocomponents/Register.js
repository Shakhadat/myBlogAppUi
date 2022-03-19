import React, { Fragment, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { register } from "../reducer";
// import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
// import toast from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
// import { signupUser, userSelector, clearState } from "../reducer";
// apini post qiluvchi lar
// import { useGetPostsQuery } from '../api/apiSlice'





// apilar bn ishlaymiz
const Register =()=>{
    const [data, setData]=useState({});
    const [username, setUsername]=useState('');
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const onUserchange=e=>setUsername(e.target.value);
    const onEmailchange=e=>setEmail(e.target.value);
    const onPasswordchange=e=>setPassword(e.target.value);


    const state = useSelector(state => state);
   
    const dispatch=useDispatch();
    // const { register, errors, handleSubmit } = useForm();

    // const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    //     userSelector
    //   );

 console.log(state?.user)

const onSubmit=(e)=>{
        e.preventDefault();
        // dispatch(signupUser(data));
        dispatch(register({id:nanoid(), username, email, password}));
        setUsername("");
        setEmail("");
        setPassword("");
}

    // actionlarni ishlatish:

   return(
            <React.Fragment>
                  
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="cetrtext">
                <Link to="/login" className="subtitletext">
                  Have an account?
                </Link>
              </p>
              <form className="loginform">
                  <fieldset>
                      <input type="text" value={username} className="LoginInput" placeholder="Username" onChange={onUserchange}/>
                  </fieldset>
                  <fieldset>
                      <input type="email" value={email} className="LoginInput" placeholder="Email" onChange={onEmailchange}/>
                  </fieldset>

                  <fieldset>
                      <input type="password" value={password} className="LoginInput" placeholder="Password" onChange={onPasswordchange}/>
                  </fieldset>

                  <fieldset>
                      <button type="submit" className="SignBtn" onClick={onSubmit}>Sign in</button>
                  </fieldset>
              </form>

            </React.Fragment>
        );
    }


export default Register;