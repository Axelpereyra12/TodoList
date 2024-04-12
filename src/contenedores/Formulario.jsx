import React, { useState } from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { Link } from "react-router-dom";
import "../assets/css/Formulario.css";

function Formulario() {
    const [tarea, setTarea] = useState(""); // Estado local para el valor del input
    const [categoria, setCategoria] = useState('');

    const { ListaTareas, AgregarTarea, DevolverIcono } = useContext(Contexto);

    const nuevaTarea = {
        nombre: tarea,
        categoria: categoria,
        icono: DevolverIcono(categoria)
    };

    const agregar = () => {
        AgregarTarea(nuevaTarea); // Pasar el valor del input a la función AgregarTarea
        setTarea(""); // Limpiar el input después de agregar la tarea
    };
    console.log("la tarea cargada: ", ListaTareas)

    return (
        <>
        <div className="contenedor">
            <form>
                <label htmlFor="tarea">Agregar tarea</label>
                <input id="tarea" type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} />
                <br />
                <label htmlFor="categoria">Seleccione la categoría de la tarea:</label>
                <select name="categoria" id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Seleccione una categoría</option>
                    <option value="limpieza">Limpieza</option>
                    <option value="estudio">Estudio</option>
                    <option value="deporte">Deporte</option>
                </select>
                <br />

                <Link to="/">
                    <button className="boton" type="button" onClick={agregar}>Agregar</button>
                </Link>
            </form>  
        </div>  

        </>
    );
}

export default Formulario;
