let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁","🦅", "🐱", "🐶", "🦊", "🐯"]
let score = [1,2,3,3,4,5,6,7,8,9,2,3,4,5,3,4,6,7,8,9,0]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")




fightButton.addEventListener("click", pick);

 function pick(){
let number = Math.floor(Math.random()*fighters.length)
let numberO = Math.floor(Math.random()*fighters.length)
  stageEl.textContent=fighters[number] + "vs"+ fighters[numberO]
    play(number, numberO);
 

  let o = document.getElementById("score");
  o.textContent = "Combat en cours... 🥊";

  
  setTimeout(() => {
    play(number, numberO);
  }, 1000);
}

function play(n1,n2){
    let o =document.getElementById("score")
    o.textContent = score[n1] + " vs " + score[n2]

    if (score[n1] > score[n2]) {
    o.textContent += " → " + fighters[n1] + " wins!";
  } else if (score[n1] < score[n2]) {
    o.textContent += " → " + fighters[n2] + " wins!";
  } else {
    o.textContent += " → Draw!";
  }

}