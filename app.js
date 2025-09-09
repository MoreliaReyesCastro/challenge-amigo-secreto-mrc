// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica 
// para resolver el problema.
//archivo de js con todas las funcionalidades del challenge amigo secreto

//declaracion de variables globales
let listaAmigos = [];
var capturaAmigo = "";



function agregarAmigo()
{
//esta funcion tiene por objetivo agregar un amigo secreto a la lista de amigos

//recupera las variables desde el DOM
 capturaAmigo = document.getElementById("amigo").value; //valor introducido en textbox
 const lista = document.getElementById("listaAmigos"); //variable que aloja la lista

//aplica conversion en el texto
    capturaAmigo = capitalize(capturaAmigo);
    

    if(evaluaAmigo(capturaAmigo,lista ))
    {
        if (capturaAmigo.trim() !== "") {
            const nuevoLi = document.createElement("li");
            nuevoLi.textContent = capturaAmigo;
            lista.appendChild(nuevoLi);
            listaAmigos.push(capturaAmigo);
            document.getElementById("amigo").value = "";
            
        } else {
                        alert("Por favor :), escribe un amigo válido para agregar.");
                    }
    }
    else
    {
        alert("Por favor :), escribe un amigo distinto para agregar, ese ya se encuentra en la lista");
        document.getElementById("amigo").value = "";
    }



}


function sortearAmigo()
{
    //esta funcion tiene por objetivo sortear random un amigo secreto de la lista de amigos
    
const listaResultado = document.getElementById("resultado"); //variable que aloja la lista resultado
const listaSorteo = document.getElementById("listaAmigos");

if(listaSorteo.childNodes.length > 0)
{
//alert("sortear amigo secreto "+listaAmigos);
var randomListaAmigos = Math.floor(Math.random() * listaAmigos.length);
var randomValorListaAmigos = listaAmigos[randomListaAmigos];
const lista = document.getElementById("amigo");
//alert("sorteado " +randomValorListaAmigos);

const resultadoLi = document.createElement("li");
resultadoLi.textContent = "El amigo secreto elegido es: "+randomValorListaAmigos;
listaResultado.appendChild(resultadoLi);
deshabilitarBoton("botonSorteo");
habilitarJuego("botonReinicio");
}
else
{
    alert("Por favor :), escribe un amigo para agregar y comenzar el juego");
}
}


function evaluaAmigo(capturaAmigoE,lista)
{
    //esta funcion evalua si el amigo existe ya en la lista
    //si no existe devuelve un true permite su ingreso
    //si existe devuelve un false no permite su ingreso repetido


    // Obtenemos todos los <li> dentro del <ul>
    const liElements = lista.querySelectorAll("li");

    // Convierte la NodeList en un array
    const arrayDeElementos = Array.from(liElements);

   // guardamos el texto de la <li> usando map()
  const textos = arrayDeElementos.map(li => li.textContent);
  //alert(textos);

       if (textos.includes(capturaAmigoE)) 
        {
            //return alert("El valor ya está en el array.");
            return false;
        } else {
            //return alert("El valor no está en el array.");
            return true;
        }
    
}

function capitalize(texto) {
    //esta funcion deja el nombre del amigo secreto con la primera letra en MAYUSCULA
    // y las restantes en minuscula
  const firstLetter = texto.charAt(0);
  const rest = texto.slice(1).toLowerCase();
  return firstLetter.toUpperCase() + rest;
}

 function deshabilitarBoton(idboton) {
      const boton = document.getElementById(idboton);
      boton.disabled = true; // Deshabilita el botón
      boton.textContent = "Botón deshabilitado"; // Cambia el texto del botón
      
    }

 function habilitarJuego(idboton) {
      const boton = document.getElementById(idboton);
      boton.disabled = false; // Deshabilita el botón
      //boton.textContent = "Botón deshabilitado"; // Cambia el texto del botón
      
    }
