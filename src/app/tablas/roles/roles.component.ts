import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles:any;
  
  art={
    idRoles:"",	
    Nom_rol:"",	
  }

  constructor(private rolesServicio: RolesService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.rolesServicio.recuperarTodos().subscribe((result:any) => this.roles= result);
  }

  alta() {
    this.rolesServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idRoles:number) {
    this.rolesServicio.baja(idRoles).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.rolesServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(idRoles:number) {
    this.rolesServicio.seleccionar(idRoles).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}
