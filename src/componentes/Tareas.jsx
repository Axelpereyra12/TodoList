import React, { useContext } from "react";
import Contexto from "../contexto/Contexto";
import "../assets/css/Tareas.css";

function Tareas(props) {
    const { listaTareas } = props;
    const { QuitarTarea } = useContext(Contexto);

    console.log("la lista",listaTareas)

    const handleClick = (tarea) => {
        console.log("se quito el objeto", tarea);
        QuitarTarea(tarea);
    }

    return ( 
        <>
            <ul>
                {listaTareas.map((tarea) => (
                    <li key={tarea.id}>{tarea.nombre} <img src={tarea.icono} alt="Icono de tarea" /><button type="button" onClick={() => handleClick(tarea)}>Quitar tarea</button></li>
                ))}
            </ul>
        </>
    );
}

export default Tareas;

