import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  url='http://localhost/Conexion%201/detalle_venta/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(detalle_venta:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(detalle_venta));    
  }

  baja(idDetalle_venta:number) {
    return this.http.get(`${this.url}baja.php?idDetalle_venta=${idDetalle_venta}`);
  }
  
  seleccionar(idDetalle_venta:number) {
    return this.http.get(`${this.url}seleccionar.php?idDetalle_venta=${idDetalle_venta}`);
  }

  modificacion(detalle_venta:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(detalle_venta));    
  } 
}
