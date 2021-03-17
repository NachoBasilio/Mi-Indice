import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/NavBar.css"

const NavBar = () => {
    return (
        <div className="Fondo-BarraDeNavegacion">
            <div className="BarraDeNavegacion">
                <div className="Logo">Logo</div>
                <nav>
                    <Link className="BarraDeNavegacion_Items" to="/home">Home</Link>
                    <Link className="BarraDeNavegacion_Items" to="/login">Login</Link>
                    <button className="BarraDeNavegacion_Items" >Cerrar cuenta</button>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
