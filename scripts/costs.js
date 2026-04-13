const Argentinian_Grill_Night = 24.95;
const Jazz_Club_Night = 19.95;
const Murder_Mystery_Night = 25.00;
const Photography_Tour = 30.00;
const Packed_Lunch = 8.00;
const Yoga_Class = 15.00;
const HITT_Class = 15.00;
const Sapphire_Room = 150.00;
const Emerald_Room = 150.00;
const Regular_Room = 100.00;
const SALES_TAX = 0.07; 
const Nights_Set = 0;

document.getElementById("argentinian").onclick = calcTotal;
document.getElementById("jazz").onclick = calcTotal;
document.getElementById("murder").onclick = calcTotal;
document.getElementById("photography").onclick = calcTotal;
document.getElementById("lunch").onclick = calcTotal;
document.getElementById("yoga").onclick = calcTotal;
document.getElementById("hitt").onclick = calcTotal;
document.getElementById("nights").onchange = calcTotal;
document.getElementById("sapphire").onclick = calcTotal;
document.getElementById("emerald").onclick = calcTotal;
document.getElementById("regular").onclick = calcTotal;
document.getElementById("nights").onchange = calcTotal;




function calcTotal() {
   let cost = 0;
   let buy_sapphire = document.getElementById("sapphire").checked;
   let buy_emerald = document.getElementById("emerald").checked;
   let buy_regular = document.getElementById("regular").checked;
   let buyArgentinian = document.getElementById("argentinian").checked;
   let buyJazz = document.getElementById("jazz").checked;
   let buyMurder = document.getElementById("murder").checked;
   let buyPhotography = document.getElementById("photography").checked;
   let buyLunch = document.getElementById("lunch").checked;
   let buyYoga = document.getElementById("yoga").checked;
   let buyHITT = document.getElementById("hitt").checked;
   let Nights = parseInt(document.getElementById("nights").value) || 0;

   cost += (buyArgentinian) ? Argentinian_Grill_Night : 0;  
   cost += (buyJazz) ? Jazz_Club_Night : 0;
   cost += (buyMurder) ? Murder_Mystery_Night : 0;
   cost += (buyPhotography) ? Photography_Tour : 0;
   cost += (buyLunch) ? Packed_Lunch : 0;
   cost += (buyYoga) ? Yoga_Class : 0;
   cost += (buyHITT) ? HITT_Class : 0;

// room cost
   if (buy_emerald) {
      cost += Emerald_Room * Nights;
   }

   if (buy_sapphire) {
      cost += Sapphire_Room * Nights;
   }
   if (buy_regular) {
      cost += Regular_Room * Nights;
   }

   document.getElementById("subtotal").innerHTML = formatCurrency(cost);
   
   let tax = (cost) * SALES_TAX;
   document.getElementById("salestax").innerHTML = formatCurrency(tax);

   let totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}


// Function to display a numeric value as a text string in the format $##.## 


 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
