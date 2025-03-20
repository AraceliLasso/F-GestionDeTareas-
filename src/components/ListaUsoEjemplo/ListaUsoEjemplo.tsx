//vendors
import React from "react";

//components
import { TareaLista } from "../tareaLista/tareaLista";

//types
import { Tarea1 } from "./types";

//utils
import { ordenRenderer, ordenes } from "./utils";

export const ListaUsoEjemplo: React.FC = () => {
  return (
    <>
      <TareaLista tareas={ordenes} renderCallBack={ordenRenderer} />
    </>
  );
};

export default ListaUsoEjemplo;
