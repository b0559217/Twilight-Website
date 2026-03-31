"use strict";

let info = document.getElementById("events");
let day = "<table><th>Today and tomorrow's events<th><br><tr>";

switch (new Date().getDay()) {
    case 0:
        day += "<th>Sunday:</th>";
        day += "<tr>Kickboxing class at 11:00 am <br>Murder mystery night at 6:30 pm</tr>";
        day += "<br><br>Tomorrow!<br>"
        day += "Monday:<br>No Events";
        break;
    case 1:
        day += "Monday:<br>No Events";
        day += "<br><br>Tomorrow!<br>"
        day += "Tuesday:<br>No Events";
        break;
    case 2:
        day += "<th>Tuesday:<br></th><td>No Events</td>";
         day += "<th>Tomorrow is</th><br>"
        day += "<th>Wednesday:<br></th><td>No Events</td>";
        break;
    case 3:
        day += "Wednesday:<br>No Events";
        day += "<br><br>Tomorrow!<br>"
        day += "Thursday:<br>No Events";
        break;
    case 4:
        day += "Thursday:<br>No Events";
        day += "<br><br>Tomorrow!<br>"
        day += "Friday:<br>";
        day += "Yoga class at 10:00 am<br>Argentinian grill night at 6:30 pm";
        break;
    case 5:
        day += "Friday:<br>";
        day += "Yoga class at 10:00 am<br>Argentinian grill night at 6:30 pm";
        day += "<br><br>Tomorrow!<br>"
        day += "Saturday:<br>";
        day += "HITT workout class at 12:00 pm<br>Photography tour at 5:00 pm<br> Jazz club night at 8:00 pm";

        break;
    case 6:
        day += "Saturday:<br>";
        day += "HITT workout class at 12:00 pm<br>Photography tour at 5:00 pm<br> Jazz club night at 8:00 pm";
        day += "<br><br>Tomorrow!<br>"
        day += "Sunday:<br>";
        day += "Kickboxing class at 11:00 am <br>Murder mystery night at 6:30 pm";
}
let text = document.createElement("p");
day += "<tr></table>"
text.innerHTML = day;
info.appendChild(text);