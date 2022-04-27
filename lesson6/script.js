// const a = 0;
// let b = 10;
// var c;
// c = "hello";
// const firstName = "kjgkldjfsd";
// const lastName = "jjgk"
// console.log(`hello ${firstName} ${lastName} `)

// const getFullName = function (user){
//     return `firstName ${user.firstName} \n lastName ${user.lastName}`
// }
// const  user = {
//     firstName: "jack",
//     lastName: "ladno"
// }
//

function parse( data ) {

    let final = [];
    let result = 0;
    for (let i = 0; i <= data.length; i++) {

        if (data[i] == "i") {
            result++
        } if (data[i] == "d") {
            result--
        } if (data[i] == "s") {
            result = result**2
        } if (data[i] == "o") {
            final.push(result)
        }
    }
    return final
}

console.log(parse("iiisdoso"))