import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any;
  
  art={
    idUsuarios:"",	
    Nom_usuario:"",
    Ape_usuario:"",
    Rol:"",
    Password:""	
  }

  constructor(private usuariosServicio: UsuariosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.usuariosServicio.recuperarTodos().subscribe((result:any) => this.usuarios= result);
  }

  alta() {
    this.usuariosServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idUsuarios:number) {
    this.usuariosServicio.baja(idUsuarios).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.usuariosServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(idUsuarios:number) {
    this.usuariosServicio.seleccionar(idUsuarios).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 
}
