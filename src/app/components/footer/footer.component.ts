import { Component, OnInit } from '@angular/core';
import { DatapaginaService } from 'src/app/Servicios/datapagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data:any;
  enlaces:Array<any>;
  paginadata:any;

  constructor(private datafooter: DatapaginaService) {
    this.data = datafooter.infoFooter();
    this.enlaces = new Array<any>();
    this.paginadata = datafooter.infoPaginaData();
  }

  ngOnInit(): void {
    this.procesarEnlaces();
  }

  getYear(){
    let year = new Date();
    return year.getFullYear();

  }

  procesarEnlaces(){
    let total = 0;
    for(let data of this.data){
      this.enlaces.push({
        titulo:data.titulo,
        enlaces: {
          enlaces:data.enlaces,
          titulos:data.parrafos
        }
      });
    }
  }

}
