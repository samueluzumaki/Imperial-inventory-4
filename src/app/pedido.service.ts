import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url='http://localhost/Conexion%201/pedido/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(pedido:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(pedido));    
  }

  baja(idPedido:number) {
    return this.http.get(`${this.url}baja.php?idPedido=${idPedido}`);
  }
  
  seleccionar(idPredido:number) {
    return this.http.get(`${this.url}seleccionar.php?idPedido=${idPredido}`);
  }

  modificacion(pedido:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(pedido));    
  } 
}

