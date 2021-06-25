import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case true: return 'Sí';
      case false: return 'No';
    }
    return null;
  }
}
