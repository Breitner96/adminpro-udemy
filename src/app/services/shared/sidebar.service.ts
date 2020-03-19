import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any=[
    {
      titulo:'principal',
      icono:'mdi mdi-gauge',
      submenu:[ 
          { titulo:'Dashboard',url:'/dashboard'},
          { titulo:'Progressbar',url:'/progress'},
          { titulo:'Grafica1',url:'/grafica1'}

        ]
    } 

  ];

  constructor() { }
}
