import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { Rutas } from 'src/app/core/rutas';
import { UsuarioService } from 'src/app/services/users.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    correo=""; clave="";
    constructor(
        private usuario_service:UsuarioService
    ){}

    inciarSesion(){
        let values={
            "correo":this.correo,
            "clave":this.clave
        }
        console.log(values);
        this.usuario_service.inicarSesion(values).subscribe((resp:any)=>{
            console.log(resp);
        });
    }
}