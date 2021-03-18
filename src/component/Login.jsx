import React from 'react';
import "./styles/Login.css"

const Login = () => {
    return (
        <div>
            <form className="formulario_login">
                <input type="email"/>
                <input type="password"/>
                <button className="Login_register" type="submit">Login</button>
                <button className="Crear_logearte" type="text">No tienes cuenta</button>
            </form>
        </div>
    );
}

export default Login;
