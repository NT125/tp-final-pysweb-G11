export class Registro {
    _id: string;
    peso: Number;
    imagenes: String;
    fecha_registro: String;

    registro(id?: string, peso?: Number, imagenes?: String, fecha_registro?: String){
        this._id = id; 
        this.peso = peso;
        this.imagenes = imagenes;
        this.fecha_registro = fecha_registro;
    }
}
