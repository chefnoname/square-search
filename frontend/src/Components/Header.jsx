import React from 'react';
import SearchBar from './SearchBar';

import './Header.scss'

const Header = () => {
    return (
        <header className="masthead" id="header">
            <div className="container">
                <div className="masthead-heading text-uppercase">Find a <span className="text-primary">role</span> and get
                    innovating</div>
                <div className="row">
                   <SearchBar />
                </div>
            </div>

        </header >
    )
}

export default Header;
