import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoMovimientoService {

  url='http://localhost/Conexion%201/tipo_movimiento/'; // disponer url de su servidor que tiene las páginas PHP
  
    constructor(private http: HttpClient) { }
  
    recuperarTodos() {
      return this.http.get(`${this.url}recuperartodos.php`);
    }
  
    alta(tipomovimiento:any) {
      return this.http.post(`${this.url}alta.php`, JSON.stringify(tipomovimiento));
    }
  
    baja(id_Tipo_Movimiento:number) {
      return this.http.get(`${this.url}baja.php?id_Tipo_Movimiento=${id_Tipo_Movimiento}`);
    }
    
    seleccionar(id_Tipo_Movimiento:number) {
      return this.http.get(`${this.url}seleccionar.php?id_Tipo_Movimiento=${id_Tipo_Movimiento}`);
    }
  
    modificacion(tipomovimiento:any) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(tipomovimiento));
    } 
}
