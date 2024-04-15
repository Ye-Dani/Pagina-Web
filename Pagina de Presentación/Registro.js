class Usuario {
    constructor(Nombre,Edad,Color,Correo,Contrasena) {
        this.Nombre=Nombre;
        this.Edad=Edad;
        this.Color=Color;
        this.Correo=Correo;
        this.Contrasena=Contrasena;
    }

    NomCorreMayor() {
        if (this.Nombre.length>10 && this.Correo.length>10) {
            return true;
        }else {
            console.error ("El nombre o el correo debe de tener 10 caracteres");
            return false;
        }
    }

    Con() {
        if (this.Contrasena.length>6){
            return true;
        }else {
            console.error ("La contraseña debe de tener más de 6 caracteres");
            return false;
        }
    }

    EdaMayor() {
        if (this.Edad >49){
            return true;
        }else {
            console.error ("La edad debe de ser más de 49 años ");
            return false;
        }
    }

    ValidandoUsuario() {
        this.NomCorreMayor();
        this.Con();
        this.EdaMayor();
    }

    ValidarInformacion() {
        if (this.Nombre.length >10 && this.Edad >49 && this.Correo.length >10 && this.Contrasena.length >6){
            location.href= "PaginaP.html"
        }
    }

    MostrarInformacion() {
        console.log ("Nombre: " + this.Nombre);
        console.log ("Edad: " + this.Edad);
        console.log ("Color: " + this.Color);
        console.log ("Correo: " + this.Correo);
        console.log ("Contraseña: " + this.Contrasena);
    }

}

function Ingresar(){
    let Nombre = document.getElementById("IDNombre").value;
    let Edad = document.getElementById ("IDEdad").value;
    let Color = document.getElementById("IDColor").value;
    let Correo = document.getElementById("IDCorreo").value;
    let Contrasena = document.getElementById("IDContrasena").value;

    
    const Inter = new Usuario (Nombre, Edad, Color, Correo, Contrasena);
    Inter.ValidandoUsuario();
    Inter.MostrarInformacion();
    Inter.ValidarInformacion();
}