export class Educacion {
    id : number;
    nivel: string;
    institucion: string;
    img : string;
    descripcion: string;
    link : string;
    inicio:string;
    fin:string;
    personaid: number;

    constructor (nivel : string, institucion : string, 
        img : string, descripcion : string, link : string,inicio : string, fin : string, personaid: number) {
        this.nivel = nivel;
        this.institucion =  institucion;
        this.img = img;
        this.descripcion = descripcion;
        this.link = link;
        this.personaid = personaid;
    }
}
