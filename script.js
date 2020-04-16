// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var input = $("input");

var oggettoPalla = {
  nome: "palla",
  peso: 10
}

$("h1").html(oggettoPalla.peso + " kg")

input.keypress(function(lettera){


  if (lettera.keyCode == 13){
    var valInput = input.val();
    oggettoPalla.peso = valInput;
    $("h1").html(valInput + " kg")
    console.log(valInput);
    input.val("");
  }

})

//
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
//


var biciCorsa = [
  {
    nome: "LA BICICLETTA LENTA",
    peso: 25
  },

  {
    nome: "LA BICICLETTA PIU' VELOCE",
    peso: 7
  },

  {
    nome: "LA BICICLETTA VELOCE",
    peso: 10
  }


]

var primoPeso = biciCorsa[0];

for (var i = 0; i < biciCorsa.length; i++) {
  console.log(biciCorsa[i].peso);

  $("#bici").append('<li>' + "Bici nr " + (i + 1) + ": " +   biciCorsa[i].nome + '</li>')

  if (biciCorsa[i].peso < primoPeso.peso) {

    primoPeso = biciCorsa[i];

  }

}

$("#bici-leggera").html(primoPeso.nome + " che pesa " + primoPeso.peso + " kg");

console.log(primoPeso.nome);
