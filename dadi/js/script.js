var Dadi = ["img/00.png", "img/01.png", "img/02.png", "img/03.png", "img/04.png", "img/05.png", "img/06.png" ]

var Gioca = document.getElementById('bottone-lancio');
Gioca.addEventListener('click',
  function() {
    var d1;
    var d2;
    var msg;
    var giocatoreUno = document.getElementById('giocatore1');
    var giocatoreDue = document.getElementById('giocatore2');
    if (giocatoreUno.value == 0) {
      alert("devi scrivere il nome del giocatore Uno");
    } else if (giocatoreDue.value == 0) {
      alert("devi scrivere il nome del giocatore Due");
    } else {
      d1 = Math.floor(Math.random() * 6) + 1;;
      document.getElementById("dado1").src = Dadi[d1];

      d2 = Math.floor(Math.random() * 6) + 1;;
      document.getElementById("dado2").src = Dadi[d2];

      if (d1 == d2) {
        msg = "Lancio PARI !";
      } else
      if (d1 > d2) {
        msg = "Lancio vinto da " + giocatore1.value.toUpperCase() + " per " + d1 + " a " + d2;
      } else {
        msg = "Lancio vinto da " + giocatore2.value.toUpperCase() + " per " + d2 + " a " + d1;
      }
      document.getElementById("msg").innerHTML = msg;
    }

  });
