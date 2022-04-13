//1
let result = "";
for (let i = 1; i <= 7; i++){
    for (let j = 0; j < i; j++){
        result += "*"
    }
    result += '\n';
}
console.log(result)
//2
for (let i = 1; i <= 100; i++){
    let by3 = i % 3 == 0;
    let by5 = i % 5 == 0;
    let result = "";
    if (by3){
        result += i + "fizz"
    }
    else if (by5){
        result += i + "buzz"
    }
    else if (!(by3||by5)){
        result += i;
    }
    console.log(result)
}

//3
console.log("  ")
for (let j = 1; j <= 100; j++){
    let by3 = j % 3 == 0;
    let by5 = j % 5 == 0;
    let result = "";
    if (by3){
        if (by5){
            result += j + "fizz buzz"
        }
        else {
            result += j + "fizz"
        }
    }
    else if (by5){
        if (by3){
            result += j + "fizz buzz"
        }
        else {
            result += j + "buzz"
        }
    }
    else if (!(by3||by5)){
        result += j;
    }
    console.log(result)
}