import React from 'react';
import {db} from '../firebase'

const Lista_De_Tareas = (props) => {
    const [nat, setNat] = React.useState(false) //Este state se llama asi por tontera mia, en realidad es el switch que activa el cambio
    const [objeto, setobjeto] = React.useState({})
    const [materias, setMaterias] = React.useState([])
    const [entradas, setEntradas] = React.useState([])
    const [materia, setMateria] = React.useState("")
    const [tema, setTema] = React.useState([])
    const [numeroTemas, setNumerosTema] = React.useState([])
   
    React.useEffect(() =>{
        const obtenerDato = async () =>{
            try {
                const data = await db.collection(props.user.uid).get()
                const mapData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];
                setMaterias(Object.keys(mapData.materias));
                setEntradas(Object.values(mapData.materias))
                setobjeto(mapData)          
            } catch (error) {
                console.log(error);
            }
        }
        obtenerDato()
    }, [] )

   

    const cambioAMateria = (e) =>{
            
        try{
            if(nat === false){
                setMateria(e.target.outerText)
                setTema(Object.keys(objeto.materias[materia]))
                setNumerosTema(Object.values(objeto.materias[materia]))
                setNat(true)
                     
            }else{
                setNat(false)  
            } 
        }catch(error){
            console.log(error)
        }
        
    }

    const obtenerId = ()=>{
        return Math.random() * (1000000000000000 - 1) + 1
    }
    
    return (
         <div>   
            {/* Fromulario creacion */}
            <form className="Formulario">
                <input className="Formulario_input" placeholder={
                    nat ? "Tema" : "Materia"
                } type="text"/>
                <button className="Formulario_boton" type="submit">CREAR</button>
                {
                    nat && <button type="button" onClick={() => {
                        cambioAMateria()
                    }}>Volver atras</button>
                }
            </form>
            {/* Fromulario creacion */}
            {/* Tabla */}
            <div className="Lista_materias">
               <div className="contenedor_materias">
                   {/* Titulo Materia/Tema */}
                   <div className="contenedor_titulo_materias">
                        <p className="titulo_materias">{
                            nat ? "Temas:" : "Materias:"
                        }</p>
                   </div>
                   {/* Items materia/tema */}
                    {   nat ? 
                         (tema.map(temas => (
                             <div key={obtenerId()}>{temas}</div>
                         )))                    
                        :
                        (materias.map(materia => (
                            <a onClick={cambioAMateria} 
                            key={obtenerId()}>
                            {materia}</a>
                        )))
                    }
               </div>
               <div className="contenedor_numero_entradas">
                   <div className="contenedor_titulo_entradas">
                        <p className="Titulo_entradas">{
                            nat ? "N° pagina:" : "N° Entradas:"
                        }</p>
                   </div>
                        {   nat ? 
                            (numeroTemas.map(numero =>(
                                <div key={obtenerId()}>{numeroTemas}</div>
                            )))
                            :
                            entradas.map((entrada)=>(
                                <div key={obtenerId()}>{Object.keys(entrada).length}</div>
                            ))
                        }
               </div>
            </div>
            {/* Tabla */}
        </div>
    );
}

export default Lista_De_Tareas;
