import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';

import {FormsModule} from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';



@NgModule({

    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        IncrementadorComponent
        

    ],
    exports:[

        DashboardComponent,
        ProgressComponent,
        Grafica1Component
        

    ],

    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule

    ]


})

export class PagesModule{}