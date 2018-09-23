import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: any = { };
  cargada = false;

  constructor( private http: HttpClient) {

    console.log('Servicio listo');
    // Leer archivo JSON data-page-json
    this.http.get('assets/data/data-page.json')
    .subscribe( resp => {

      this.cargada = true;
      this.info = resp;
      console.log( resp );
      // console.log(resp.nombre_corto);
      // console.log( resp['nombre_corto']);
    });
   }
}
