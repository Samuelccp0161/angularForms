import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private http: HttpClient){}

  inputFileChange(event: any) {
    if(event.target.files && event?.target.files[0]){
      const pdf = event.target.files[0]

      const formData = new FormData();
      formData.append('pdf', pdf)

      const formData1 = new FormData();
      formData.append('pdf', pdf)

      this.http.post('http://localhost:4200/pdf', formData)
        .subscribe(resposta => console.log('upload ok'));
        
      this.http.post('http://localhost:4200/pdf', formData1)
        .subscribe(resposta => console.log('upload ok'));
  }
}
  cliente: Cliente = new Cliente();


}
