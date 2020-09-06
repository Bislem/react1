/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import SearchBox from './../search/searchbox';
import './footer.css';

class Footer extends Component {
    state = { 
        contacts: [
            {title:'mail me' ,url:'mailto:chettoutabdeslam@gmail.com'},
            {title: 'contact me' ,url:'tel:+213664768495'},
            {title: 'youtube' , url: '#' },
            {title: 'facebook' , url: '#'},

        ],
     }
    render() { 
        return ( 
            <footer>
                <div>
                    <a href="#" className="logo"><span className="dnone">Logo</span></a>
                    <p>Magna lorem duo at et erat amet, no takimata voluptua ut sanctus at tempor rebum sea labore. Est justo accusam.</p>
                    <p>
                        <span><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></span>
                        <span><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a></span>
                        <span><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square"></i></a></span>
                    </p>
                </div>
                <div>
                    <h4>Short Links</h4>
                    <ul className="shortLinks">
                        {this.props.navigation.map((item,index) => (
                            <li key={index}><a className="shortLink" href={item.url}>{item.title}</a></li>
                        ))}
                    </ul>
                    <SearchBox />
                </div>
                <div>
                    <h4>Contacts</h4>
                    <ul className="shortLinks">
                            {this.state.contacts.map((item,index) => (
                                <li key={index}><a className="shortLink" target='blank' href={item.url}>{item.title}</a></li>
                            ))}
                    </ul>
                </div>
            </footer>
         );
    }
}
 
export default Footer;