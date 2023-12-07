import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url='http://localhost/Conexion%201/proveedores/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(proveedor:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(proveedor));    
  }

  baja(idProveedor:number) {
    return this.http.get(`${this.url}baja.php?idProveedor=${idProveedor}`);
  }
  
  seleccionar(idProveedor:number) {
    return this.http.get(`${this.url}seleccionar.php?idProveedor=${idProveedor}`);
  }

  modificacion(proveedor:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(proveedor));    
  } 
}

