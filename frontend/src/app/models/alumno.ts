import { Asistencia } from "./asistencia";
import { Pago } from "./pago";

export class Alumno {
    _id: string;
    usuario:'Usuario';
    apellido: String;
    nombre: String;
    nro_documento: String;
    fecha_nacimiento: String;
    celular: Number;
    fecha_inicio: String;
    domicilio: String;
    email: String;
    nivel: String;
    horario:Array<String>;
    asistencia: Array<Asistencia>;
    registro: 'Registro.schema';
    pago: Array<Pago>;
    plan: String;
    rutina: 'Rutina';

}
