import React from 'react';
import "./styles/Login.css"
import {db, auth} from "../firebase"
import { withRouter } from 'react-router';

const Login = (props) => {
    const [registerMode, setRegisterMode] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState(null)
    
    const cambiaModo = () => {
        if(registerMode === false){
            setRegisterMode(true)
        }else{setRegisterMode(false)}
    }
    
    const procesarDatos = (e) => {
        e.preventDefault()
        if(!email.trim()){
            setError('Mete un email');
            return
        }
        if(!password.trim()){
            setError('Mete una contraseña');
            return
        }
        if(!password.trim() > 6){
            setError('Tu contraseña es muy pequeña')
            return
        }
        setError(null)

        if(registerMode){
            registrar()
        }else{
            login()
        }
    }

    const login = React.useCallback(async()=>{
        try {
            const response = await auth.signInWithEmailAndPassword(email, password)
            setEmail("")
            setError(null)
            setPassword("")
            props.history.push("/home")
        } catch (error) {
            setError(error.message)
        }
    }, [email, password])

    const registrar = React.useCallback(async() =>{
        try {
            const response = await auth.createUserWithEmailAndPassword(email, password)
            await db.collection('usuarios').doc(response.user.uid).set({
                email: response.user.email,
                uid: response.user.uid
            })
            await db.collection(response.user.uid).add({
                materias: {
                    
                }
            })
            setEmail("")
            setError(null)
            setPassword("")
            props.history.push("/home")
        } catch (error) {
            setError(error.message);
        }
    },[email, password])
    return (
        <div>
            <form className="formulario_login" onSubmit={procesarDatos}>
                {
                    error && (<div>{error}</div>)
                }
                <input 
                type="email"
                placeholder="email"
                value={email}
                onChange={e =>setEmail(e.target.value)}
                />
                <input 
                type="password"
                placeholder="password"
                value={password}
                onChange={e =>setPassword(e.target.value)}
                />
                {
                    registerMode ? 
                    <button className="Login_register" type="submit">Register</button>
                    :
                    <button className="Login_register" type="submit">Login</button>
                }
                {
                    registerMode ? 
                    <button className="Crear_logearte" onClick={()=>{cambiaModo()}} type="button">Ya tienes una cuenta</button>
                    :
                    <button className="Crear_logearte" onClick={()=>{cambiaModo()}} type="button">No tienes cuenta</button>
                }
                
            </form>
        </div>
    );
}

export default withRouter(Login);
