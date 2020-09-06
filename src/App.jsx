import React, { Component } from 'react';
import Navbar from './component/header/navbar';
import Footer from './component/footer/footer';
import Main from './component/main/main';
import './app.css';

class App extends Component {
    state = { 
        navigation: [
            {title: 'Home', url: '#'},
            {title: 'Services', url: '#'},
            {title: 'Shop', url: '#'},
            {title: 'About', url: '#'},
            {title: 'Contact', url: '#'},
        ],
     }
    render() { 
        return ( 
            <div>
                <Navbar navigation={this.state.navigation}/>
                <Main />
                <Footer navigation={this.state.navigation} />
            </div>
         );
    }
}
 
export default App;