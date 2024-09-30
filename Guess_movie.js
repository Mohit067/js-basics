const movie = "tumbbad";
const guess = prompt("Enter my movie name ");

while((guess != movie) && (guess != "quite")){
    guess = prompt("Wrong movie , please try again");
}

if(guess == movie) {
    console.log("congratulation !!!");
} else {
    console.log("you are quite");
}