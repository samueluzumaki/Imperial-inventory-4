
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  url='http://localhost/Conexion%201/ventas/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(ventas:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(ventas));    
  }

  baja(idVentas:number) {
    return this.http.get(`${this.url}baja.php?idVentas=${idVentas}`);
  }
  
  seleccionar(idVentas:number) {
    return this.http.get(`${this.url}seleccionar.php?idVentas=${idVentas}`);
  }

  modificacion(ventas:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(ventas));    
  } 
}

