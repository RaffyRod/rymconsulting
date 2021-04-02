import { Component, OnInit } from '@angular/core';
import { DatapaginaService } from 'src/app/Servicios/datapagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  data:any;
  constructor(
    private dataservicios: DatapaginaService,
    router: Router) {
    this.data = dataservicios.infoServicios();
  }

  ngOnInit(): void {
  }

}
