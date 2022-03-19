import React from "react";
// import Settings from "../../mikrocomponents/Setting";
import ArticlePreview from '../feeditem'
// import Settings from "../../mikrocomponents/Setting";
// import Editor from "../../mikrocomponents/Editor";
const props=true;
let arr=[1,2,3]

const  ArticleList =()=>{

    if(!props){
        return(<div className="article-preview">Loading...</div>);
    }
    if(arr.length===0){return(
        <div className="article-preview">
        No articles are here... yet.
      </div>
    );}

    return(
        <>
            <ArticlePreview/>
            
            {/* <Editor/> */}
        </>
        
    );
}
export default ArticleList;