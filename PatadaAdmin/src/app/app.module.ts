import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./modules/material/material.module";
import {MatFormFieldModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { CrudArticuloComponent } from './components/crud-articulo/crud-articulo.component';
import { CrudEquipoComponent } from './components/crud-equipo/crud-equipo.component';
import {ArticuloService} from "./services/articulo.service";
import {FormsModule} from "@angular/forms";
import {CategoriaService} from "./services/categoria.service";
import { NavbarComponent } from './components/inicial/navbar/navbar.component';
import { FooterComponent } from './components/inicial/footer/footer.component';
import { SidebarComponent } from './components/inicial/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudArticuloComponent,
    CrudEquipoComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
      BrowserModule,
      MaterialModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,


  ],
  providers: [
      ArticuloService,
      CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
