import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { URL } from '../core/url';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    constructor(private http: HttpClient){}

    subirImagen(file){
        return this.http.post(URL._url+"/uploader",file);
    }
    registrarUsuario(values){
        return this.http.post(URL._url+"api/usuarios/registrar",values);
    }
    listarUsuarios(){
        return this.http.get(URL._url+"api/usuarios/listar");
    }
    inicarSesion(values){
        return this.http.post(URL._url+"api/usuarios/login", values);
    }
}