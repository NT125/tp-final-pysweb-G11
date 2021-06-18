export class Plan {
    _id: string;
    cantidadDias: Number;
    precio: Number;
    tipo: String

    plan(id?: string, cantidadDias?: Number, precio?: Number, tipo?: String){
        this._id = id;
        this.cantidadDias = cantidadDias;
        this.precio = precio;
        this.tipo = tipo;
    }
}
