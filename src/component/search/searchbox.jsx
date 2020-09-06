import React, { Component } from 'react';
import './searchbox.css';


class SearchBox extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div className="searchBox">
                <input className="searchInput" type="text" placeholder="Type to search"/>
                <button className="searchBtn"><i className="fas fa-search"></i></button>
            </div>
         );
    }
}
 
export default SearchBox;