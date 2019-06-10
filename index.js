var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSrc = "img/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);


var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomImageSource2 = "img/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
 document.querySelector("h1").innerHTML ="🚩 Play 1 Wins!";
}
else if(randomNumber1<randomNumber2) {
 document.querySelector("h1").innerHTML ="🚩 Play 2 Wins!";
}
else{
 document.querySelector("h1").innerHTML = "Draw";
}
