export class Asistencia {
    _id: string;
    fechaasistencia: string;
    horaAsistencia: string;
    asistio:Boolean;


    asistencia(id?: string, fechaasistencia?:string, horaasistencia?:string, asistio?:Boolean){
        this._id = id;
        this.fechaasistencia = fechaasistencia;
        this.horaAsistencia= horaasistencia;
        this.asistio= asistio;
    }
}
