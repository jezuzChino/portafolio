import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({ // decorador de modulo
  declarations: [ // En un modulo las declaraciones son solo para los pipes, componentes, etc
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [ // Aqui se colocan los modulos
    BrowserModule,
    AppRoutingModule, // se importa el modulo creado asi como la ruta en la linea 10
    HttpClientModule // permitira realizar peticiones PUT, GET..etc a servidores REST
  ],
  // aqui normalmente se colocan los sevicios haciendo la importacion como si fuera
  // un componente, pero angular en el decorador sel servicio @Injectable
  // le indica en que nivel quiere que se inyecte automaticamente "providedIn: 'root'"
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
