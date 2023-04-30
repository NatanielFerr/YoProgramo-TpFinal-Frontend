export class Proyecto {
    id: number;
    proyecto : string;
    descripcion : string;
    tecnologia : string;
    inicio: string;
    fin: string;
    logo: string;
    link: string;
    personaid: number;


    constructor(proyecto:string,descripcion:string, inicio:string, fin:string, 
        logo:string, link:string, tecnologia:string,personaid: number) {
        this.proyecto = proyecto;
        this.descripcion = descripcion;
        this.tecnologia = tecnologia;
        this.inicio = inicio;
        this.fin = fin;
        this.logo = logo;
        this.link = link;
        this.personaid = personaid;
    }
}
