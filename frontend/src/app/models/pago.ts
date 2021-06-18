export class Pago {
    _id: string;
    monto: number;
    fechaPago: string;
    metodoPago: string;
    completo: Boolean;
    cuota: number;

    pago(id?: string, monto?: number, fechaPago?: string, metodoPago?: string, completo?: Boolean, cuota?: number){
        this._id = id;
        this.monto = monto;
        this.fechaPago = fechaPago;
        this.metodoPago = metodoPago;
        this.completo = completo;
        this.cuota = cuota;
    }
}
