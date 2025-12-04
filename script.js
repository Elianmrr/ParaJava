
const nombre = prompt("Ingresa tu nombre:");
const nacimiento = prompt("Ingresa tu año de nacimiento:");


const yearActual = new Date().getFullYear();


const edad = yearActual - nacimiento;


document.getElementById("resultado").textContent =
    `Hola, ${nombre}. Tienes ${edad} años.`;


