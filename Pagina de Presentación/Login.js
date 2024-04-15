class Usuario {
    constructor(Correo,Contrasena) {
        this.Correo=Correo;
        this.Contrasena=Contrasena;
    }

    ValidarInformacion() {
        if (this.Correo && this.Contrasena){
            location.href= "PaginaP.html" 
        }
    }
}

function Ingresar(){
    let Correo = document.getElementById("IDCorreo").value;
    let Contrasena = document.getElementById("IDContrasena").value;

    const Inter = new Usuario (Correo, Contrasena);
    Inter.ValidarInformacion();
}