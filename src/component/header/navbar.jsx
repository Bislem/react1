/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
    state = { 
        navItems: this.props.navigation,
        toggle: false,
        
     };

    bars = <i className="fas fa-bars"></i>;
    close = <i className="fas fa-times"></i>;
    toggleMobileMenu = () => {
        this.setState({toggle: !this.state.toggle});
    }
    render() { 
        return (
            <nav>
            <a href="#" className='logo'><span className="dnone">Logo</span></a>
            <ul className={(this.state.toggle) ? 'nav' : 'nav hide'}>
                {this.state.navItems.map((item,index)=>(
                    <li key={index}><a href={item.url} className="navlink" >{item.title}</a></li>
                ))}

            </ul>
                <span onClick={this.toggleMobileMenu} className='bars'>{this.state.toggle ? this.close : this.bars}</span>
            </nav>
         );
    }
}
 
export default Navbar;