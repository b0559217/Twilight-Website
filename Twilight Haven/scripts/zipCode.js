"use strict";
/*  Project to get city and state information from a provided postal code

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  let codeValue = postalCode.value;
  let countryValue = country.value.toLowerCase(); // Example: "us", "ca", etc.
  place.value = "";
  region.value = "";

  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("ZIP code not found.");
      }
      return response.json();
    })
    .then(json => {
      place.value = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
    })
    .catch(error => {
      place.value = "Invalid ZIP";
      region.value = "";
      console.log(error.message);
    });
}; */

$("#postalCode").on("blur", function () {
  let codeValue = $("#postalCode").val();
  let countryValue = $("#country").val().toLowerCase(); // Example: "us", "ca", etc.

  $("#place").val("");
  $("#region").val("");

  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("ZIP code not found.");
      }
      return response.json();
    })
    .then(json => {
      $("#place").val(json.places[0]["place name"]);
      $("#region").val(json.places[0]["state abbreviation"]);
    })
    .catch(error => {
      $("#place").val("Invalid ZIP");
      $("#region").val("");
      console.log(error.message);
    });
});

