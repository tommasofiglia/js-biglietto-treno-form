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

    // Scrivo il nome nel biglietto
    document.getElementById('nome-passeggero').innerHTML = inputFullNameValue ;


  }
);
