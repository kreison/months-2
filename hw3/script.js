function max(n1, n2) {
    let maxNumber = 0;
    if (n1 > n2){
        maxNumber = "число один больше - " + n1;
    }
    else if (n1 === n2){
        maxNumber = "одинаково"
    }
    else {
        maxNumber = "число два больше - " + n2;
    }
    return maxNumber
}

console.log(max(2,1))

function twoMass(arr1, arr2) {
    maxArr = []
    let maxArrLength = 0;
    if (arr1.length > arr2.length){
        maxArr = arr1
        maxArrLength = arr1.length
    }
    else if (arr1.length === arr2.length){
        maxArrLength = 0
    }
    else {
        maxArrLength = arr2.length
    }
    return [maxArr, maxArrLength];
}

console.log(twoMass([1,2,3,4,5,], [1,2,3,4]))