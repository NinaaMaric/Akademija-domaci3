import React, { Component } from 'react';
import Navigation from './components/Navigation';

class Layout extends Component {
    state = {  }
    render() { 
        return (
            <div className="page-wrapper">
                <Navigation/> 
                {this.props.children}
            </div>
        );
    }
}
 
export default Layout;