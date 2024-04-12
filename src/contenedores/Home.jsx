import React, { useContext } from "react";
import Contexto from "../contexto/Contexto";
import Tareas from "../componentes/Tareas";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";


function Home() {
    const { ListaTareas } = useContext(Contexto);

    return (
        <>
        <div className="ContenedorHome">
            <div className="lista">
            <Tareas listaTareas={ListaTareas} /> 
            <Link to="/formulario">
                <button>nueva tarea</button>
            </Link>
            </div>
        </div>
        </>
    );
}

export default Home;