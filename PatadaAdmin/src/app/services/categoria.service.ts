import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Categoria} from "../models/categoria";

@Injectable()
export class CategoriaService {

  public categorias:Observable<Categoria[]>;

  public static  LaravelUrl:string = 'http://localhost:8000/api/Categorias';

  constructor(private http:HttpClient) { }


  getCategorias() : Observable<Categoria[]>{

    return this.http.get<Categoria[]>(CategoriaService.LaravelUrl);




  }

}
