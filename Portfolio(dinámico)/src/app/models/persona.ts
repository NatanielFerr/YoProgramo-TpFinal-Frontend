export class Persona {
        id:number;
        nombre: string;
        apellido: string;
        sobre_mi: string;
        titulo: string;
        imagen: string;
        banner: string;
        email: string;
        contrasenia: string;

        constructor(nombre: string,apellido: string,sobre_mi: string,titulo: string,
        imagen: string,banner: string,email: string,contrasenia: string){
            this.nombre = nombre;
            this.apellido =apellido;
            this.sobre_mi = sobre_mi;
            this.titulo = titulo;
            this.email = email;
            this.contrasenia = contrasenia;
            this.imagen = imagen;
            this.banner = banner
        }

}
