import { Injectable } from '@angular/core';
import { Detalles } from '../interfaces/detalles';
import { Pagina } from '../interfaces/pagina';
import { Empresa } from '../interfaces/empresa';
import { Page } from '../interfaces/page';

@Injectable({
  providedIn: 'root'
})
export class DatapaginaService {

  constructor() { }
  infoPaginaData(){
    let data: Empresa;
    data = {
      nombre: "RYM Consulting",
      imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FRYMLOGO.png?alt=media&token=5d41d6dc-27ac-4189-9ab7-b8cf225e6375",
      url: "rymconsulting.web.app"
    }
    return data;
  }

  infoInicio(){
    let data: Page;
    data = {
      titulo: "Bienvenido a RYM Consulting",
      parrafos:[
        "Agencia de consultores profesionales, la cual se encarga de dar soporte a clientes que pueden ser tanto pequeñas, medianas o grandes empresas.",
        "Somos una empresa auditora con dos años de experiencia en el sector de la informática, fundada en el año 2019, hemos apoyado hasta ahora a algunas empresas garantizándole que estén siempre operando bajo los estándares recomendados basados en la seguridad informática en general: las aplicaciones que maneja, los usuarios, la información, etc",
        "La confianza que nuestros clientes depositan en nosotros queda satisfecha cuando logramos reducir el impacto negativo que pueden provocar en las empresas los ataques que se pueden producir a los elementos vulnerables de las mismas.",
        "Estamos comprometidos a siempre bridar un servicio óptimo y oportuno que ayude a mejorar en todo momento el desarrollo de sus operaciones."
      ],
      image:"https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FRYMLOGO.png?alt=media&token=5d41d6dc-27ac-4189-9ab7-b8cf225e6375"
    }
    return data;
  }
  infoServicios(){

  }
  infoHeader(){
    let data: Detalles;
    data={
      titulo: this.infoPaginaData().nombre,
      parrafos:[
        "Inicio",
        "Nosotros",
        "Servicios",
        "Clientes",
        "Contactos"
      ],
      enlaces:[
        "/",
        "/nosotros",
        "/servicios",
        "/clientes",
        "/contacto"
      ]
    }
    return data;
  }
  infoFooter(){
    let data: Array<Detalles>;
    data = [
      {
        titulo:"SERVICIOS",
        parrafos: [
          "Auditoría de infraestructura",
          "Auditoria de Riezgos Informaticos",
          "Auditoria de Continuidad de Caidas",
          "Auditoria de Garantia de Eficiencia de Red",
          "Seguridad de Plataformas"
        ],
        enlaces: [
          "/servicios/infraestructura",
          "/servicios/riezgoa",
          "/servicios/continuidad",
          "/servicios/garantia",
          "/servicios/seguridad"
        ]
      },
      {
        titulo:"SITIOS DE INTERES",
        parrafos: [
          "INDOTEL",
          "ONAPI",
          "Presidencia de la Republica Dominicana"
        ],
        enlaces: [
          "https://www.indotel.gob.do/",
          "https://www.onapi.gov.do/",
          "https://presidencia.gob.do/"
        ]
      },
      {
        titulo:"CONTACTOS",
        parrafos: [
          "raffy.a.rodriguez@gmail.com",
          "yanelaaraujo12@gmail.com",
          "michaelrafaelventura01@gmail.com"
        ],
        enlaces: [
          "/contacto/raffy.a.rodriguez@gmail.com",
          "/contacto/yanelaaraujo12@gmail.com",
          "/contacto/michaelrafaelventura01@gmail.com"
        ]
      },
    ]

    return data;

  }

  infoClientes(){}



}
