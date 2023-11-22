var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

var winner = document.getElementById('announce');

var rand1, rand2;

function Loaded(){
    rand1 = Math.floor(Math.random()*6)+1;
    rand2 = Math.floor(Math.random()*6)+1;

    if(rand1 === rand2){
        winner.innerHTML = "Game Tie!";
    } else if(rand1>rand2){
        winner.innerHTML = "🚩Player1 Wins!";
    } else {
        winner.innerHTML = "Player2 Wins!🚩";
    }

    img1.setAttribute('src',`./images/dice${rand1}.png`);
    img2.setAttribute('src',`./images/dice${rand2}.png`);
}
