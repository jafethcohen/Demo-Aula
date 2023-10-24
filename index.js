function validacion () {

    var usuario = document.getElementById("username").value;
    var contraseña = document.getElementById("password").value;

    if (usuario == "admin@gmail.com" && contraseña == "contra123") {

        window.location="vista2.html"
        return false

    } if (usuario == "estudiante@gmail.com" && contraseña == "contra1234" ) {

            window.location="vista3.html"
            return false
    }
 

}