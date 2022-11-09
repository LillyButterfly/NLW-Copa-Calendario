
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

createCard("20/11", "domingo", createGame("qatar", "catar","13:00", "ecuador", "equador")) 

+createCard("21/11", "segunda", createGame("england", "inglaterra", "10:00", "iran", "irã") + createGame("senegal", "senegal", "13:00", "netherlands", "Holanda") + createGame("usa", "eua", "16:00", "wales", "Gales")) 

+createCard("22/11", "terça", createGame("argentina", "argentina", "07:00", "saudi arabia", "Arábia Saudita",) +createGame("denmark", "Dinamarca", "10:00", "tunisia", "tunísia") +createGame("mexico", "México", "13:00", "poland", "polônia") +createGame("france", "frança", "16:00", "australia", "austrália"))

+createCard("23/11", "quarta", createGame("morocco", "Marrocos", "07:00", "croatia", "croácia") +createGame("germany", "alemanha", "10:00", "japan", "japão") +createGame("spain", "Espanha", "13:00", "costa rica", "costa rica") +createGame("belgium", "Bélgica", "16:00", "canada", "canadá"))

+createCard("24/11", "quinta", createGame("switzerland", "Suíça", "07:00", "cameroon", "Camarões") +createGame("uruguay", "Uruguai", "10:00", "south korea", "Coreia do sul") +createGame("portugal", "portugal", "13:00", "ghana", "gana") +createGame("brazil", "brasil", "16:00", "serbia", "sérvia"))

+createCard("25/11", "sexta", createGame("wales", "Gales", "07:00", "iran", "irã") +createGame("qatar", "catar","10:00", "senegal", "senegal") +createGame( "netherlands", "Holanda", "13:00", "ecuador", "equador") +createGame("england", "inglaterra", "13:00", "usa", "eua")) 

+createCard("26/11", "sábado", createGame("tunisia", "tunísia", "07:00", "australia", "austrália") +createGame("poland", "polônia", "10:00", "saudi arabia", "Arábia Saudita") +createGame("france", "frança", "13:00", "denmark", "Dinamarca") +createGame("argentina", "argentina", "16:00", "mexico", "México")) 

+createCard("27/11", "domingo", createGame("japan", "japão", "07:00", "costa rica", "costa rica") +createGame("belgium", "Bélgica", "10:00", "morocco", "Marrocos") +createGame("croatia", "croácia", "13:00", "canada", "canadá") +createGame("spain", "Espanha", "16:00", "germany", "alemanha"))

+createCard("28/11", "segunda", createGame("cameroon", "Camarões", "07:00", "serbia", "sérvia") +createGame("south korea", "Coreia do sul", "10:00", "ghana", "gana") +createGame("brazil", "brasil", "13:00", "netherlands", "Holanda") +createGame("portugal", "portugal", "16:00", "uruguay", "Uruguai"))

+createCard("29/11", "terça", createGame("ecuador", "equador","12:00", "senegal", "senegal") +createGame("netherlands", "Holanda", "12:00", "qatar", "catar") +createGame("iran", "irã", "16:00", "usa", "eua") +createGame("wales", "Gales", "16:00", "england", "inglaterra"))

+createCard("30/11", "quarta", createGame("tunisia", "tunísia", "12:00", "france", "frança") +createGame("australia", "austrália", "12:00", "denmark", "Dinamarca") +createGame("poland", "polônia", "16:00", "argentina", "argentina") +createGame("saudi arabia", "Arábia Saudita", "16:00", "mexico", "México"))

+createCard("01/12", "quinta", createGame("croatia", "croácia", "12:00", "belgium", "Bélgica") +createGame("canada", "canadá", "12:00", "morocco", "Marrocos") +createGame("japan", "japão", "16:00", "spain", "Espanha") +createGame("costa rica", "costa rica", "16:00", "germany", "alemanha"))

+createCard("02/12", "sexta", createGame("south korea", "Coreia do sul", "12:00", "portugal", "portugal") +createGame("ghana", "gana", "12:00", "uruguay", "Uruguai") +createGame("serbia", "sérvia", "16:00", "switzerland", "Suíça") +createGame("cameroon", "Camarões", "16:00", "brazil", "brasil"));


