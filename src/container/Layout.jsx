import React from 'react';
import NavBar from '../component/NavBar';

const Layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
}

export default Layout;
