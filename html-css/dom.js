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
demo.style.backgroundColor = "yellow";
console.log(demo.style);
//to check all the style properties anywhere, be it css or html or in js inline
console.log(window.getComputedStyle(demo));


//events
function myfunction(obj) {
    obj.style.backgroundColor = "red";
}

document.getElementById("mybutton").onclick = myfunction1;

function myfunction1() {
    document.querySelector("body").style.backgroundColor = "peru";
}

//on events - mouseover
function mOver(obj) {
    obj.innerHTML = "GET OFF ME!"
}

function mOut(obj) {
    obj.innerHTML = "bye 😃"
}


function mouseIn(obj) {
    obj.innerHTML = "my mouse is active";
}

function mouseout(obj) {
    obj.innerHTML = "my mouse is resting";
}

//addEventListener is used to write more than one event for the same element/obj
var event1 = document.getElementById("box1"); //first calling the element
event1.addEventListener("click", function () {
    this.textContent = "display my event listener";
});
event1.addEventListener("click", function () {
    this.style.background = "red";
});
//removeEventListener won't work if you define the function inside the addEventListener



//dom nodes- creating element
var para = document.createElement("p");
var node = document.createTextNode("this is the third para");
//appending the p with paragraph
para.appendChild(node);
//connecting with the required para where the above para needs to be added
var parent = document.getElementById("div1");
//now we will add the third para to the div id
parent.appendChild(para);
//another way to add text to the p element
var para2 = document.createElement("p");
para2.innerHTML = "this is the fourth para";
//calling p1 element so that fourth para can be added before first para
var child = document.getElementById("p1");
parent.insertBefore(para2, child);
//creating a fifth para element and para
var para3 = document.createElement("p");
para3.innerHTML = "this is the fifth para";
//now replacing the first para
parent.replaceChild(para3, child);
//to delete the element, i want to delete the second para
//so first il call it
var para4 = document.getElementById("p2")
//now il remove this 2nd para
parent.removeChild(para4);