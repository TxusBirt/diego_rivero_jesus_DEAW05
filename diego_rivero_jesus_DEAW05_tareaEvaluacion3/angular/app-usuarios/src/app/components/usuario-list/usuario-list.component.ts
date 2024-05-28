import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent implements OnInit{
  public usuarioList$!: Observable<Usuario[]>;
  public listaUsuarios!: Usuario[];

  constructor(private _servicoUsuario:UserService){}

  ngOnInit( ): void {
    this.listaUsers();
  }

  listaUsers() {
    this.usuarioList$ = this._servicoUsuario.getAllUsuarios();
    this.usuarioList$.subscribe({
        next: result => {   
            this.listaUsuarios=result;
            console.log(result);

        },
        error: error => console.log(error)
    });

}
}
