// // class dog{
// //     constructor(weight, height, color) {
// //         this.weight = weight;
// //         this.height = height;
// //         this.color = color
// //     }
// // }
// // const rex = new dog(
// //     20,
// //     40,
// //     "grey"
// // )
// // console.log(rex)
// //
// // const bobik = new dog(
// //     30,
// //     10,
// //     "black"
// // )
// // console.log(bobik)
//
// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voice = voiceText;
//     }
//     voiceText(){
//         console.log(this.voiceText)
//     }
// }
// class Bear extends Animal{
//     constructor(type, gender, color, voiceText, height, weight) {
//         super(type, gender, color, voiceText);
//         this.height = height
//         this.weight = weight;
//     }
//     purpose(){
//         console.log(`Bear height: ${this.height}\nBear weight: ${this.weight}`)
//     }
// }
// const misha = new Bear(
//     "pet",
//     "male",
//     "grey",
//     "hz",
//     150,
//
// )
// misha.purpose()
//
// class rabbit extends Animal{
//     constructor(type, gender, color, voice, height, weight, earLength, speed) {
//         super(type, gender, color, voice,);
//         this.height = height;
//         this.weight = weight;
//         this.earLength = earLength;
//         this.speed = speed;
//     }
// }
// const Billy = new rabbit(
//     "herbivore",
//     "male",
//     "white",
//     "ыцк ыцу",
//     35,
//     4,
//     15,
//     40
// )
// Billy.voiceText();
// console.log(Billy)
//
// class human{
//     constructor() {
//     }
// }
class Build{
    constructor(floor, corridor, meters, type, number, street) {
        this.floor = floor;
        this.corridor = corridor;
        this.meters = meters;
        this.type = type;
        this.number = number;
        this.street = street;
    }
    inBuild(){
        console.log(`вы в ${this.type}`)
    }
    outBuild(){
        console.log(`вы вышли из ${this.type}`)
    }
}
class Home extends Build{
    constructor(floor, corridor, meters, type, number, street, rooms, numberOfBathrooms, yards, ) {
        super(floor, corridor, meters, type, number, street);
        this.rooms = rooms;
        this.numberOfBathrooms = numberOfBathrooms;
        this.yards = yards;
    }
}
class School extends Build{
    constructor(floor, corridor, meters, type, number, street, numberOfStudents, numberOfTeachers, startTime, finishTime, numberOfCleaner, numberOfDesks, teacherSalary, numberOfClasses, windows) {
        super(floor, corridor, meters, type, number, street);
        this.numberOfStudents = numberOfStudents;
        this.numberOfTeachers = numberOfTeachers;
        this.startTime = startTime;
        this.finishTime = finishTime;
        this.finishTime = finishTime;
        this.numberOfCleaner = numberOfCleaner;
        this.numberOfDesks = numberOfDesks;
        this.teacherSalary = teacherSalary;
        this.numberOfClasses = numberOfClasses;
        this.windows = windows

    }
}
const school = new School(
    6,
    5,
    600,
    "school",
    "дом пушкина",
    "улица колотушкина",
    2500,
    50,
    "8:00",
    "18:20",
    5,
    1700,
    35000,
    7,
    50
)
const house = new Home(
    3,
    5,
    600,
    "house",
    "дом пушкина",
    "улица колотушкина",
    3,
    1,
    true
)
console.log(school, house)
school.inBuild()
house.inBuild()
school.outBuild()
house.outBuild()