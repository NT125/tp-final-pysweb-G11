export class Entrenador {
    _id: string;
    nombre: string;
    apellido: string;

    entrenador(id?: string, nombre?: string, apellido?: string){
        this._id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
  
}
