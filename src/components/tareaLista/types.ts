export interface TareaListaProps<Tarea> {
    tareas: Tarea[];
    renderCallBack: (tarea: Tarea) => React.ReactNode;
}
