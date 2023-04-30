export class Cv {
    id : number;
    link: string;
    anio_derechos: string;
    nombre: string;
    personaid: number;

    constructor (link: string, anio_derechos: string, nombre: string, personaid: number) {
        this.link = link;
        this.anio_derechos = anio_derechos;
        this.nombre = nombre;
        this.personaid = personaid;
    }
}
