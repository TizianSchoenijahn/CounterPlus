console.log(localStorage)

let add = document.getElementById('Plus');
let remove = document.getElementById('Minus');

let val = document.getElementById('number');
let ref = document.getElementById('RefreshButton');
let integer = 0 ;

var click = new Audio('sound/tsclick.wav');
var reverseclick = new Audio('sound/tsreverseclick.wav');

ref.addEventListener('click',function(){
    integer = 0;
    val.innerHTML = integer;
    localStorage.setItem('number', 0)
    reverseclick.play();
})

add.addEventListener('click',function(){
    integer += 1;
    val.innerHTML = integer;
    click.play();
    localStorage.setItem('number', integer)
    window.navigator.vibrate(80);
})

remove.addEventListener('click',function(){
    integer -= 1;
    val.innerHTML = integer;
    click.play();
    localStorage.setItem('number', integer)
    window.navigator.vibrate(80);
})

console.localStorage(number)

var successBool = window.navigator.vibrate(pattern);
