function Loguear() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let storedpassword = localStorage.getItem(username);

    if (storedpassword && storedpassword === password) {
        alert('Usuario correcto')
        localStorage.setItem ('Usuario Activo', username);
        window.location.href="../vistas/juego.html";
    }else{
        alert('Usuario o contraseña incorrectos')
    }
}