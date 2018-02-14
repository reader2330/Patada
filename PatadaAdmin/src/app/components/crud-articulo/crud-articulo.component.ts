import { Component, OnInit } from '@angular/core';
import {ArticuloService} from "../../services/articulo.service";
import {Articulo} from "../../models/articulo";
import {Observable} from "rxjs/Observable";
import {Categoria} from "../../models/categoria";
import {CategoriaService} from "../../services/categoria.service";


@Component({
  selector: 'app-crud-articulo',
  templateUrl: './crud-articulo.component.html',
  styleUrls: ['./crud-articulo.component.css']
})
export class CrudArticuloComponent implements OnInit {

  public articulo_mod: Articulo;
  public articulo_ctr: Articulo;
  public articulos: Articulo[];
  public categorias: Categoria[];
  public opcion:number



  constructor(private ArticuloService: ArticuloService, private CategoriaService:CategoriaService) { }

  ngOnInit() {

      this.articulo_ctr = new Articulo(0,"","","","",0,"",0);

      this.CategoriaService.getCategorias().subscribe(res => {
          this.categorias = res['data'];
      });

      this.ArticuloService.getArticulos().subscribe(res => {
          this.articulos = res['data'];
      });





  }

  EnviarArticulo(){

    this.articulo_ctr.id_articulo=this.articulos.length+1;
      console.log(this.articulo_ctr);

  }

  setOpcion(opcion_aux){

      this.opcion=opcion_aux;



  }

}
