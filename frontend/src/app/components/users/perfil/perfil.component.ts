import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { Rutas } from 'src/app/core/rutas';
import { UsuarioService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
    usuario:Usuario;
    constructor(
        private usuario_service:UsuarioService
    ){}
    ngOnInit(): void {
        this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
        console.log(this.usuario);
    }

}