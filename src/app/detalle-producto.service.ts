import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService {

  url='http://localhost/Conexion%201/detalle_producto/'; // disponer url de su servidor que tiene las páginas PHP
  
    constructor(private http: HttpClient) { }
  
    recuperarTodos() {
      return this.http.get(`${this.url}recuperartodos.php`);
    }
  
    alta(detalle_producto:any) {
      return this.http.post(`${this.url}alta.php`, JSON.stringify(detalle_producto));    
    }
  
    baja(idDetalle_producto:number) {
      return this.http.get(`${this.url}baja.php?idDetalle_producto=${idDetalle_producto}`);
    }
    
    seleccionar(idDetalle_producto:number) {
      return this.http.get(`${this.url}seleccionar.php?idDetalle_producto=${idDetalle_producto}`);
    }
  
    modificacion(detalle_producto:any) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(detalle_producto));    
    } 
}
