import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltro: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  private cargarProductos () {
    this.http.get('https://angular-portafolio-2faeb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      });
  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-portafolio-2faeb.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {
    this.productoFiltro = this.productos.filter( producto => {
      return true;
    });

    console.log( this.productoFiltro);
  }
}
