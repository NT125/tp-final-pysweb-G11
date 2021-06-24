import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function verificarMayuscula(c: AbstractControl) {
  let texto: string = String(c.value);
    if (texto == null){
      return null;
    }
    if (texto.charAt(0) != texto.charAt(0).toUpperCase()) {
    return { sinLetraMayuscula: true }
    }
  return null;
}

@Directive({
  selector: '[sin-mayuscula]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: verificarMayuscula }
  ]
})

export class SinMayuscula {
  constructor() { }
}



function contPalabras(c: AbstractControl) {
  var text = String(c.value);
  text = text.replace(/\r?\n/g, " ");
  text = text.replace(/[ ]+/g, " ");
  text = text.replace(/^ /, "");
  text = text.replace(/ $/, "");
  var textP = text.split(" ");
  var numPalabras = textP.length;
      if (text == null) {
        return null;
      }
      if (numPalabras < 5) {
        return { contPalabra: true }
      }
  return null;
}

@Directive({
  selector: '[cont-palabras]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: contPalabras }
  ]
})

export class ContarPalabra {
  constructor() { }
}




function verNumeros(c:AbstractControl){
  if (c.value == null) {
    return null;
  }
  if(/^[0-9 ]*$/.test(c.value) == false){
    return {soloNum: true}
  }
  return null;
 } 

 @Directive({
  selector: '[solo-numeros]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:verNumeros}
    ]
})

export class SoloNumeros {
  constructor() { }
}



function verNumNegativo(c: AbstractControl) {
  let num: number = Number(c.value);
    if (num == null) {
      return null;
    }
    if (num <= 0) {
      return { verNumNegativo: true }
    }
  return null;
}

@Directive({
  selector: '[ver-negativo]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: verNumNegativo }
  ]
})

export class VerificarNegativo {
  constructor() { }
}



function controlarFechaDeNac(c: AbstractControl) {


}

@Directive({
  selector: '[ver-fdn]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: controlarFechaDeNac }
  ]
})

export class VerificarFechaNac {
  constructor() { }
}



function controlarFechaDeIn(c: AbstractControl) {


}

@Directive({
  selector: '[ver-fdi]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: controlarFechaDeIn }
  ]
})

export class VerificarFechaIn {
  constructor() { }
}


@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {

  constructor() { }
}