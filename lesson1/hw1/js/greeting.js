//дз 1
let username = prompt('Введите ваше имя');
alert('Привет, ' + username + '!')

//дз 2
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
if (arr1.length == arr2.length) {
    console.log(`первый массив - ${arr1} равен второму массиву - ${arr2}`);
} else if (arr1.length > arr2.length){
    console.log(`первый массив - ${arr1} длиннее чем второй массив - ${arr2}`);
} else if (arr2.length > arr1.length){
    console.log(`второй массив - ${arr2} длинее чем первый массив -${arr1}`);
}

//дз 3
let colorTrafficLights = 'red';
switch (colorTrafficLights){
    case 'green':
        console.log('Зеленый свет');
        break;
    case 'yellow':
        console.log('Желтый свет');
        break;
    case 'red':
        console.log('Красный свет');
        break;
}