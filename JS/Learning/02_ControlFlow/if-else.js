/*
let money = true;

if(money === true){
    console.log("lets get Groceries")
}else{
    console.log("don't be broke")
}*/

/*
let time = 25;

if(time< 12 ? alert("good morning"): time<20 ?alert("good day ")  :alert("good Afternoon"));// ternay operator

*/


let password = prompt("Please enter a password")

if(password.length === 8){
    console.log("Welcome")
}
else if(password.length >= 8){
    console.log("The password is to long")
}
else if(password.length <= 8){
    console.log("the password is to short")
}
else{
    console.log("Please provide a password")
}