import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";
import {Articulo} from "../models/articulo";
import {Observable} from "rxjs/Observable";
import {HttpHeaders} from "@angular/common/http";

import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ArticuloService {

    private headers = new HttpHeaders({'Content-Type':'application/json'});


    constructor(private http:HttpClient, ) {

    }

    private log(mensaje:string){

        console.log(mensaje);

    }

    getArticulos(): Observable<Articulo[]> {

        return this.http.get<Articulo[]>("http://localhost:8000/api/Articulos").pipe(
            tap (res => this.log("Articulos Encontrados")),
            catchError(this.handleError('getArticulos',[]))
        );

    }

    getArticulosCategoria(id_categoria:number): Observable<any>{

        return this.http.get('http://api.patadainicial.com/api/Articulos/categoria/'+id_categoria);

    }


    createArticulo(articulo_crt:Articulo): Observable<Articulo> {


      return this.http.post<Articulo>("http://localhost:8000/api/Articulos", JSON.stringify(articulo_crt),{headers: this.headers}).pipe(
          tap((articulo: Articulo) => this.log("Articulo añadido w/ id=${articulo.id_articulo}")),
          catchError(this.handleError<Articulo>('createArticulo'))

      );




    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }



}