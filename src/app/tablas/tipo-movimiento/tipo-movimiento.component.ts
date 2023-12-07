import { Component, OnInit } from '@angular/core';
import { TipoMovimientoService } from 'src/app/tipo-movimiento.service';

@Component({
  selector: 'app-tipo-movimiento',
  templateUrl: './tipo-movimiento.component.html',
  styleUrls: ['./tipo-movimiento.component.css']
})
export class TipoMovimientoComponent implements OnInit{
  tipo_movimiento:any;
  
  art={
    id_Tipo_Movimiento:"",	
    Descripcion:"",
  }

  constructor(private tipo_movimientoServicio: TipoMovimientoService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.tipo_movimientoServicio.recuperarTodos().subscribe((result:any) => this.tipo_movimiento= result);
  }

  alta() {
    this.tipo_movimientoServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(id_Tipo_Movimiento:number) {
    this.tipo_movimientoServicio.baja(id_Tipo_Movimiento).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.tipo_movimientoServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(id_Tipo_Movimiento:number) {
    this.tipo_movimientoServicio.seleccionar(id_Tipo_Movimiento).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 
}
