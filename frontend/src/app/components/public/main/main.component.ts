import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { Rutas } from 'src/app/core/rutas';
import { UsuarioService } from 'src/app/services/users.service';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  title = 'Bienvenido al main';
  items: MenuItem[];
  lista_preg: any;
  constructor(
    public router: Router,
    private usuario_service:UsuarioService
  ){}

  ngOnInit(): void {
    this.items = [
      {
        label:'Preguntas',
        icon:'pi pi-file',
        command:() => {this.links('preguntas');}
      }
    ];
  }
  links(opcion){
    switch (opcion) {
      case 'preguntas':
        this.router.navigateByUrl(Rutas.login);
        break;
    
      default:
        break;
    }
  }

  logeo(){
    this.router.navigateByUrl(Rutas.login);
  }
}
