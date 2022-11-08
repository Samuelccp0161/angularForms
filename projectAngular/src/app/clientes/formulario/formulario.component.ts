import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/login';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  login: Login = new Login()
}
