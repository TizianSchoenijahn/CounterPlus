console.log(localStorage)

let add = document.getElementById('Plus');
let remove = document.getElementById('Minus');

let val = document.getElementById('number');
let ref = document.getElementById('RefreshButton');
let integer = 0 ;

var audioElement = new Audio('tsclick.wav');

ref.addEventListener('click',function(){
    integer = 0;
    val.innerHTML = integer;
    localStorage.setItem('number', 0)
    audioElement.play();
})

add.addEventListener('click',function(){
    integer += 1;
    val.innerHTML = integer;
    audioElement.play();
    localStorage.setItem('number', integer)
    window.navigator.vibrate(80);
})

remove.addEventListener('click',function(){
    integer -= 1;
    val.innerHTML = integer;
    audioElement.play();
    localStorage.setItem('number', integer)
    window.navigator.vibrate(80);
})

add.addEventListener('click',function(){
    audioElement.play();
})

remove.addEventListener('click',function(){
    audioElement.play();
})

console.localStorage(number)

var successBool = window.navigator.vibrate(pattern);
