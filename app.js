let amigo = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); 
    if (nombreAmigo === "") {
        alert("Por favor ingrese un nombre");
        return;
    }
    if (amigo.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya se encuentra en la lista`);
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = ""; 
    actualizarLista();
}

function actualizarLista() {
    const ListaAmigos = document.getElementById("listaAmigos");
    ListaAmigos.innerHTML = ""; 
    for (let i = 0; i < amigo.length; i++) {
        const Li = document.createElement("li");
        Li.textContent = amigo[i];
        ListaAmigos.appendChild(Li);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No hay amigos disponibles para sortear");
        return;
    }
    const resultado = document.getElementById("resultado");
    const indiceAleatorio = Math.floor(Math.random() * amigo.length);
    const amigoSorteado = amigo[indiceAleatorio];
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
