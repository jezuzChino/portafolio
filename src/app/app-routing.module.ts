import { NgModule } from '@angular/core';
// RouterModule: define si son ruta principales o fijas
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

// especificacion de rutas de la aplicacion (como va a funcionar)

 const app_routes: Routes = [

    { path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'item', component: ItemComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];
// decorador de modulo
@NgModule ({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
