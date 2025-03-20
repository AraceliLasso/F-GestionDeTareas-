//vendors
import React from "react";

//types
import { Tarea1 } from "./types";

export const ordenes: Tarea1[] = [
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

export const ordenRenderer = (orden: Tarea1) => {
  return (
    <div>
      <p>{orden.id} </p>
      <ul>
        {orden.tareas.map((tarea) => (
          <li>{tarea} </li>
        ))}
      </ul>
    </div>
  );
};
