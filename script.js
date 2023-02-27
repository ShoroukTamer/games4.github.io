let turn='x';
let square =[]
var gameover = false;
let mycontainer=document.getElementsByClassName("container")[0]
let myelement=document.querySelectorAll(".box")

document.getElementById("player1").style.background="green";
 function game(id)
 {
    let mycell = document.getElementById(id);
    if (turn ==='x'&& mycell.innerHTML=='')
    {
        mycell.innerHTML='x';
        turn ='o'
        document.getElementById("player1").style.background="aliceblue";
        document.getElementById("player2").style.background="green";
    }
    else if  (turn ==='o'&& mycell.innerHTML=='')
    {
        mycell.innerHTML='o';
        turn ='x'
        document.getElementById("player1").style.background="green";
        document.getElementById("player2").style.background="aliceblue";
    }
    winner()
    return false;
 }
 
 

 function end(num1,num2,num3){
    document.getElementById('cell'+num1).style.background='red';
    document.getElementById('cell'+num2).style.background='red';
    document.getElementById('cell'+num3).style.background='red';
    document.getElementById("player1").style.background='aliceblue'
    document.getElementById("player2").style.background='aliceblue'
    turn='';
    
 }
 function winner(){
    for(i=0;i<9;i++){
       square[i]= document.getElementsByClassName('box')[i].innerHTML;
    }
    if(gameover===true)
    {
       return;
    }
else if(square[0]==square[1]&&square[1]==square[2]&&square[0]==='x')
{
end(0,1,2)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player One is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return;
}
else if(square[3]==square[4]&&square[4]==square[5]&&square[3]==='x')
{
end(3,4,5)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player One is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false;
}
else if(square[6]==square[7]&&square[7]==square[8]&&square[6]==='x')
{
end(6,7,8)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player One is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false;
}
else if(square[0]==square[4]&&square[4]==square[8]&&square[0]==='x')
{
end(0,4,8)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player One is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false
}
else if(square[2]==square[4]&&square[4]==square[6]&&square[2]==='x')
{
end(2,4,6)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player One is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false;
}
else if(square[0]==square[3]&&square[3]==square[6]&&square[0]==='x')
{
end(0,3,6)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player One is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false;
}
else if(square[1]==square[4]&&square[4]==square[7]&&square[1]==='x')
{
end(1,4,7)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player One is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false;
}
else if(square[2]==square[5]&&square[5]==square[8]&&square[2]==='x')
{
end(2,5,8)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player One is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false;
}
else if(square[0]==square[1]&&square[1]==square[2]&&square[0]==='o')
{
    end(0,1,2)
    let thewinner=document.createElement("p")
thewinner.innerHTML="Player Two is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false;
}
else if(square[3]==square[4]&&square[4]==square[5]&&square[3]==='o')
{
    end(3,4,5)
    let thewinner=document.createElement("p")
    thewinner.innerHTML="Player Two is the winner!!"
    thewinner.setAttribute("id","winner")
    mycontainer.appendChild(thewinner)
    gameover=true;
    return false;
}
else if(square[6]==square[7]&&square[7]==square[8]&&square[6]==='o')
{
    end(6,7,8)
    let thewinner=document.createElement("p")
    thewinner.innerHTML="Player Two is the winner!!"
    thewinner.setAttribute("id","winner")
    mycontainer.appendChild(thewinner)
    gameover=true;
    return false;
}
else if(square[0]==square[4]&&square[4]==square[8]&&square[0]==='o')
{
    end(0,4,8)
    let thewinner=document.createElement("p")
    thewinner.innerHTML="Player Two is the winner!!"
    thewinner.setAttribute("id","winner")
    mycontainer.appendChild(thewinner)
    gameover=true;
    return false;
}
else if(square[2]==square[4]&&square[4]==square[6]&&square[2]==='o')
{
    end(2,4,6)
    let thewinner=document.createElement("p")
    thewinner.innerHTML="Player Two is the winner!!"
    thewinner.setAttribute("id","winner")
    mycontainer.appendChild(thewinner)
    gameover=true;
    return false;
}
else if(square[0]==square[3]&&square[3]==square[6]&&square[0]==='o')
{
    end(0,3,6)
    let thewinner=document.createElement("p")
    thewinner.innerHTML="Player Two is the winner!!"
    thewinner.setAttribute("id","winner")
    mycontainer.appendChild(thewinner)
    gameover=true;
    return false;
}
else if(square[1]==square[4]&&square[4]==square[7]&&square[1]==='o')
{
    end(1,4,7)
    let thewinner=document.createElement("p")
    thewinner.innerHTML="Player Two is the winner!!"
    thewinner.setAttribute("id","winner")
    mycontainer.appendChild(thewinner)
    gameover=true;
    return false;
}
else if(square[2]==square[5]&&square[5]==square[8]&&square[2]==='o')
{
end(2,5,8)
let thewinner=document.createElement("p")
thewinner.innerHTML="Player Two is the winner!!"
thewinner.setAttribute("id","winner")
mycontainer.appendChild(thewinner)
gameover=true;
return false;
}
else if(square[0]!=''&&square[1]!=''&&square[2]!=''&&square[3]!=''&&square[4]!=''&&square[5]!=''&&square[6]!=''&&square[7]!=''&&square[8]!=='')
{
    let thewinner=document.createElement("p")
    thewinner.innerHTML="Draw Game!!"
    thewinner.setAttribute("id","winner")
    mycontainer.appendChild(thewinner)
    document.getElementById("player1").style.background='aliceblue'
    document.getElementById("player2").style.background='aliceblue'
    gameover=true;
    return false;
}
return false
}
function reset(){
  for(i=0;i<9;i++){
    document.getElementsByClassName('box')[i].innerHTML='';
    document.getElementById("cell"+i).style.background= "#bbbcbf"
  }
  document.getElementById("winner").remove();
    gameover=false;
    turn='x';
}