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
    asistencia: 'Asistencia.schema';
    registro: 'Registro.schema';
    pago: 'Pago.schema';
    plan: 'Plan';
    rutina: 'Rutina';

    alumno(id?: string, usuario?: 'Usuario', apellido?: String, nombre?: String, nro_documento?: String, fecha_nacimiento?: String, celular?: Number, fecha_inicio?: String, domicilio?: String,
           email?: String, nivel?: String, asistencia?: 'Asistencia.schema', registro?: 'Registro.schema', pago?: 'Pago.schema', plan?: 'Plan', rutina?: 'Rutina'){
        this._id = id;
        this.usuario = usuario;
        this.apellido = apellido;
        this.nombre = nombre;
        this.nro_documento = nro_documento;
        this.fecha_nacimiento = fecha_nacimiento;
        this.celular = celular;
        this.fecha_inicio = fecha_inicio;
        this.domicilio = domicilio;
        this.email = email;
        this.nivel = nivel;
        this.asistencia = asistencia;
        this.registro = registro;
        this.pago = pago;
        this.plan = plan;
        this.rutina = rutina;

    }
}
