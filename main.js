console.log(localStorage)

let add = document.getElementById('Plus');
let remove = document.getElementById('Minus');

let val = document.getElementById('number');
let ref = document.getElementById('RefreshButton');
let integer = 0 ;

ref.addEventListener('click',function(){
    integer = 0;
    val.innerHTML = integer;
    localStorage.setItem('number', 0)
    window.navigator.vibrate([50, 50, 30]);
})

document.addEventListener("DOMContentLoaded", function(){
    integer = JSON.parse(window.localStorage.getItem('number'));
    val.innerHTML = integer;
    window.navigator.vibrate([30, 50, 30]);
})

add.addEventListener('click',function(){
    integer += 1;
    val.innerHTML = integer;
    localStorage.setItem('number', integer)
    window.navigator.vibrate(50);
})

remove.addEventListener('click',function(){
    integer -= 1;
    val.innerHTML = integer;
    localStorage.setItem('number', integer)
    window.navigator.vibrate(50);
})

//audio

var click = new Audio('sound/tsclick.wav');
var reverseclick = new Audio('sound/tsreverseclick.wav');

ref.addEventListener('click',function(){
    reverseclick.pause();
    reverseclick.play();
})

add.addEventListener('click',function(){
    click.pause();
    click.play();
})

remove.addEventListener('click',function(){
    click.pause();
    click.play();
})







var successBool = window.navigator.vibrate(pattern);
