/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//arrays de excusas
document.addEventListener("DOMContentLoaded", function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["before the class","when I was sleeping","while I was exercising","during my lunch","while I was praying",];
  //Obtener un elemento al azar de un array
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  //Variable para obtener la excusa completa
  let excuse = `${getRandomElement(who)} ${getRandomElement(
    action
  )} ${getRandomElement(what)} ${getRandomElement(when)}.`;
  document.getElementById("excuse").textContent = excuse;
});
