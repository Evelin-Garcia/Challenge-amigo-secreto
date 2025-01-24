// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Se crea una lista vacía que almacenará los nombres de los amigos.
let amigos =[];

// Función para agregar un amigo a la lista
function agregarAmigo () {
    //Obtener el valor del campo de entrada de nombre de amigo
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    //Validar la entrada: asegura que el campo no esté vacío. Si está vacío, mostrará un alert con un mensaje de error.
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    //Si el valor es válido, agregar el amigo al array
    amigos.push(nombre);
    //Limpiar el campo de texto
    input.value = "";
    //Actualizar la lista en la página
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar la lista en la página

    //Agregar cada amigo a la lista en la página
    for(let i=0; i<amigos.length; i++){
        const amigo = document.createElement("li");
        amigo.textContent = amigos[i];
        lista.appendChild(amigo);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <br><br>🎉  ${amigoSorteado}  🎉`;
    amigos.length = 0;
    listaAmigos.innerHTML = '';
}



