console.log(localStorage)

let add = document.getElementById('Plus');
let remove = document.getElementById('Minus');

let val = document.getElementById('number');
let integer = 0 ;

var audioElement = new Audio('tsclick.wav');

add.addEventListener('click',function(){
    integer += 1;
    val.innerHTML = integer;
    audioElement.play();
    localStorage.setItem('number', integer)
    window.navigator.vibrate(200);
})

remove.addEventListener('click',function(){
    integer -= 1;
    val.innerHTML = integer;
    audioElement.play();
    localStorage.setItem('number', integer)
    window.navigator.vibrate(200);
})

add.addEventListener('click',function(){
    audioElement.play();
})

remove.addEventListener('click',function(){
    audioElement.play();
})

console.localStorage(number)
