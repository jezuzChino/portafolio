import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { reject } from 'q';

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

    return new Promise( (resolve, reject ) => {
      this.http.get('https://angular-portafolio-2faeb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          /* setTimeout(() => {
            this.cargando = false;
          }, 2000); */
          resolve();
        });
    });
  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-portafolio-2faeb.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {

    if( this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then ( () => {
        // se ejecuta despues de cargar los productos
        // aplicar filtro
        this.filtrarProductos ( termino );
      })
    } else {
      // aplicar filtro
        this.filtrarProductos ( termino );
    }
    /* this.productoFiltro = this.productos.filter( producto => {
      return true;
    }); */

    console.log( this.productoFiltro);
  }

  private filtrarProductos ( termino: string ) {
    this.productoFiltro = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf (termino ) >= 0 ) {
        this.productoFiltro.push( prod );
      }

    });
  }
}
