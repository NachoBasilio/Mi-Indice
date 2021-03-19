import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {auth} from '../firebase';
import "./styles/NavBar.css"

const NavBar = (props) => {
    const cerrarSesion = () => {
        auth.signOut()
            .then(() =>{
                props.history.push('/');
            })
    }

    return (
        <div className="Fondo-BarraDeNavegacion">
            <div className="BarraDeNavegacion">
                <Link className="Logo" to="/" >Logo</Link>
                <nav>
                    <Link className="BarraDeNavegacion_Items" to="/home">Home</Link>
                    {
                        props.firebaseUser !== null ? (
                            <button className="BarraDeNavegacion_Items" onClick={()=>{
                                cerrarSesion()
                            }} >Cerrar cuenta</button> 
                        ) : (
                            <Link className="BarraDeNavegacion_Items" to="/login">Login</Link>
                        )
                    }
                    
                    
                </nav>
            </div>
        </div>
    );
}

export default withRouter(NavBar);
