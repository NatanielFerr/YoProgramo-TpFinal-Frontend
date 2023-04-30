export class Contacto {
    nombre_y_apellido: string;
    telefono:string;
    asunto:string;
    mensaje:string;
    email:string;

    constructor(nombre_y_apellido:string,telefono:string,
        asunto:string,mensaje:string, email:string) {
            this.nombre_y_apellido = nombre_y_apellido;
            this.telefono = telefono;
            this.asunto = asunto;
            this.mensaje =mensaje;
            this.email = email;
    }
}
