// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//archivo de js con todas las funcionalidades de amigo secreto

//variables
let listaAmigos = [];
var capturaAmigo = "";

function agregarAmigo()
{
 capturaAmigo = document.getElementById("amigo").value;
 listaAmigos.push(capturaAmigo);
 alert("El amigo ingresado es "+capturaAmigo);
 document.getElementById("amigo").value = "";

 
}


function sortearAmigo()
{
alert("sortear amigo secreto "+listaAmigos);
var randomListaAmigos = Math.floor(Math.random() * listaAmigos.length);
var randomValorListaAmigos = listaAmigos[randomListaAmigos];
alert("sorteado " +randomValorListaAmigos);

}