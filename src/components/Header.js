import React from 'react';
import logo from '../logo.png';

class Header extends React.Component {
    render() {
        return (
        <div className="row navigation">
            <img src={logo} className="logo" alt="logo" />
            <h1>Nord Software</h1>
        </div>
        )
    }
}

export default Header;
