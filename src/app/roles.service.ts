import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  url='http://localhost/Conexion%201/roles/'; // disponer url de su servidor que tiene las páginas PHP
  
    constructor(private http: HttpClient) { }
  
    recuperarTodos() {
      return this.http.get(`${this.url}recuperartodos.php`);
    }
  
    alta(roles:any) {
      return this.http.post(`${this.url}alta.php`, JSON.stringify(roles));    
    }
  
    baja(idRoles:number) {
      return this.http.get(`${this.url}baja.php?idRoles=${idRoles}`);
    }
    
    seleccionar(idRoles:number) {
      return this.http.get(`${this.url}seleccionar.php?idRoles=${idRoles}`);
    }
  
    modificacion(roles:any) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(roles));    
    } 
}
