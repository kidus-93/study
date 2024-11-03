//Empty Array
/*
const myList =[];
console.log(myList);
*/

/*
const numberArr = [1,2,3,4,5];
console.log(numberArr)

for(let i =0;i<numberArr.length;i++){
    console.log(numberArr[i]);
}

const stringArr = ["eat", "code","sleep", "repeat"]
console.log(stringArr);
console.log(stringArr[0]);
console.log(stringArr[1]);
console.log(stringArr[2]);
console.log(stringArr[3]);
*/

/*
// two dimenstion Array
const nestArr = ["one",
                 [1,2,3], 
                 "two", 
                 "Three"]
console.log(nestArr);
console.log(nestArr[1][1]);
*/


/*
const favSingers = ["Eyob Mekonnen","Dawit tsige","Teddy Afro"]
console.log(favSingers[1]);
console.log(favSingers);

favSingers[3] = "Rophnan";
console.log(favSingers[3]);
console.log(favSingers);
*/

//Array Techniques

const fruits = [
    "apples",
    "pomegranates",
    "mangos",
    "strawberry",
    "apples",
    "grapefruit"
]
const Veg =["tomatos", "celary", "carrots"]
console.log(fruits);

// Techniques

fruits.push("banana"); // pushes a value to the "END" of the array
console.log(fruits);
fruits.pop(); // remove the "Last" element of the array"
console.log(fruits);
fruits.shift()// remove the first Element of the Array
console.log(fruits);
fruits.unshift("oranges"); //Inserts new elements at the start of an arra
console.log(fruits);
const totalFruits = fruits.concat(Veg); //Combines two or more arrays
console.log(totalFruits);





