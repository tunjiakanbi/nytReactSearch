import React from "react";
import "./main.css";

const Main = props => (
     <div className="container">
        <div className = "main">
        <section className = "search">
            <h1>Search:</h1>
            <form>
            <div className="form-group">  
                <label for="topic">Topic</label>
                     <input type="text" class="form-control" id="topic"  />
             </div> 
             <div className="form-group">  
                <label for="topic">Start Year</label>
                     <input type="text" class="form-control" id="startyear"  />
             </div> 
             <div className="form-group">  
                <label for="topic">End Year</label>
                     <input type="text" class="form-control" id="endyear" />
             </div> 
             <button type="submit" className="btn btn-primary">SEARCH</button>
            </form>
        </section>
        <section className = "results">
        <h1>Results:</h1>
        </section>
        </div>
     </div>
);

export default Main;