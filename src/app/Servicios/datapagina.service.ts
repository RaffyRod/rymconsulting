import { Injectable } from '@angular/core';
import { Detalles } from '../interfaces/detalles';
import { Pagina } from '../interfaces/pagina';
import { Empresa } from '../interfaces/empresa';
import { Page } from '../interfaces/page';
import { Opciones } from '../interfaces/opciones';
import { Clientes } from '../interfaces/clientes';
import { Contacto } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class DatapaginaService {

  constructor() { }
  infoPaginaData(){
    let data: Empresa;
    data = {
      nombre: "RYM Consulting",
      imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FRYM.png?alt=media&token=7680b061-13f3-444a-ac76-25378afa4202",
      url: "https://rymconsulting-a01e2.web.app/"
    }
    return data;
  }

  infoInicio(){
    let data: Page;
    data = {
      titulo: "Bienvenido a "+this.infoPaginaData().nombre,
      parrafos:[
        "Agencia de consultores profesionales, la cual se encarga de dar soporte a clientes que pueden ser tanto pequeñas, medianas o grandes empresas.",
        "Somos una empresa auditora con dos años de experiencia en el sector de la informática, fundada en el año 2019, hemos apoyado hasta ahora a algunas empresas garantizándole que estén siempre operando bajo los estándares recomendados basados en la seguridad informática en general: las aplicaciones que maneja, los usuarios, la información, etc.",
        "La confianza que nuestros clientes depositan en nosotros queda satisfecha cuando logramos reducir el impacto negativo que pueden provocar en las empresas los ataques que se pueden producir a los elementos vulnerables de las mismas.",
        "Estamos comprometidos a siempre brindar un servicio óptimo y oportuno que ayude a mejorar en todo momento el desarrollo de sus operaciones."
      ],
      image: this.infoPaginaData().imagen
    }
    return data;
  }
  infoNosotros(){
    let dataPage: Pagina;
    let dataopcionesPrincipal: Array<Opciones>;
    let dataopcionesSecundarias: Array<Opciones>;

    dataPage = {
      titulo: "Quienes Somos en "+this.infoPaginaData().nombre+":",
      descripcion: "Somos una firma auditora que ofrece soluciones de Seguridad Informática, por supuesto basadas en salvaguardar el valor más preciado de las instituciones: La información, así como también de los usuarios de la red y de las aplicaciones.",
      subtitulo: "ESTAMOS COMPROMETIDOS CON:",
      imagen: this.infoPaginaData().imagen
    };

    dataopcionesPrincipal = [
      {
        id: "mision",
        titulo: "MISION",
        descripcion: "Brindar a nuestros clientes servicios de calidad, ofreciendo soluciones confiables y concretas de acuerdo a sus necesidades buscando siempre aumentar la competitividad organizacional en beneficio de nuestros clientes.",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2Fmision-removebg-preview.png?alt=media&token=350e8fd9-8575-4f5b-aeb7-9c5ac1350dff"
      },
      {
        id: "vision",
        titulo: "VISION",
        descripcion: "Ser una firma auditora que ocupe un lugar entre las empresas líderes tanto a nivel nacional como internacional, buscando siempre mediante los servicios de auditoría, asesoría y consultoría apoyar a nuestros clientes, contribuyendo al mejoramiento y crecimientos de sus organizaciones.",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FVisi%C3%B3n.png?alt=media&token=f4af93e6-39ab-4b27-a39e-c2e57970d138"
      }
    ];
    dataopcionesSecundarias = [
      {
        id: "responsalidad",
        titulo: "RESPONSABILIDAD",
        descripcion: "Ponemos siempre nuestro mayor empeño para lograr el cumplimiento de los servicios ofrecidos a nuestros clientes.",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2Fconfidencialidad-removebg-preview.png?alt=media&token=ac187725-34e8-4ab5-818c-a36e7b4039a8"
      },
      {
        id: "integridad",
        titulo: "INTEGRIDAD",
        descripcion: "Actuamos con ética tanto en lo personal como en lo profesional.",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2Fintegridad.jfif?alt=media&token=5324da1d-4603-40cd-be48-a45581035e90"
      },
      {
        id: "confidencialidad",
        titulo: "CONFIDENCIALIDAD",
        descripcion: "Estamos comprometidos a no revelar ningún tipo de información de nuestros clientes, especialmente aquellas que son de caracter sensible y confidencial.",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2Fresponsabilidad.png?alt=media&token=c074bfd0-bbcc-4179-ac2a-a631554965bf"
      },
      {
        id: "exelencia",
        titulo: "EXELENCIA",
        descripcion: "Ante todo, perseverancia para lograr mejoramiento continuo, innovación y liderazgo, tratando siempre de superar las expectativas de nuestros clientes y alcanzar los objetivos corporativos.",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FEXELENCIA.jpeg?alt=media&token=63eed340-5fa8-42af-82cb-d75c5762caed"
      },
    ];

    return {
      page: dataPage,
      opcionesPrincipal: dataopcionesPrincipal,
      opcionesSecundarias: dataopcionesSecundarias
    }
  }
  infoServicios(){
    let dataPage: Pagina;
    let opciones: Array<Opciones>;

    dataPage = {
      titulo: "Nuestros Servicios en "+this.infoPaginaData().nombre,
      descripcion: "Contamos con servicios de seguridad y auditoría informática cubriendo los elementos más propensos a ser vulnerados en cuanto a la seguridad y privacidad de los datos en una empresa.",
      subtitulo: "SERVICIOS QUE OFRECEMOS:",
      imagen: this.infoPaginaData().imagen
    };

    opciones = [
      {
        id:"riezgo",
        titulo: "Auditoria de Riesgos Informaticos",
        descripcion: "Si bien es cierto que no se pueden reducir los riegos al 100% siempre es importante implementar planes que logren reducirlo en el mayor grado posible, garantizando así la protección de la privacidad de los datos.",
        imagen:"https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FRIESGO.jpg?alt=media&token=b7631285-082c-4ec9-94c2-7e7e15cfc3ac"
      },
      {
        id:"continuidad",
        titulo: "Auditoria de Continuidad de Caidas",
        descripcion: "Evitamos perdida de dinero, tiempo y recursos, garantizando que los sistemas estarán disponibles en todo momento, ofreciendo redundancia que ayuden a conservar la productividad de la empresa.",
        imagen:"https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FCONTINUIDAD.jpg?alt=media&token=6b4232c0-8a5c-4f54-97a7-ce29009ee00b"
      },
      {
        id: "infraestructura",
        titulo: "Auditoría de Infraestructura",
        descripcion: "En este tipo de auditoria nos basamos en la observación de la infraestructura y así logramos identificar cualquier aspecto que haya sido iniciado sin una conclusión concreta, debilidades en el sistema que puedan ponerlos en un estado vulnerable.",
        imagen:"https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FINTRAESTRUCTURA.jpg?alt=media&token=954c1c47-95cd-4190-8d54-f279f1be48e2"
      },
      {
        id:"seguridad",
        titulo: "Seguridad de Plataformas",
        descripcion: "Implementaciones que ayudan a las empresas a mantener seguros sus usuarios y aplicaciones, y por medio de las misma la protección de la empresa.",
        imagen:"https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FSEGURIDAD.jpg?alt=media&token=2cf3659a-fd32-4c99-b168-e66342bf8231"
      },
      {
        id:"garantia",
        titulo: "Auditoria de Garantia de Eficiencia de Red",
        descripcion: "Agilizar la conectividad mediante ajustes dentro del sistema que sirvan de impulso para evitar interrupciones.",
        imagen:"https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FEFICIENCIA.jpg?alt=media&token=439188b4-ca60-42ba-b124-619b42a068a9"
      },
      {
        id:"control",
        titulo: "Auditoria de Control Interno",
        descripcion: "El sistema de control interno está entretejido con las actividades operativas de una entidad, y existe por fundamentales razones de negocios. Los controles internos tiene el mayor grado de efectividad cuando ellos, son construidos dentro de la infraestructura de la entidad y son parte de la esencia de la empresa. Ellos deben ser construidos dentro más bien que construidos sobre.",
        imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsites.google.com%2Fsite%2Frosamartinezacco304%2F_%2Frsrc%2F1491788209228%2Fhome%2Fauditoria.png%3Fheight%3D240%26width%3D320&f=1&nofb=1"
      },

    ]

    return {
      page: dataPage,
      opciones: opciones
    }

  }
  infoHeader(){
    let data: Detalles;
    data={
      titulo: this.infoPaginaData().nombre,
      parrafos:[
        "Inicio",
        "Servicios",
        "Clientes",
        "Nosotros",
        "Contactos"
      ],
      enlaces:[
        "/",
        "/servicios",
        "/clientes",
        "/nosotros",
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
          "Seguridad de Plataformas",
          "Auditoria de Control Interno"
        ],
        enlaces: [
          "/servicios#infraestructura",
          "/servicios#riezgo",
          "/servicios#continuidad",
          "/servicios#garantia",
          "/servicios#seguridad",
          "/servicios#control"
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

  infoClientes(){
    let dataPage: Pagina;
    let opciones: Array<Clientes>;

    dataPage = {
      titulo: "Nuestros Clientes en "+this.infoPaginaData().nombre,
      descripcion: "Siempre brindando nuestro mayor empeño en ofrecer un servicio de calidad, comprometidos con su integridad y mejorar dia a dia el trabajo con nuestros clientes.",
      subtitulo: "CLIENTES QUE NOS DISTINGUEN:",
      imagen: this.infoPaginaData().imagen
    }
    opciones = [
      {
        nombre: "Caribe Tours S.A.",
        sector: "Transporte Público de Pasajeros",
        descripcion: "Es una compañía de transporte a largas distancias. El autobús es la mejor manera de viajar distancias más largas en la República Dominicana. Cubren decenas de destinos en todo el país (e incluso a Haití) y cuentan con una flota bastante moderna.",
        telefono: "+1 (809) 221 - 4422",
        direccion: "27 de Febrero esq. Leopoldo Navarro, Santo Domingo, R.D.",
        web: "http://caribetours.com.do/reservaciones",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FCARIBETOURS.png?alt=media&token=1f02caf5-1164-465a-a429-555897edca96",
        servicio: "Auditoría de Cumplimiento, año 2020"
      },
      {
        nombre: "Grupo Rica",
        sector: "Industrial",
        descripcion: "Grupo corporativo con más de 50 años de experiencia en la rama alimenticia del mercado dominicano. Con estrictas especificaciones, garantizamos productos de óptima calidad y frescura, al tiempo que buscamos mantener nuestro liderazgo en productividad y servicio.",
        telefono: "+1 (809) 563 - 7422",
        direccion: "KM 6 1/2 Autopista Duarte, Santo Domingo, DN. República Dominicana",
        web: "https://www.gruporica.com/",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FRICA.png?alt=media&token=d150130d-5d7b-4853-94b6-f9f258b101ac",
        servicio: "Auditoría de Cumplimiento, año 2020"
      },
      {
        nombre: "Nestlé S.A.",
        sector: "Comercial",
        descripcion: "Empresa de alimentos y bebidas más grande del mundo, líder en nutrición, salud y bienestar. En República Dominicana, Nestlé tiene 104 años de presencia, con 2 fábricas, 820 empleados directos y alrededor de 12,000 indirectos.",
        telefono: "+1 (809) 508 - 5100",
        direccion: "Avenida Abraham Lincoln, Santo Domingo, Distrito Nacional, Dominican Republic",
        web: "https://www.nestle.do/",
        imagen: "https://firebasestorage.googleapis.com/v0/b/rymconsulting-a01e2.appspot.com/o/imagenes%2FNESTLE.png?alt=media&token=b0471873-5c51-4f21-9dbb-ab53e127a75a",
        servicio: "Auditoría de Cumplimiento, año 2019"
      }
    ]
    return {
      page: dataPage,
      opciones: opciones
    }
  }

  infoContacto(){
    let data: Page;
    let contacto: Contacto
    data = {
      titulo: "Comunicate con "+this.infoPaginaData().nombre,
      parrafos:[],
      image: this.infoPaginaData().imagen
    }
    contacto= {
      nombre: this.infoPaginaData().nombre,
      email: "rym@fakemail.com",
      telefono: "+1 (809) 789 4125",
      direccion: "Calle, Santo Domingo, Rep. Dom."
    }

    return{
      data: data,
      contacto: contacto
    }
  }



}
