export class Rutina {
    _id: string;
    ejercicios: "Ejercicio.schema";
    nivel: Number;

    rutina(id?: string, ejercicios?: "Ejercicio.schema", nivel?: Number){
        this._id = id;
        this.ejercicios = ejercicios;
        this.nivel = nivel;
    }
}

