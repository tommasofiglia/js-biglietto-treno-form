// Definisco le variabili che contengono i due button, genera e annulla.

var actionGenera = document.getElementById('btn-genera');
var actionAnnulla = document.getElementById('btn-annulla');

// Click su genera

actionGenera.addEventListener('click', function () {

    // Descrivo le variabili relative a Nome, km e range di età inseriti
    var inputKilometers = document.getElementById('kilometers');
    var inputFullName = document.getElementById('full-name');
    var inputAge = document.getElementById('age-range');

    // Descrivo le variabili relative ai value assunti da Nome, km e range di età inseriti
    var inputKilometersValue = inputKilometers.value;
    var inputFullNameValue = inputFullName.value;
    var inputAgeValue = inputAge.value;

    // Decrivo tutto ciò che avviene quando la pagina deve mostrare il prezzo
    var distancePrice = inputKilometersValue * 0.21 ;

    if (inputAgeValue == "minorenne") {

      document.getElementById('sconto').innerHTML = "Sconto Minorenne" ;
      document.getElementById('ticket-price').innerHTML = distancePrice - (distancePrice * 20) /100 + " $";

    } else if (inputAgeValue == "over65") {

      document.getElementById('sconto').innerHTML = "Sconto Over-65" ;
      document.getElementById('ticket-price').innerHTML = distancePrice - (distancePrice * 40) /100 + " $";

    } else {

      document.getElementById('sconto').innerHTML = "Nessuno sconto" ;
      document.getElementById('ticket-price').innerHTML = distancePrice + " $";

    }

    // Scrivo il nome nel biglietto
    document.getElementById('nome-passeggero').innerHTML = inputFullNameValue ;

    //Scrivo la carrozza nel biglietto (numero compreso tra 1 e 9)
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 9) +1;

    //Scrivo il codice CP nel Biglietto (nmumero compreso tra 90000 e 99999)
    document.getElementById('codice-cp').innerHTML = Math.floor(Math.random() * 9999) +90000;

  }
);

// Click su annulla
actionAnnulla.addEventListener('click', function () {

  document.getElementById('sconto').innerHTML = "" ;
  document.getElementById('ticket-price').innerHTML = "";
  document.getElementById('nome-passeggero').innerHTML = "";
  document.getElementById('carrozza').innerHTML = "";
  document.getElementById('codice-cp').innerHTML = "";

}
);
