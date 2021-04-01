import { Component, OnInit } from '@angular/core';
import { DatapaginaService } from '../../Servicios/datapagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: any;
  enlaces: Array<any>;

  constructor(
    private dataheader: DatapaginaService
  ) {
    this.data = dataheader.infoHeader();
    this.enlaces = [];
  }

  ngOnInit(): void {
    this.procesarEnlaces();
  }

  procesarEnlaces(){
    let total = 0;
    for(let element of this.data.parrafos){
      this.enlaces.push({
        nombre:element,
        enlace: ""
      });
      total++;
    }

    for(let a=0; a<total; a++){
      this.enlaces[a].enlace = this.data.enlaces[a];
    }
  }

}
