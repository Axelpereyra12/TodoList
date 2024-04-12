import React, { useReducer } from 'react';
import Reducer from "./Reducer";
import Contexto from "./Contexto"; // Corregido el corchete aquí

function UsarContexto(props) {
    const { children } = props;

    const EstadoInicial = { 
        ListaTareas: [],
    };

    const [state, dispatch] = useReducer(Reducer, EstadoInicial);

    const AgregarTarea = (item) => {
        dispatch({ type: "AgregarTarea", payload: item });
    };

    const QuitarTarea = (item) => {
        dispatch({ type: "QuitarTarea", payload: item });
    };

    const DevolverIcono = (categoria) => {
        if (categoria === "limpieza") {
            return "https://img.icons8.com/dusk/64/broom.png";
        } else if (categoria === "deporte") {
            return "https://img.icons8.com/cotton/64/football-ball.png";
        } else if (categoria === "estudio") {
            return "https://img.icons8.com/plasticine/100/books.png";
        }
    }; // Corregido el corchete aquí

    return ( 
        <Contexto.Provider value={{ ListaTareas: state.ListaTareas, AgregarTarea, QuitarTarea, DevolverIcono }}>
            {children}
        </Contexto.Provider>
    );
}

export default UsarContexto;
