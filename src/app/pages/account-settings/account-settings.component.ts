import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { url } from 'inspector';
import { $, element } from 'protractor';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private _document, private _ajustes: SettingsService) { }

  ngOnInit(): void {

    this.colocartema();
  }

  cambiarcolor(color: string, link:any ) {
    this.AplicarCheck(link);
    this._ajustes.aplicarColor(color);
  }

  AplicarCheck(link:any){

    let selector: any=document.getElementsByClassName('selector');
    

    for(let ref of selector){

      ref.classList.remove('working');

    }

    link.classList.add('working');
     
  }

  colocartema(){

    let selector: any=document.getElementsByClassName('selector');
    let tema= this._ajustes.ajustes.tema;

    for(let ref of selector){
      if(ref.getAttribute('data-theme')==tema){

        ref.classList.add('working');
        break;
      }
      

    }

  }

}
