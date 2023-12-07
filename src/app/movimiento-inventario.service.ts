import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovimientoInventarioService {

  url='http://localhost/Conexion%201/movimiento_inventario/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(movimiento_inventario:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(movimiento_inventario));    
  }

  baja(id_Movimiento_inventario:number) {
    return this.http.get(`${this.url}baja.php?id_Movimiento_inventario=${id_Movimiento_inventario}`);
  }
  
  seleccionar(id_Movimiento_inventario:number) {
    return this.http.get(`${this.url}seleccionar.php?id_Movimiento_inventario=${id_Movimiento_inventario}`);
  }

  modificacion(movimiento_inventario:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(movimiento_inventario));    
  } 
}
