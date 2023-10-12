var randomNumber1 = Math.floor(Math.random()* 6 ) + 1 ;

var diceImage = "dice"+randomNumber1+".png" ;//dice1.png - dice6.png

var randomImage = "Images/"+diceImage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);



var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;

var diceImage1 = "dice"+randomNumber2+".png";

var randomImage1 = "Images/"+diceImage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage1);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!" ;
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw! 🥺";
}