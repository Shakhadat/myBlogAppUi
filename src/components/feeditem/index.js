import avatar from '../../avatar.jfif'
import React from "react";
import './article.css'
// import UseFetch from '../../api/Apifetch.js'
import { useEffect, useState } from 'react';

const ArticlePreview=()=>{

    // const {data, loading, error}=UseFetch("http://jsonplaceholder.typicode.com/posts");
    const [users, setUsers] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(null);

    const fetchData = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data)
        }catch(error){
            console.log(error);
            setError(error);
        }finally {
            console.log(`All Tasks is Done`);
            setLoading(true);
          }
     
    }
    useEffect(() => {
        fetchData()
      }, [])

    if(!loading){
      return(
        <h1>
          Loading...
        </h1>
      );
    }
  
    if(error) console.log("error", error);


    return(
        <>
        {/* {console.log(data)} */}

        <div>
      {users.length > 0 && (
        <div>
             {users.map(user => (
            // <li key={user.id}>{user.name}</li>
            <div className="article-preview">
            <div className="article-meta">
                <div className="leftside">
                <a href="#"> <img src={avatar} alt="avatar" className='avatarImg'/></a>
               
               <div className="info">
                <a href="#" className='avftorName'>{user.name}</a>
                   <span className='blogDate'>{user.email}</span>
               </div>
                </div>
                
                <div className="likeselectr">
                    <button className='likes'><ion-icon name="heart"></ion-icon><span>1173</span></button>
                </div>
            </div>

            <a href="#" className='preview-link'>
                <h1 className='blogtitle'>{user.company.catchPhrase}</h1>
                <p className='light-text'>join the community by creating a new implementation</p>
                <div className="footArticle">
                <span className='light-text'><a href="#">Read more...</a></span>
                <ul className='tag-list'>
                    <li><a href="#">{user.address.city}</a></li>
                    {/* <li><a href='#'></a></li> */}
                </ul>
                </div>
              
               
            </a>
        </div>

          ))}
        </div>
         
        
      )}
    </div>
        
        {/* <div className="article-preview">
            <div className="article-meta">
                <div className="leftside">
                <a href="#"> <img src={avatar} alt="avatar" className='avatarImg'/></a>
               
               <div className="info">
                   <a href="#" className='avftorName'>Shahodat</a>
                   <span className='blogDate'>Wed Nov 24 2021</span>
               </div>
                </div>
                
                <div className="likeselectr">
                    <button className='likes'><ion-icon name="heart"></ion-icon><span>1173</span></button>
                </div>
            </div>

            <a href="#" className='preview-link'>
                <h1 className='blogtitle'>Create a new implementation</h1>
                <p className='light-text'>join the community by creating a new implementation</p>
                <div className="footArticle">
                <span className='light-text'><a href="#">Read more...</a></span>
                <ul className='tag-list'>
                    <li><a href="#">Implementations</a></li>
                    {/* <li><a href='#'></a></li> */}
                {/* </ul>
                </div>
              
               
            </a>
        </div> */} 
        </>
    );
}
export default ArticlePreview;