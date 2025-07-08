function pageLoad(){
    // // Introducción Sintaxis de Javascript

    // /*Comentario de bloque */

    // //Declarar Variables
    // var intEdad = 0; // No se recomienda
    // let strNombre = "Desarrollo de Portales Web 1";
    // const strDescripcion = "Este es el curso de desarrollo de portales web 1 de la Pontífica Universidad Católica de Honduras Nuestra Señora Reina de la Paz";
    // const arrOutputs = [];
    // let strEstado = "ACT";

    // // Condicionales Estructura de Control
    // if (intEdad > 0) {
    //     intEdad = 18;
    // } else if (intEdad < -1) {
    //     intEdad = 99;
    // } else {
    //     intEdad = 4;
    // }

    // if (strNombre === "Desarrollo de Portales Web 1") {

    // }
    // // Igualdad de Valor (Lenguage no tipificado)
    // if (1 == "1") {
    //     //Entra A o No B;
    // }
    // // Igualdad de Tipo y Valor
    // if (1 === "1") {
    //     //Entra A o No B;
    // }

    //     // Desigualdad de Valor (Lenguage no tipificado)
    // if (1 != "1") {
    //     //Entra A o No B;
    // }
    // // Desigualdad de Tipo y Valor
    // if (1 !== "1") {
    //     //Entra A o No B;
    // }

    // switch( strEstado) {
    //     case "ACT":
    //         arrOutputs.push("El estado es Activo");
    //         break;
    //     case "INA":
    //         arrOutputs.push("El estado es Inactivo");
    //         break;
    //     default:
    //         arrOutputs.push("No existe el estado.");
    // }
    // // let esMayorDeEdad = false;
    // // if (intEdad > 18){
    // //     esMayorDeEdad = true;
    // // } else {
    // //     esMayorDeEdad = false;
    // // }

    // let esMayorDeEdad = intEdad > 18 ? true : false;

    // //DOM. Document Object Model
    // // Ciclos

    // for ( let i = 0; i < 100 ; i++) {
    //    console.log("Valor iterado = " , i);
    // }

    // let j = 0;
    // while ( j <= 99) {
    //     console.log("Valor por While : ", j);
    //     j++;
    // }

    // let k = 999;
    // do {
    //     console.log("Valor por Do : ", k)
    //     k++;
    // } while ( k < 100);


    // Logica del Menu
    const hamburgerBtn = document.querySelector("header .menuButton");
    const navMenu = document.querySelector("header nav");

    hamburgerBtn.addEventListener("click", (e)=>{
        navMenu.classList.toggle("openned");
    });

}


document.addEventListener(
    "DOMContentLoaded",
    pageLoad
);