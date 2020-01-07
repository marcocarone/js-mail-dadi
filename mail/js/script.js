var listaUtentiRegistrati = ["vincenzolecce@libero.it", "alessandro@libero.it", "marco@libero.it"];



document.getElementById('accedi').addEventListener("click",
  function() {
    var emailUtente = document.getElementById("email-utente").value;
    var trovato = false;
    for (var i = 0; i < listaUtentiRegistrati.length; i++) {
      if (emailUtente == listaUtentiRegistrati[i]) {
        trovato = true;
      }
    }

    if (trovato == true) {
      document.getElementById('azione').innerHTML = "Puoi accedere all'area privata!";
    } else {
      document.getElementById('azione').innerHTML = "Devi registrarti per accedere al sito!";
    }

  });
