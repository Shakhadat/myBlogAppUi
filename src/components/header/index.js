import React from "react";
import Settings from "../../mikrocomponents/Setting";
import ArticleList from "../feedcollection";
// import Settings from "../../mikrocomponents/Setting.js";
import './header.css'

const Header=() =>{
    return(
        <>
            <div className="container header">
            <div className="form">
                    {/* <button className="feedBtn">Your Feed</button> */}
                    <button className="feedBtn">Global Feed</button>
            </div>

            <div className="PopularTag">
                <h3 className="TagsTitle">Popular Tags</h3>
                <button className="poptagBtn">Welcome</button>
                <button className="poptagBtn">Implementation</button>
                <button className="poptagBtn">CodebaseShow</button>
                <button className="poptagBtn">introduction</button>
            </div>
           
        </div>
<div className="container">
<div className="blogcontent">
    
<ArticleList/>

</div>
    
</div>
        </>
        
    );
}

export default Header;