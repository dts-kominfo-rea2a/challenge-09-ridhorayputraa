// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import  '../App.css';
const Header = () => {
    return (
        <div class="header-container">
            <div class="header">
          <h1 class="content-h">Call a Friend</h1>
          <p class="content-p" >you friendly contact app</p>
          <span class="content-s">**************************************************************************</span>
        </div>
        </div>
    )
}

export default Header;