import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuarioListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-usuarios';
}
