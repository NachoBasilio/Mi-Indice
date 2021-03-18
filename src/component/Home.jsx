import React from 'react';
import "./styles/Home.css"

const Home = () => {
    return (
        <div>   
            <form className="Formulario">
                <input className="Formulario_input" placeholder="Materia" type="text"/>
                <button className="Formulario_boton" type="submit">CREAR</button>
            </form>
            <div className="Lista_materias">
               <div className="contenedor_materias">
                   <div className="contenedor_titulo_materias">
                        <p className="titulo_materias">Materias:</p>
                   </div>
               </div>
               <div className="contenedor_numero_entradas">
                   <div className="contenedor_titulo_entradas">
                        <p className="Titulo_entradas">N° de entradas:</p>
                   </div>
               </div>
                
            </div>
        </div>
    );
}

export default Home;
