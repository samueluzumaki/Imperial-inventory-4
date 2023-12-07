import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

    url='http://localhost/Conexion%201/categorias/'; // disponer url de su servidor que tiene las páginas PHP
  
    constructor(private http: HttpClient) { }
  
    recuperarTodos() {
      return this.http.get(`${this.url}recuperartodos.php`);
    }
  
    alta(categoria:any) {
      return this.http.post(`${this.url}alta.php`, JSON.stringify(categoria));    
    }
  
    baja(Cod_Categoria:number) {
      return this.http.get(`${this.url}baja.php?Cod_Categoria=${Cod_Categoria}`);
    }
    
    seleccionar(Cod_Categoria:number) {
      return this.http.get(`${this.url}seleccionar.php?Cod_Categoria=${Cod_Categoria}`);
    }
  
    modificacion(categoria:any) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(categoria));    
    } 
  }

