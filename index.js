var randomnum = Math.floor(Math.random()*6)+1;
var dice = "images/dice" + randomnum + ".png";

var randomnum1 = Math.floor(Math.random()*6)+1;
var dice1 = "images/dice" + randomnum1 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", dice);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", dice1);

if (randomnum > randomnum1){
    document.querySelector("h1").innerHTML = "Player 1 Won!";
}
else if (randomnum1 > randomnum) {
    document.querySelector("h1").innerHTML = "Player 2 Won!";
}
else {
    document.querySelector("h1").innerHTML = "It's Draw!";
}
