//selecting dom element
var demo = document.getElementById("demo");
var classe = document.getElementsByClassName("classdemo");
var para = document.getElementsByTagName("p");
var querysel = document.querySelector(".class1");
var quersels = document.querySelectorAll(".class1");

var text = "<h1>entering a new piece of text</h1>";
// demo.innerHTML = text;
//dont use innerHtml as it will lead to cross-site attack, instead use textContent which 
//will paste the text as raw text and not a html element.
demo.textContent = text;


//getting and setting.
demo.style.color = "red";