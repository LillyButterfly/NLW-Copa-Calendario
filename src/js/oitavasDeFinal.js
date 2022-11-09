function toggle(aryFunctions,idx){
    document.getElementsByTagName("body")[0].onclick = aryFunctions[idx];
}

function blue(){
    document.body.classList.add('blue');
    document.body.classList.remove('red');
    toggle(aryFunctions,1);
  }
  function green(){
    document.body.classList.add('green');
    document.body.classList.remove('blue');
    toggle(aryFunctions,2);
  }
  function yellow(){
    document.body.classList.add('yellow');
    document.body.classList.remove('green');
    toggle(aryFunctions,3);
  }
  function red(){
    document.body.classList.add('red');
    document.body.classList.remove('yellow');
    toggle(aryFunctions,0);
  }
  let aryFunctions = [blue,green,yellow,red];
  
  document.body.setAttribute("onclick","toggle(aryFunctions,1)");

//let delay = -0.4;
function createCard(date, day, games, teams) {
//delay = delay + 0.4;
//Dentro da <div style="animation-delay: ${delay}s">
return `
<div class="card">
    <h2>${date} <spam>${day}</spam></h2>
        <ul>
        ${games}
        </ul>
</div>`
}

function createGame(player1, team1, hour, player2, team2) {
return `
<li>
<figure>
    <img src="./src/images/icon=${player1}.svg" alt="Bandeira ${player1}" />
    <figcaption>${team1}</figcaption>
</figure>
    <strong>${hour}</strong>
   <figure>
   <img src="./src/images/icon=${player2}.svg" alt="Bandeira ${player2}">
   <figcaption>${team2}</figcaption>
</figure>
</li>`
}


document.querySelector("#cards").innerHTML =

createCard("04/12", "domingo", createGame("unknown", "unknown","12:00", "unknown", "unknown") + createGame("unknown", "unknown","16:00", "unknown", "unknown"))

+createCard("05/12", "segunda", createGame("unknown", "unknown","12:00", "unknown", "unknown") + createGame("unknown", "unknown","16:00", "unknown", "unknown"))

+createCard("06/12", "terça",createGame("unknown", "unknown","12:00", "unknown", "unknown") + createGame("unknown", "unknown","16:00", "unknown", "unknown"))
