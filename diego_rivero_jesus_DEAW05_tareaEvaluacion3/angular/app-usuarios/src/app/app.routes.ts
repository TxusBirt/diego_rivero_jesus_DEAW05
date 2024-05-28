import { Routes } from '@angular/router';
import { Usuario } from './model/Usuario';
import { UsuarioIdComponent } from './components/usuario-id/usuario-id.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

export const routes: Routes = [
    { path: "usuario-lista", component: UsuarioListComponent },
    { path: "usuario-id", component: UsuarioIdComponent },
    { path: "**", component: UsuarioListComponent},
];
