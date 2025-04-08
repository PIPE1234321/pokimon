function combatir() {
    let nombre = document.getElementById("nombre").value;

    if (nombre.length < 3) {
        alert("El nombre del entrenador debe tener al menos 3 caracteres.");
        return false;
    }

    let apellido = document.getElementById("apellido").value;

    if (apellido.length < 3) {
        alert("El apellido del entrenador debe tener al menos 3 caracteres.");
        return false;
    }
    
    
    let telefono = document.getElementById("telefono").value;
    let telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El número de teléfono del entrenador debe tener 10 dígitos.");
        return false;
    }


    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("El correo electrónico del entrenador no es válido.");
        return false;
    }
    if (nombre.length < 3) {
        alert("El nombre del pokimon debe tener al menos 3 caracteres.");
        return false;
    }

    let pokimon = document.getElementById("pokimon").value;

    if (pokimon.length < 3) {
        alert("El tipo de pokimon debe tener al menos 3 caracteres.");
        return false;
    }
    let ataque = document.getElementById("ataque").value;

    if (ataque.length < 3) {
        alert("El ataque debe tener mas cantidad");
        return false;
    }
    let defensa = document.getElementById("defensa").value;

    if (defensa.length < 3) {
        alert("la defensa debe tener mas cantidad.");
        return false;
    }




    let array = [
        nombre,
        apellido,
        email,
        telefono,
    ]

    localStorage.setItem("user", JSON.stringify(array));
    alert("perdiste por que pikachu tiene mas defensa y ataque intenta en la proxima")
    window.location.href = "../vistas/Entrenador.html"
}
function verPokimons() {
    const pokimons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];
    alert("Tus Pokimons:\n" + pokimons.join("\n"));
}
