import { Component, OnInit } from '@angular/core';
import { DatapaginaService } from 'src/app/Servicios/datapagina.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  data: any;

  constructor(private datanosotros: DatapaginaService) {
    this.data = datanosotros.infoNosotros();
  }

  ngOnInit(): void {
  }

}
