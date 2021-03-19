import React from 'react';
import { withRouter } from 'react-router';
import {auth} from "../firebase"
import "./styles/Home.css"
import Lista_De_Tareas from "./Lista_De_Tareas"

const Home = (props) => {
    const [user, setUser] = React.useState(null)
    
    React.useEffect(() =>{
        if(auth.currentUser){
            setUser(auth.currentUser);
            console.log("existe un usuario")

        }else{
            console.log('No existe un usuario')
            props.history.push('/login')
        }
    },[])
    return (
        <div>
            {
                user && (
                    <Lista_De_Tareas user={user}/>
                )
            }
            
        </div>       
    );
}

export default withRouter(Home);
