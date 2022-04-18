let num = 0;
let increment = document.querySelector('.increment');
let result = document.querySelector('.result');
let decrement = document.querySelector('.decrement');
let clear = document.querySelector('.clear')

increment.onclick = () => {
    num--;
    result.innerText = num;
}
decrement.onclick = () => {
    num++;
    result.innerText = num;
}
clear.onclick = () => {
    num = 0;
    result.innerText = num;
}
