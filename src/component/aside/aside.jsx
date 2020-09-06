import React, { Component } from 'react';
import './aside.css';
import me from './../../assets/Me.jpg';

class Aside extends Component {
    state = { 

     }
    render() { 
        return ( 
            <aside>
                <div>
                    <img src={me} className="profile-image" alt="this is me"/>
                    <h2>Chettout Abdeslam</h2>
                    <p>Clita et voluptua voluptua at aliquyam rebum, dolore sanctus amet dolor sit. Magna ipsum rebum rebum sed dolor diam dolores.</p>
                    <button className="btn aside-btn">View profile</button>
                    <button className="btn aside-btn">Download my cv</button>
                </div>
                <hr/>
            </aside>
         );
    }
}
 
export default Aside;