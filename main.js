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
})

remove.addEventListener('click',function(){
    integer -= 1;
    val.innerHTML = integer;
    audioElement.play();
    localStorage.setItem('number', integer)
})

console.localStorage(number)