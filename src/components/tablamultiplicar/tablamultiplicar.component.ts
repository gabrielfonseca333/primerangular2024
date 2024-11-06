import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})


export class TablamultiplicarComponent {

  @ViewChild("cajanumero") cajaNumeroRef!: ElementRef;

  public tablaMultiplicar!: Array<{operacion:string, resultado: number}>

  rellenarTabla(): void {

    this.tablaMultiplicar=[]

    let num = this.cajaNumeroRef.nativeElement.value
    for(let i = 1; i<=10; i++){
      let result = i*num
      this.tablaMultiplicar.push(
        {
          operacion: i + " * " + num,
          resultado: result
        }
      )
    }

  }


}
