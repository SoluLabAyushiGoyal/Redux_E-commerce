import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMid from './HeaderMid';
import HeaderBottom from './HeaderBottom';


const Header = () => {
    return (
        <header id="header">
          <HeaderTop />
          <HeaderMid />
          <HeaderBottom />
        </header>
    );
}

export default Header;