// Cargar estado de sesión
window.onload = function () {
   const currentUser = localStorage.getItem("currentUser");
   if (currentUser) {
      showApp(currentUser);
   }
};

function toggleForm() {
   const loginForm = document.getElementById("login-form");
   const registerForm = document.getElementById("register-form");
   const title = document.getElementById("form-title");

   if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
      title.textContent = "Iniciar Sesión";
   } else {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
      title.textContent = "Registrarse";
   }
}

function register() {
   const username = document.getElementById("register-username").value.trim();
   const password = document.getElementById("register-password").value;

   if (!username || !password) {
      alert("Por favor, completa todos los campos.");
      return;
   }

   if (localStorage.getItem(username)) {
      alert("Este usuario ya existe.");
      return;
   }

   localStorage.setItem(username, password);
   alert("Usuario registrado correctamente.");
   toggleForm();
}

function login() {
   const username = document.getElementById("login-username").value.trim();
   const password = document.getElementById("login-password").value;

   const storedPassword = localStorage.getItem(username);

   if (storedPassword && storedPassword === password) {
      localStorage.setItem("currentUser", username);
      showApp(username);
   } else {
      alert("Usuario o contraseña incorrectos.");
   }
}

function showApp(username) {
   document.getElementById("auth-container").style.display = "none";
   document.getElementById("app").style.display = "block";
   document.getElementById("navbar-username").textContent = username;
}

function logout() {
   localStorage.removeItem("currentUser");
   document.getElementById("app").style.display = "none";
   document.getElementById("auth-container").style.display = "block";
   document.getElementById("form-title").textContent = "Iniciar Sesión";
}

function showSection(sectionId) {
   document.querySelectorAll(".content").forEach(sec => sec.classList.remove("active-section"));
   document.getElementById(sectionId).classList.add("active-section");
}

console.log("Calculadora Inteligente!");

// ====== Variables y Constantes ======
//var  let  const
let darkMode = false;
const PI = 3.1416; // ejemplo de constante

// ====== Eventos ======
//document: pagina
//getElementById:busca por id 
//("...es el ID del elemento ....")
// el . se coloca porque se va a invicar la funcion que ejecuta 
//addEvenListener: evento de escucha
//("click, calcular") click es el elemento 
//calcular es la funcion que hace la operacion
document.getElementById("calcBtn").addEventListener("click", calcular); //esto programa los botones, 
document.getElementById("processText").addEventListener("click", procesarTexto);
document.getElementById("toggleMode").addEventListener("click", cambiarModo);

// ====== funciones principales ======

// Función para calcular operaciones matemáticas
function calcular() {
    // JS Variables & Operators
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacion = document.getElementById("operation").value;
    let resultado;

    // ====== JS If Conditions, Switch, Logical ======
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            // Uso de operador ternario para evitar división por cero
            resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir entre 0";
            break;
        case "%":
            resultado = num1 % num2;
            break;
            case "**":
            resultado = num1 ** num2;
                break;
        case "sqrt":
            resultado = Math.sqrt(num1,num2);
                break;
        default:
            resultado = "Operación no válida";
    }

    // JS Ternary
    const mensaje = isNaN(resultado)
        ? `Ingresa números válidos`
        : `Resultado: ${resultado}`;

    // JS String Template
    document.getElementById("mathResult").textContent = `${mensaje}`;
}

// ====== Procesamiento de texto ======
function procesarTexto() {
    let texto = document.getElementById("textInput").value;

    // JS String Methods & Search
    let mayus = texto.toUpperCase();
    let longitud = texto.length;
    let contieneA = texto.includes("a");
    let palabra = texto.trim();

    // JS Loops
    let letras = "";
    for (let i = 0; i < palabra.length; i++) {
        letras += palabra[i] + "-";
        if (i > 70) break; // JS Break
    }

    document.getElementById("textResult").innerHTML = `
        <b>Texto en mayúsculas:</b> ${mayus}<br>
        <b>Longitud:</b> ${longitud}<br>
        <b>¿Contiene 'a'?</b> ${contieneA}<br>
        <b>Letras:</b> ${letras}
    `;
}

// ====== Cambiar modo (Booleans + Logical + Assignment) ======
