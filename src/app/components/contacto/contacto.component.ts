import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatapaginaService } from 'src/app/Servicios/datapagina.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  data:any;

  constructor(
    private datacontacto: DatapaginaService,
    private toastr: ToastrService
  ) {
    this.data = datacontacto.infoContacto();
  }

  ngOnInit(): void {
  }




  enviarEmail(){
    alert("Correo Enviado")
  }

}
