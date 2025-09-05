



// Generate the brand name....
let rand = Math.random()
let first , second, third;
// 0.33, 0.66, 1
if(rand< 0.33) {
    first = "Crazy"
}
else if(rand <0.66 && rand>= 0.33) {
    first ="Amazing"
}
else {
    first = "Fire"
}

rand = Math.random()
if (rand< 0.33) {
    second ="Engine"
}
else if (rand<0.66 && rand>= 0.33){
    second = "Foods"
}
else {
    second =" Garments"
}

rand = Math.random()
if (rand <0.33) {
    third = "Bross"
}
else if (rand <0.66 && rand>= 0.33) {
    third ="limited"
}
else {
    third = "Hub"
}
console.log(`${first} ${second} ${third}`) 