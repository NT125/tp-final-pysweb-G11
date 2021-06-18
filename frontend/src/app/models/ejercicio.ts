export class Ejercicio {
    _id: string;
    descripcion: string;
    zona: string;
    intensidad: string;
    repeticiones: number;

    asistencia(id?: string, descripcion?:string, zona?:string, intensidad?:string, repeticiones?:number){
        this._id = id;
        this.descripcion = descripcion;
        this.zona = zona;
        this.intensidad = intensidad;
        this.repeticiones = repeticiones;
    }

}
