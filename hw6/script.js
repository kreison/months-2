let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = [9,10,11,12]
let arr4 = [13,14,15,16]
let arr5 = [17,18,19,20]

let sum = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5, 21, 22, 23];
console.log(sum);


let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
}

let sumObj = {
    ...obj,
    key6: "value6",
    key7: "value7",
    key8: "value8"
}

console.log(sumObj)

let name = document.getElementById('name');
let submit = document.getElementById('submit');
submit.onclick = () => {
    let text = document.createElement('div');
    text.innerText = `hello ${name.value}`;
    document.body.append(text)
}
