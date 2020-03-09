import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes:Routes = [
    {
        path:'',
        component: PagesComponent,
        children: [
            {path:'dashboard', component: DashboardComponent},
            {path:'progress', component: ProgressComponent},    
            {path:'grafica1', component: Grafica1Component},
            //Cuando detecta un caracter vacia lo redirecciona
            {path:'', redirectTo:'/dashboard', pathMatch:'full'}

        ]
    
    
    },


    {path:'login', component: LoginComponent},
    
    {path:'register', component: RegisterComponent},
    //Cuando no encuentra ninguna ruta especificada
    {path:'**', component:NopagefoundComponent},

];

export const APP_ROUTES= RouterModule.forRoot(appRoutes, {useHash:true});