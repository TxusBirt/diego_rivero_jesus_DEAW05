import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpUsuario:HttpClient) {}

    getAllUsuarios():Observable<Usuario[]>{
        return this._httpUsuario.get<Usuario[]>("http://localhost:4200/api/usuarios");
  }
  //obtengo solo un usuario de la lista que he generado
    searchUsuario(id:number):Observable<Usuario>{
        return this._httpUsuario.get<Usuario>("http://localhost:4200/api/usuarios/"+id);
}
}


