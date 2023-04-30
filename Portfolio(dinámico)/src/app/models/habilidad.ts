export class Habilidad {
    id: number;
    nombre: string;
    porcentaje : number;
    logo : string;
    personaid: number;

    constructor(nombre: string,logo:string,porcentaje:number,personaid:number){
        this.nombre = nombre;
        this.logo = logo;
        this.porcentaje = porcentaje;
        this.personaid = personaid;
    }
}
