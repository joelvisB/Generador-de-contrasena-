
let  cantidad = document.getElementById(`cantidad`);
let contrasena = document.getElementById(`contrasena`);

const cadenaCaracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$&#=+_-%!`;

function generar(){
    let numeroDigitado = parseInt(cantidad.value);

    if(numeroDigitado < 8){
        alert("la contrasena debe de ser de 8 digitos")
        borrar();
    } else{
    let password = '';
    for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
    
        password += caracterAleatorio;
    }

    contrasena.value = password;
    validar(password);
    }

}

function borrar(){
    cantidad.value = "";
    contrasena.value = "";
    mensajeSeguridad.textContent = "";
}

function validar(password){
    let mayusculas = password.match(/[A-Z]/);
    let minusculas = password.match(/[a-z]/);
    let numero = password.match(/[0-9]/);
    let caracteresEspeciales = password.match(/[!@#$%^&*()]/);

    if(mayusculas && minusculas && numero && caracteresEspeciales){
    mensajeSeguridad.textContent  = "Seguridad Fuerte";
    mensajeSeguridad.style.color = "#00ff00";
    mensajeSeguridad.style.textShadow = "0 0 5px rgba( 0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5)";
    }
    else if((mayusculas && minusculas && numero) || (mayusculas && minusculas && caracteresEspeciales) || (mayusculas && numero && caracteresEspeciales) || (minusculas && numero && caracteresEspeciales )){
        mensajeSeguridad.textContent = "Seguridad Media";
        mensajeSeguridad.style.color = "#ffd700";
        mensajeSeguridad.style.textShadow = "0 0 5px rgba(255, 215, 0, 0.7 ), 0 0 10px rgba(255, 215, 0, 0.5)";
    }
    else{
        mensajeSeguridad.textContent = "seguridad Debil";
        mensajeSeguridad.style.color = "#ffd700";
        mensajeSeguridad.style.textShadow = "0 0 5px rgba(255, 0, 0, 0.7), 0 0 10px rgba(255, 0, 0, 0.5)";
    }
}








