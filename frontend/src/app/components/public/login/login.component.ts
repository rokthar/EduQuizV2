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
        private usuario_service:UsuarioService,
        private router:Router
    ){}

    inciarSesion(){
        let values={
            "correo":this.correo,
            "clave":this.clave
        }
        this.usuario_service.inicarSesion(values).subscribe((resp:any)=>{
            if(resp.siglas == "OK"){
                sessionStorage.setItem('usuario',JSON.stringify(resp.usuario));
                this.router.navigateByUrl(Rutas.usuarioPerfil);
            }else{
                console.log("No estas Logeado");
            }
        });
    }
}