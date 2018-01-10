var date = (function() {

// Beschikbare datums, aantal is oneindig
var dates = [
    "Jan 10, 2018 12:00:00",
    "Jan 10, 2018 18:00:00",
    "Jan 20, 2018 14:00:00",
    "Jan 20, 2018 18:00:00",
    "Feb 02, 2018 08:00:00",
    "Feb 21, 2018 10:00:00"
];

// Maak een aantal div-buttons aan op basis van array data
var container = document.getElementById("container");
for (var i = 0; i < dates.length; i++) {
   container.innerHTML += '<div id = "box' + i  + '"class="box" >' + dates[i] + '</div>';
}

// Voeg een klik-event toe aan de div-buttons en haal de geklikte datum op
var classname = document.getElementsByClassName("box");

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, this.click);
}

function myFunction() {
  console.log(this.innerHTML);
  
   // Bepaal de datum waar de countdown naar moet aflopen
   var countDownDate = new Date(this.innerHTML).getTime();

   // Verwijder de container van alle datums
   container.parentElement.removeChild(container);

   // Update de countdown per seconde
   var x = setInterval(function() {

     // De huidige datum en tijd
     var now = new Date().getTime();

     // Bereken het verschil tussen nu en de afteldatum
     var distance = countDownDate - now;

     // Tijd berekeningen voor dagen, uren, minuten en seconden.
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);


     // Display de tijd, wanneer een waarde op 1 terecht komt wordt het woord enkelvoud
     if (days == 1) {
      var dag = document.getElementById("Dagen").innerHTML = days + ' dag' ;
     } else {
      var dag = document.getElementById("Dagen").innerHTML = days + ' dagen' ;
     }

     if (hours == 1) {
      var uur = document.getElementById("Uren").innerHTML = hours + ' uur' ;
     } else {
      var uur = document.getElementById("Uren").innerHTML = hours + ' uren' ;
     }

     if (minutes == 1) {
      var min = document.getElementById("Minuten").innerHTML = minutes + ' minuut' ;
     } else {
      var min = document.getElementById("Minuten").innerHTML = minutes + ' minuten' ;
     }

     if (seconds == 1) {
      var sec = document.getElementById("Seconden").innerHTML = seconds + ' seconde' ;
     } else { 
      var sec = document.getElementById("Seconden").innerHTML = seconds + ' seconden' ;
     }
    

     // Laat weten wanneer de countdown is afgelopen en verwijder alle tijden
     if (distance < 0) {
       clearInterval(x);
       var element = document.getElementById("Dagen");
       element.parentNode.removeChild(element);
       var element = document.getElementById("Uren");
       element.parentNode.removeChild(element);
       var element = document.getElementById("Minuten");
       element.parentNode.removeChild(element);
       var element = document.getElementById("Seconden");
       element.parentNode.removeChild(element);

       var countdown = document.getElementById("countdown").innerHTML = "Deze datum is verstreken";
     }
   }, 1000);

}

return

})()
