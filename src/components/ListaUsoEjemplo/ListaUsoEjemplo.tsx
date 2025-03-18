import React from "react";
import { TareaLista } from "../tareaLista/tareaLista";

interface Tarea1 {
  id: string;
  tareas: string[];
}

const ordenes: Tarea1[] = [
  {
    id: "1",
    tareas: ["Barrer", "Lavar platos", "Colgar ropa"],
  },
  {
    id: "2",
    tareas: ["Cantar", "Correr", "Hacer 5 min de yoga"],
  },
  {
    id: "3",
    tareas: ["Bailar", "Correr", "Hacer 15 min de yoga"],
  },
];

const ordenRenderer = (orden: Tarea1) => {
  return (
    <div>
      <p>{orden.id}</p>
      <ul>
        {orden.tareas.map((tarea) => (
          <li>{tarea}</li>
        ))}
      </ul>
    </div>
  );
};

export const ListaUsoEjemplo: React.FC = () => {
  return (
    <>
      <TareaLista tareas={ordenes} renderCallBack={ordenRenderer} />
    </>
  );
};

export default ListaUsoEjemplo;
