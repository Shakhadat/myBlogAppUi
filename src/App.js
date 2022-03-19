
import './App.css';
import React from 'react';
import Navbar from './components/navbar';

// import { Route, Router } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import Navbar from './components/navbar';
import Article from './mikrocomponents/Articl';
import Editor from './mikrocomponents/Editor';
import Home from './mikrocomponents/Home';
import Login from './mikrocomponents/Login';
import Register from './mikrocomponents/Register';
import Settings from './mikrocomponents/Setting';
import Profile from './mikrocomponents/Profile';
import ProfileFavorites from './mikrocomponents/ProfileFavorites';

class App extends React.Component {
  render(){
    return (
      <div>
       
       <Navbar/>
    
        <Routes>
       
             <Route path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/editor/:slug" element={<Editor/>} />
            <Route path="/editor" element={<Editor/>} />
            <Route path="/article/:id" element={<Article/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/@:username/favorites" element={<ProfileFavorites/>} />
            <Route path="/@:username" element={<Profile/>} />
           
            </Routes>

      
          
      </div>
    );
  }
 
}

export default App;
