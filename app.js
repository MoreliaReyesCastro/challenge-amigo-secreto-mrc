// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//archivo de js con todas las funcionalidades de amigo secreto

//variables
let listaAmigos = [];
var capturaAmigo = "";

function agregarAmigo()
{
 capturaAmigo = document.getElementById("amigo").value; //valor introducido en textbox
 const lista = document.getElementById("listaAmigos"); //variable que aloja la lista

if (capturaAmigo.trim() !== "") {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = capturaAmigo;
    lista.appendChild(nuevoLi);
    listaAmigos.push(capturaAmigo);
    document.getElementById("amigo").value = "";
    
 } else {
                alert("Por favor :), escribe un amigo para agregar.");
            }

}


function sortearAmigo()
{
    
const listaResultado = document.getElementById("resultado"); //variable que aloja la lista resultado
const listaSorteo = document.getElementById("listaAmigos");

alert("sortear amigo secreto "+listaAmigos);
var randomListaAmigos = Math.floor(Math.random() * listaAmigos.length);
var randomValorListaAmigos = listaAmigos[randomListaAmigos];
const lista = document.getElementById("amigo");
alert("sorteado " +randomValorListaAmigos);

const resultadoLi = document.createElement("li");
resultadoLi.textContent = "Elegido "+randomValorListaAmigos;
listaResultado.appendChild(resultadoLi);


}




