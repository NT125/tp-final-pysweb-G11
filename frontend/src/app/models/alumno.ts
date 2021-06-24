import { Asistencia } from "./asistencia";
import { Pago } from "./pago";
import { Registro } from "./registro";
import { Rutina } from "./rutina";
import { Usuario } from "./usuario";

export class Alumno {
    _id: string;
    usuario: Usuario;
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
    registro: Array<Registro>;
    pago: Array<Pago>;
    plan: String;
    rutina: Array<Rutina>;

}
