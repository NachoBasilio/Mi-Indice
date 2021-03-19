import React from 'react';
import NavBar from '../component/NavBar';

const Layout = ({children, firebaseUser }) => {
    
    return (
        <div>
            <NavBar firebaseUser={firebaseUser}/>
            {children}
        </div>
    );
}

export default Layout;
