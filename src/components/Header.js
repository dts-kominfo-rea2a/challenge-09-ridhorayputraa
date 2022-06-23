// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import  '../App.css';
const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
          <h1 className="content-h">Call a Friend</h1>
          <p className="content-p" >you friendly contact app</p>
          <span className="content-s">**************************************************************************</span>
        </div>
        </div>
    )
}

export default Header;