import React from "react";
import "./main.css";

const Main = props => (
     <div className="container">
        <div className = "main">
        <section className = "search">
            <h1>Search:</h1>
            <form onSubmit={submitSearch}>
            <div className="form-group">  
                <label htmlFor="topic">Topic</label>
                     <input type="text" className="form-control" id="topic"  />
             </div> 
             <div className="form-group">  
                <label htmlFor="topic">Start Year</label>
                     <input type="text" className="form-control" id="startyear"  />
             </div> 
             <div className="form-group">  
                <label htmlFor="topic">End Year</label>
                     <input type="text" className="form-control" id="endyear" />
             </div> 
             <button type="submit" className="btn btn-primary" onClick={submitSearch}>SEARCH</button>
            </form>
        </section>
        <section className="results">
        <h1>Results:</h1>
        </section>
        </div>
     </div>
);

function submitSearch(event) {
    console.log("Searching");
    event.preventDefault();
}

export default Main;