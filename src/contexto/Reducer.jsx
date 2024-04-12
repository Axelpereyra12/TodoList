const QuitarTarea = "QuitarTarea";
const AgregarTarea = "AgregarTarea";

export default function Reducer(state, action) {
    const { payload, type } = action; 
    switch (type) {  
        case AgregarTarea:
            return { ...state, ListaTareas: [...state.ListaTareas, payload] }; 
            case QuitarTarea:
                return { ...state, ListaTareas: state.ListaTareas.filter(tarea => tarea !== payload) };
    }
}