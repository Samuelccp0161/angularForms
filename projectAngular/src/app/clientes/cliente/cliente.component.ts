import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContaGrafica } from '../shared/contaGrafica';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  constructor(private http: HttpClient){}
  
  contaGrafica: String = '';

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
}
