import { Component, OnInit } from '@angular/core';
import { DatapaginaService } from 'src/app/Servicios/datapagina.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  data:any;
  constructor(private dataclientes: DatapaginaService) {
    this.data = dataclientes.infoClientes();
  }

  ngOnInit(): void {
  }

  ir(enlace:string){
    window.location.href = enlace;
  }

}
