/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function azar(x) {
    let numero = Math.floor(Math.random() * x.length);
    return numero;
  }
  var text = `${who[azar(who)]} ${action[azar(action)]} ${what[azar(what)]} ${
    when[azar(when)]
  } `;
  document.querySelector("#excuse").innerHTML = text;
};
