import { Ejercicio } from "./ejercicio";

export class Rutina {
    _id: string;
    nombre: string;
    ejercicios: Ejercicio;
    nivel: Number;

    rutina(id?: string, nombre?: string,ejercicios?: Ejercicio, nivel?: Number){
        this._id = id;
        this.nombre=nombre;
        this.ejercicios = ejercicios;
        this.nivel = nivel;
    }
}

