import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';


const routes: Routes = [
  {path: 'agregar', component: AgregarEditarComentarioComponent},
  {path: 'editar/:id', component: AgregarEditarComentarioComponent},
  {path : 'ver/:id', component: VerComentarioComponent},
  {path : '', component : ListComentariosComponent, pathMatch : 'full'},
  {path : '**', redirectTo: '/'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
