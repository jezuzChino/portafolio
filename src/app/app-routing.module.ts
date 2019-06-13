import { NgModule } from '@angular/core';
// RouterModule: define si son ruta principales o fijas
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

// especificacion de rutas de la aplicacion (como va a funcionar)

 const app_routes: Routes = [

    { path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'item/:id/:nombre', component: ItemComponent},
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule ({// decorador de modulo
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
