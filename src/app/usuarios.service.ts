import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url='http://localhost/Conexion%201/usuarios/'; // disponer url de su servidor que tiene las páginas PHP
  
    constructor(private http: HttpClient) { }
  
    recuperarTodos() {
      return this.http.get(`${this.url}recuperartodos.php`);
    }
  
    alta(usuarios:any) {
      return this.http.post(`${this.url}alta.php`, JSON.stringify(usuarios));
    }
  
    baja(idUsuarios:number) {
      return this.http.get(`${this.url}baja.php?idUsuarios=${idUsuarios}`);
    }
    
    seleccionar(idUsuarios:number) {
      return this.http.get(`${this.url}seleccionar.php?idUsuarios=${idUsuarios}`);
    }
  
    modificacion(usuarios:any) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(usuarios));
    } 
}
