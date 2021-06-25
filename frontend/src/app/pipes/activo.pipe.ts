import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activo'
})
export class ActivoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? "Activo" : "Inactivo";
  }
}

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? "Sí" : "No";
  }
}
