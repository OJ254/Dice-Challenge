var randomNumber1  = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2  = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelectorAll("img")[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelectorAll("img")[1].setAttribute("src", `./images/dice${randomNumber2}.png`);


function dicee() {
    if (randomNumber1 > randomNumber2) {
       return "Player 1 wins";
    } else if (randomNumber1 < randomNumber2) {
        return "Player 2 wins";}
    else {
        return "Draw";
    }
}
dicee();

document.querySelector("h1").innerHTML = dicee();