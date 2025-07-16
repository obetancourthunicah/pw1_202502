const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmpty = /^\s*$/;

document.addEventListener("DOMContentLoaded", () => {
    const txtNombreElement = document.getElementById("txtNombre");
    const txtEmailElement = document.getElementById("txtEmail");
    const txtPasswordElement = document.getElementById("txtPassword");
    const formDemo = document.getElementById("formDemo");

    formDemo.addEventListener("submit", (e) => {
        let error = [];
        let hasError = false;
        const nombreValue = txtNombreElement.value;
        const emailValue = txtEmailElement.value;
        const passwordValue = txtPasswordElement.value;
        console.log("Values:",
            nombreValue,
            emailValue,
            passwordValue
        );

        if (isEmpty.test(nombreValue)) {
            hasError = true;
            error.push("Nombre es requerido");
        }
        if (!emailRegex.test(emailValue)){
            hasError = true;
            error.push("El correo electrónico no es válido.")
        }
        if (hasError) {
            console.log("Errores:", error);
            e.preventDefault();
            e.stopPropagation();
        }
    });
});