export class Registro {
    _id: string;
    peso: Number;
    dieta: String;
    imagen: String;
    fecha_registro: String;

    registro(id?: string, peso?: Number, imagenes?: String, fecha_registro?: String, dieta?:string){
        this._id = id; 
        this.peso = peso;
        this.dieta=dieta;
        this.imagen = imagenes;
        this.fecha_registro = fecha_registro;
    }
}
