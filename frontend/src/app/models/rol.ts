export class Rol {
    _id: string;
    nombre: String;

    rol(id?: string, nombre?: string){
        this._id = id;
        this.nombre = nombre;
    }

}
