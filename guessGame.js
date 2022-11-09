console.log("input a number between 2 and 9");
function guess_game(myMax,myMin){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var luckyNum=prompt("input your lucky number: ");
var myMax=9;
var myMin=2;
if(luckyNum==guess_game(myMax,myMin)){
    console.log("congratulations you won");
}
else{
    console.log("sorry you failed");
}