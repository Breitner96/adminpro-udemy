import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes={

    temaUrl:'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    
    this.cargaragustes();
  }

  guardarajustes(){

    // console.log('Se han guardado los datos');
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));

  }

  cargaragustes(){

    if (localStorage.getItem('ajustes')){
      
      // console.log('Se han cargados los ajustes');
      this.ajustes= JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarColor(this.ajustes.tema);

    }
    else{
      // console.log('Usando valores por defecto');
      this.aplicarColor(this.ajustes.tema);

    }

  }

  aplicarColor(color:string){

    let url= `assets/css/colors/${color}.css`

    this._document.getElementById('theme').setAttribute('href',url);

    this.ajustes.tema=color;
    this.ajustes.temaUrl=url;
    this.guardarajustes();
  }

}

interface Ajustes{

  temaUrl: string;
  tema: string;
}
