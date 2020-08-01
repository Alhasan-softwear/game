for ( var m = 0; m<= 10; m++){
var number = Math.round(Math.random() * 100 + 1);
var guess = prompt("guess a number between 1 and 100: ");
if (guess > number) {
  alert("To high");
}else if (guess < number) {
  alert("To low");
}else {
  alert("You are right");
}
}
