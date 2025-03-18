//vendors
import React from "react";

//types
import { TareaListaProps } from "./types";

export function TareaLista<Tarea>({
  tareas,
  renderCallBack,
}: TareaListaProps<Tarea>) {
  return (
    <>
      <ul>
        {tareas.map((tarea, index) => {
          return <li key={`${index}`}>{renderCallBack(tarea)}</li>;
        })}
      </ul>
    </>
  );
}
export default TareaLista;
