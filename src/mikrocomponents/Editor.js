import React from "react";
import './edit.css'

class Editor extends React.Component{
    render(){

        return(
           <>
           <form>
               <fieldset>
                   <fieldset>
                   <input type="text" placeholder="Article Title" />
                   </fieldset>
                   <fieldset>
                   <input type="text" placeholder="What is article abouts" />
                   </fieldset>
                   <fieldset>
                   <textarea name="article" className="textArt" id="art" cols="30" rows="10" placeholder="Write your article(in markdown)"></textarea>
            
                   </fieldset>

                   <fieldset>
                   <input type="text"  placeholder="Enter Tag" />
                   </fieldset>

                   <fieldset>
                  
                   <button type="submit" className="ArtSub">Publish Article</button>
                   </fieldset>
               </fieldset>
              
              
                 
             
           </form>
           </>
        );
    }
}

export default Editor;