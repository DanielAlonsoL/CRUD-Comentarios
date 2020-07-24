import { Component, OnInit } from '@angular/core';
import { Comentario } from "src/app/models/comentario";
import { ComentarioService } from "src/app/services/comentario.service";

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
  listComentarios: Comentario[];
  loading = false;
  constructor(private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.cargarComentario();
  }

  cargarComentario(){
    this.loading=true;
    this.comentarioService.getListComentarios().subscribe(data =>{
      this.loading=false;
      this.listComentarios = data;
    });
  }

  delete(id:number){
    this.comentarioService.deleteComentario(id).subscribe(data => {
      this.cargarComentario();
      this.loading=false;
    });
  }

}
