import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';
import { Usuario } from '../../model/Usuario';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-usuario-id',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario-id.component.html',
  styleUrl: './usuario-id.component.css'
})
export class UsuarioIdComponent implements OnInit{
  public usuario$!: Observable<Usuario>;
  public usuario!: Usuario;
  public id!:number;
  public nombre!: string;
  public departamento!:string;

  constructor(private _servicoUsuario:UserService){}

  ngOnInit( ): void {
    
  }

  obtenerUsuario() {
    this.usuario$ = this._servicoUsuario.searchUsuario(this.id);
    this.usuario$.subscribe({
        next: result => {   
            this.usuario=result;
            this.id = this.usuario.id;
            this.nombre = this.usuario.nombre;
            this.departamento = this.usuario.departamento;
            console.log(result);

        },
        error: error => console.log(error)
    });

}
}
