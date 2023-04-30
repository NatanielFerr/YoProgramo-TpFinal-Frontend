export class Red {
    id : number;
    nombre: string;
    logo: string;
    link: string;
    denominacion: string;
    personaid: number;

    constructor (nombre: string, logo: string, link: string, denominacion: string, personaid:number) {
        this.nombre = nombre;
        this.logo = logo;
        this.link = link;
        this.denominacion = denominacion;
        this.personaid = personaid;
    }
}
