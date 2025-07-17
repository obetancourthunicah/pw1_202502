const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmpty = /^\s*$/;
const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;

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
            txtNombreElement.classList.add("error");
            let parentContainer = txtNombreElement.parentNode;
            let errorDiv = document.createElement("DIV");
            errorDiv.classList.add("error");
            errorDiv.innerHTML = "Nombre es requerido";
            parentContainer.appendChild(errorDiv);
            error.push("Nombre es requerido");
        }
        if (!emailRegex.test(emailValue)){
            txtEmailElement.classList.add("error");
            let parentContainer = txtEmailElement.parentNode;
            let errorDiv = document.createElement("DIV");
            errorDiv.classList.add("error");
            errorDiv.innerHTML = "El correo electrónico no es válido.";
            parentContainer.appendChild(errorDiv);
            hasError = true;
            error.push("El correo electrónico no es válido.");
        }
        if (!passwordRegex.test(passwordValue)){
            txtPasswordElement.classList.add("error");
            let parentContainer = txtPasswordElement.parentNode;
            let errorDiv = document.createElement("DIV");
            errorDiv.classList.add("error");
            errorDiv.innerHTML = "Contraseña debe tener al menos 8 caractéres, 1 mayúscula, 1 minúscula, un número y un caracter especial.";
            parentContainer.appendChild(errorDiv);
            hasError = true;
            error.push("Contraseña debe tener al menos 8 caractéres, 1 mayúscula, 1 minúscula, un número y un caracter especial.");
        }
        if (hasError) {
            console.log("Errores:", error);
            e.preventDefault();
            e.stopPropagation();
        }
    });
});