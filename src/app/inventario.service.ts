

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  url='http://localhost/Conexion%201/inventario/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(inventario:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(inventario));    
  }

  baja(idInventario:number) {
    return this.http.get(`${this.url}baja.php?idInventario=${idInventario}`);
  }
  
  seleccionar(idInventario:number) {
    return this.http.get(`${this.url}seleccionar.php?idInventario=${idInventario}`);
  }

  modificacion(inventario:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(inventario));    
  } 
}
