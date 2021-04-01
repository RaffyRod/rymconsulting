import { Component, OnInit } from '@angular/core';
import { DatapaginaService } from 'src/app/Servicios/datapagina.service';
import { Page } from '../../interfaces/page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  data:any;

  constructor(private datainicio: DatapaginaService) {

    this.data = datainicio.infoInicio();
  }

  ngOnInit(): void {
  }

}
