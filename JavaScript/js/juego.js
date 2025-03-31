class Pokimon {
    constructor(nombre, tipo, habilidad, ataque, defensa, evolucion) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.habilidad = habilidad;
        this.ataque = ataque;
        this.defensa = defensa;
        this.evolucion = evolucion;
    }

    atacar() {
        return this.ataque;
    }

    defender() {
        return this.defensa;
    }

    mostrarInfo() {
        return `${this.nombre} - Tipo: ${this.tipo} <br>
                Habilidad: ${this.habilidad} <br>
                Ataque: ${this.ataque}, Defensa: ${this.defensa} <br>
                Evolución: ${this.evolucion} <br><br>`;
    }
}

class Entrenador {
    constructor(nombre, equipo) {
        this.nombre = nombre;
        this.equipo = equipo;
    }
}

class Batalla {
    static iniciarBatalla(pokimon1, pokimon2) {
        let resultado = pokimon1.mostrarInfo() + pokimon2.mostrarInfo();
        resultado += `${pokimon1.nombre} y ${pokimon2.nombre} se enfrentan...<br>`;

        const ataque1 = pokimon1.atacar();
        const ataque2 = pokimon2.atacar();

        const defensa1 = pokimon1.defender();
        const defensa2 = pokimon2.defender();

        const daño1 = ataque1 - defensa2;
        const daño2 = ataque2 - defensa1;

        resultado += `${pokimon1.nombre} ataca a ${pokimon2.nombre} y causa ${Math.max(0, daño1)} de daño.<br>`;
        resultado += `${pokimon2.nombre} ataca a ${pokimon1.nombre} y causa ${Math.max(0, daño2)} de daño.<br>`;

        if (daño1 > daño2) {
            resultado += `<br>${pokimon1.nombre} gana la batalla.`;
        } else if (daño2 > daño1) {
            resultado += `<br>${pokimon2.nombre} gana la batalla.`;
        } else {
            resultado += `<br>¡Es un empate!`;
        }

        return resultado;
    }
}

const pokimons = [
    new Pokimon("Pikachu", "Eléctrico", "Impactrueno", 55, 40, "Raichu"),
    new Pokimon("Charmander", "Fuego", "Llamarada", 52, 43, "Charmeleon"),
    new Pokimon("Bulbasaur", "Planta", "Latigazo", 49, 49, "Ivysaur"),
    new Pokimon("Squirtle", "Agua", "Pistola Agua", 48, 65, "Wartortle"),
    new Pokimon("Eevee", "Normal", "Adaptabilidad", 55, 50, "Varias evoluciones")
];

const select1 = document.getElementById('pokemon1');
const select2 = document.getElementById('pokemon2');

pokimons.forEach((pokimon, index) => {
    const option1 = document.createElement('option');
    option1.value = index;
    option1.text = pokimon.nombre;
    select1.add(option1);

    const option2 = document.createElement('option');
    option2.value = index;
    option2.text = pokimon.nombre;
    select2.add(option2);
});

function iniciarBatalla() {
    const index1 = select1.value;
    const index2 = select2.value;

    if (index1 === index2) {
        document.getElementById('resultado').innerHTML = "¡Debes elegir Pokémon diferentes!";
        return;
    }

    const pokemon1 = pokimons[index1];
    const pokemon2 = pokimons[index2];

    const resultado = Batalla.iniciarBatalla(pokemon1, pokemon2);

    document.getElementById('resultado').innerHTML = resultado;
}
