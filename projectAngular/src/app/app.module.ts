import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './clientes/formulario/formulario.component';
import{ HttpClientModule } from '@angular/common/http'
import { ClienteComponent } from './clientes/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
