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
    texto.value = "";                               //Limpia el text-area
}

//botón Desencriptar//
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado;

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