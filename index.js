const texto = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

//botón Encriptar//
function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    mensaje.value = textoEncriptado;                            
    limpiarPantallaMsn("none");
}

//botón Desencriptar//
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(texto.value);
    mensaje.value = textoDesencriptado;
    limpiarPantallaMsn("none");
}

//Función Encriptar//
function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    let textoClaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i=0; i<textoClaves.length; i++){
        if(stringEncriptado.includes(textoClaves[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(textoClaves[i][0],textoClaves[i][1]);  //Reemplaza todo de textoClaves [0] por todo de textoclaves con [1]
        }
    }
    return stringEncriptado;

}

//Función Desencriptar//
function desencriptar(stringDesencriptado){
    let textoClaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i=0; i<textoClaves.length; i++){
        if(stringDesencriptado.includes(textoClaves[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(textoClaves[i][1], textoClaves[i][0]);
        }
    }
    return stringDesencriptado;
}

//Función copiar//
function btncopiar(){ 
        let copyText = mensaje;
        copyText.select();             //Llama el método seleccionar
        document.execCommand("copy"); // utiliza el método copy
}

//Función Limpiar Pantalla Mensaje//

function limpiarPantallaMsn(atributo){
    texto.value = "";                                                   //Limpia el text-area
    document.querySelector(".ningun-mensaje").style.display = atributo; //Texto Oculto
    mensaje.style.backgroundImage = "none";                             //Imagen oculta
    
}

