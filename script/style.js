console.log("style script loaded");

let body = document.getElementById('body');
let header = document.getElementById('header');
let HeaderTitle = document.getElementById('HeaderTitle');
let number = document.getElementById('number');
let MainButton1 = document.getElementById('Minus');
let MainButton2 = document.getElementById('Plus');
let infobutton = document.getElementById('infobutton');
let RefreshIconImg = document.getElementById('RefreshIconImg');
let metathemecolor = document.getElementById('metathemecolor');

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (dark) {
    body.style.backgroundColor = "rgb(30, 30, 30)";

    header.style.backgroundColor = "rgb(40, 40, 40)";

    RefreshIconImg.src="image/flaticon-reload-white.png";

    HeaderTitle.style.color = "white";

    number.style.color = "white";

    MainButton1.style.color = "white";
    MainButton1.style.backgroundColor = "rgb(60, 60, 60)";

    MainButton2.style.color = "white";
    MainButton2.style.backgroundColor = "rgb(60, 60, 60)";

    infobutton.style.color = "white";
    infobutton.style.backgroundColor = "rgb(60, 60, 60)";

    metathemecolor.innerHTML = "#282828";

} else {

    body.style.backgroundColor = "white";

    header.style.backgroundColor = "rgb(195, 195, 195)";
    header.style.boxShadow = " 0px 10px 50px -10px rgba(100, 100, 100, 0.5)";

    RefreshIconImg.src="image/flaticon-reload-black.png";

    HeaderTitle.style.color = "black";

    number.style.color = "black";

    MainButton1.style.color = "black";
    MainButton1.style.backgroundColor = "rgb(215, 215, 215)";
    MainButton1.style.boxShadow = "0px 10px 50px -10px rgba(100, 100, 100, 0.5)";

    MainButton2.style.color = "black";
    MainButton2.style.backgroundColor = "rgb(215, 215, 215)";
    MainButton2.style.boxShadow = "0px 10px 50px -10px rgba(100, 100, 100, 0.5)";

    infobutton.style.color = "black";
    infobutton.style.backgroundColor = "rgb(215, 215, 215)";
    infobutton.style.boxShadow = "0px 10px 50px -10px rgba(100, 100, 100, 0.5)";

    metathemecolor.innerHTML = "#C3C3C3";

}