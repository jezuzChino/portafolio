import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
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
    AppRoutingModule // se importa el modulo creado asi como la ruta en la linea 10
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
