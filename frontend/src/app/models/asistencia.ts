export class Asistencia {
    _id: string;
    fechaasistencia: string

    asistencia(id?: string, fechaasistencia?:string){
        this._id = id;
        this.fechaasistencia = fechaasistencia;
    }
}
