"use strict";

// ----------------------- IMPORTING JSON -------------------- //


let myJson;
let json;
let kasse;
let vigtig;
let nummer;
let button;
let tekst;
let elm;
let template = document.querySelector("#mintemplate");
let container = document.querySelector("#container");


document.addEventListener("DOMContentLoaded", loadJson);

async function loadJson() {
myJson = await fetch("https://kea-alt-del.dk/customersupport/?count=20");
json = await myJson.json();

// console.log(json);

json.forEach( function(json){
let klon = template.cloneNode(true).content;
klon.querySelector(".data-person").textContent = json.first;
klon.querySelector(".data-efternavn").textContent = json.last;
klon.querySelector(".data-message").textContent = json.message;
klon.querySelector(".data-full").textContent = json.full;
klon.querySelector(".data-color").textContent = json.importance;



container.appendChild(klon);
})
}


// function showColor(loadJson){
//     vigtig = event.target.children[0];
//     if (vigtig.textContent < 80){
//         vigtig.style.background = "red";
//     }
    
//     if (vigtig.textContent < 60) {
//         vigtig.style.background = "yellow";
//     } 
// }


document.querySelector("div").addEventListener("mouseover", grow);

document.querySelector("div").addEventListener("mouseout", thin);

// document.querySelector(".div").addEventListener("click", remove);


function grow(){
    tekst = event.target.id.lastChild;
    elm = event.target;
    kasse = event.target.id;
    vigtig = event.target.children[0];
    nummer = event.target.firstChild[1];

    console.log(vigtig);
    if (kasse = important){
    elm.style.height = "40vh";
    }
    document.querySelector(".data-full").style.opacity = "1";

    if (vigtig.textContent > 1) {
        vigtig.style.background = "lightgreen";
    }

    if (vigtig.textContent > 45) {
        vigtig.style.background = "#ebe26d"
    } 

    if (vigtig.textContent > 70){
        vigtig.style.background = "lightcoral";
    }
}

function thin(grow){
    if (kasse = elm.style.height = "40vh"){
    elm.style.height = "15vh";
    }

    document.querySelector(".data-full").style.opacity = "0";
}


function remove(){
    // button = event.target.id.lastChild;
    // let array = Array.from(json);
    // array.splice(elm);
    console.log("hej");
}

grow();
