const choiceBtns = document.querySelectorAll("button");
let myscore = document.getElementById("score");
var computer=''
let playervalue=''
let container = document.getElementById("container")
let randNum='';
let computervalue
let myresult = document.createElement("div")
  myresult.setAttribute("id","result")

choiceBtns.forEach(button => button.addEventListener("click", () => {

  let player = button.textContent
  playervalue=button.value;
  computerTurn();
  document.getElementById("player").textContent = `Player: `+player;
  document.getElementById("computer").textContent = `Computer: `+computer;
  myresult.innerHTML=checkWinner();
  container.appendChild(myresult)
  return false
})); 
function computerTurn(){
  randNum = Math.floor(Math.random() * 3) 

  if(randNum=='0'){
      computer = "ROCK";
      computervalue="0"
  }
    else if(randNum=='1'){
      computer = "PAPER";
      computervalue="1"
    }
    else{
      computer = "SCISSORS";
      computervalue="2"
    }
  }
function checkWinner(){
  if(playervalue == computervalue){
    return "Draw!";
  }
  else if(computervalue == "0"){
    return (playervalue == "1") ? "You Win!" : "You Lose!"
  }
  else if(computervalue == "2"){
    return (playervalue == "0") ? "You Win!" : "You Lose!"
  }
  else if(computervalue == "1"){
    return (playervalue == "2") ? "You Win!" : "You Lose!"
  }
}