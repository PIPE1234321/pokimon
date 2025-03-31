/*function registrarUsuario() {
    let Nombre = document.getElementById('Nombre').value;
    let Password = document.getElementById('Contrasena').value;
    if (Nombre && Password) {
        localStorage.setItem(Nombre,Password)
        alert('Registro exitoso');
        window.location.href='../vistas/login.html';
    }else {
        alert('Llena todos los campos');
    }
}
*/

function registrarUsuario() {
    let Nombre = document.getElementById('Nombre').value
    let Apellido = document.getElementById('Apellido').value
    let Email = document.getElementById('Email').value
    let Direccion = document.getElementById('Direccion').value
    let Telefono = document.getElementById('Telefono').value
    let Password = document.getElementById('Contrasena').value


    let array = {
        Nombre,
        Apellido,
        Email,
        Password,
        Telefono,
        Direccion
    }
console.log(array);

let texto = document.getElementById("texto");
let titulo = document.getElementById("titulo");
let subtitulo= document.getElementById("subtitulo");
let subapartados = document.getElementById("subapartados");



texto.textContent = array(0);
titulo.textContent = array(0);
subtitulo.textContent = array(0);
subapartados.textContent = array(0);
}
  




