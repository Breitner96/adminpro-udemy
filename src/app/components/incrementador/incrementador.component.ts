import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild ('txtprogress') txtprogress : ElementRef;

  @Input('nombre') leyenda: string='leyenda';
  @Input() porcentaje: number=50;

  @Output() cambioValor : EventEmitter<number> = new EventEmitter();


  constructor() { 

    // console.log('leyenda', this.leyenda);
    // console.log('porcentaje', this.porcentaje);
    

  }

  ngOnInit(): void {
    // console.log('leyenda', this.leyenda);
    // console.log('porcentaje', this.porcentaje);

  }
 
  newChange( newValue: number){

    // let elemHTMl: any= document.getElementsByName('porcentaje')[0];
    // console.log(this.txtprogress);

    if(newValue>=100){
      this.porcentaje=100;

    }
    else if(newValue<=0){
      this.porcentaje=0;

    }
    else{
      this.porcentaje=newValue;
    }


    // elemHTMl.value=this.porcentaje;
    this.txtprogress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
    this.txtprogress.nativeElement.focus();
    


  }
  
  cambiarValor(valor : number){

    if(this.porcentaje >= 100){
      this.porcentaje=100;
    }

    if(this.porcentaje <= 0){
      this.porcentaje=0;   
    }

    this.porcentaje= this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtprogress.nativeElement.value=this.porcentaje;
    this.txtprogress.nativeElement.focus();
    

  }

}
