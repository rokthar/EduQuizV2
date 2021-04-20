import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { Rutas } from 'src/app/core/rutas';
import { UsuarioService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent{
    nombre="";correo="";clave1="";clave2="";
    
    constructor(
        private usuario_service:UsuarioService,
        private _location:Location
    ){
    }

    registrarUsuarios(){
        if(this.clave1 == this.clave2){
            const values = {
                "nombre":this.nombre,
                "correo":this.correo,
                "clave":this.clave1
            }
            this.usuario_service.registrarUsuario(values).subscribe((resp:any)=>{
                console.log(resp);
            });
        }else{
            console.log("Error Pass");
        }
    }

    cancelar(){
        this._location.back();
    }
    
}