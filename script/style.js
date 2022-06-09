console.log("style script loaded");

let body = document.getElementById('body');
let header = document.getElementById('header');
let HeaderTitle = document.getElementById('HeaderTitle');
let number = document.getElementById('number');
let MainButton1 = document.getElementById('Minus');
let MainButton2 = document.getElementById('Plus');
let RefreshButton = document.getElementById('RefreshButton');
let RefreshIconImg = document.getElementById('RefreshIconImg');
let MenuIconImg = document.getElementById('MenuIconImg');
let metathemecolor = document.getElementById('metathemecolor');
let NavLink1 = document.getElementById('NavLink1');
let NavLink2 = document.getElementById('NavLink2');
let NavLink3 = document.getElementById('NavLink3');
let NavLink4 = document.getElementById('NavLink4');
let NavLink5 = document.getElementById('NavLink5');
let NavLink6 = document.getElementById('NavLink6');
let Sidenav = document.getElementById('mySidenav');

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (dark) {
    body.style.backgroundColor = "rgb(30, 30, 30)";

    header.style.backgroundColor = "rgb(40, 40, 40)";

    MenuIconImg.src="image/flaticon-menu-white.png";
    RefreshIconImg.src="image/flaticon-reload-white.png";

    HeaderTitle.style.color = "white";

    number.style.color = "white";

    MainButton1.style.color = "white";
    MainButton1.style.backgroundColor = "rgb(60, 60, 60)";

    MainButton2.style.color = "white";
    MainButton2.style.backgroundColor = "rgb(60, 60, 60)";

    RefreshButton.style.color = "white";
    RefreshButton.style.backgroundColor = "rgb(60, 60, 60)";

    metathemecolor.innerHTML = "#282828";

} else {

    body.style.backgroundColor = "white";

    header.style.backgroundColor = "rgb(215, 215, 215)";
    header.style.boxShadow = " 0px 10px 50px -10px rgba(100, 100, 100, 0.5)";

    MenuIconImg.src="image/flaticon-menu-black.png";
    RefreshIconImg.src="image/flaticon-reload-black.png";

    HeaderTitle.style.color = "rgb(50, 50, 50)";

    number.style.color = "rgb(50, 50, 50)";

    MainButton1.style.color = "rgb(50, 50, 50)";
    MainButton1.style.backgroundColor = "rgb(215, 215, 215)";
    MainButton1.style.boxShadow = "0px 10px 50px -10px rgba(100, 100, 100, 0.5)";

    MainButton2.style.color = "rgb(50, 50, 50)";
    MainButton2.style.backgroundColor = "rgb(215, 215, 215)";
    MainButton2.style.boxShadow = "0px 10px 50px -10px rgba(100, 100, 100, 0.5)";

    RefreshButton.style.color = "rgb(50, 50, 50)";
    RefreshButton.style.backgroundColor = "rgb(215, 215, 215)";
    RefreshButton.style.boxShadow = "0px 10px 50px -10px rgba(100, 100, 100, 0.5)";

    NavLink1.style.color = "rgb(50, 50, 50)";
    NavLink2.style.color = "rgb(50, 50, 50)";
    NavLink3.style.color = "rgb(50, 50, 50)";
    NavLink4.style.color = "rgb(50, 50, 50)";
    NavLink5.style.color = "rgb(50, 50, 50)";
    NavLink6.style.color = "rgb(50, 50, 50)";

    Sidenav.style.backgroundColor = "rgb(215, 215, 215)";

    metathemecolor.innerHTML = "#D7D7D7";

}