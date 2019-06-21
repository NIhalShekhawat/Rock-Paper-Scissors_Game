const choices = document.querySelectorAll('.choice');
const score= document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scorebord = {
    player: 0,
    computer: 0
}

// play game
function play (e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computeChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computeChoice);
    showWinner(winner, computeChoice);
}

//get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock'
    } else if (rand <= 0.67){
        return 'paper'
    }else{
        return 'scissors'
    }
}

//get game winner
function getWinner(p, c){
    if(p === c){
        return 'draw'
    }else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer'
        }else{
            return 'player'
        }
    }else if (p === 'paper'){
        if(c === 'scissors'){
            return 'computer'
        }else{
            return 'player'
        }
    }else if (p === 'scissors'){
        if(c === 'rock'){
            return 'computer'
        }else{
            return 'player'
        }
    }
}

//show winners

function showWinner(winner, computeChoice) {
    if(winner === 'player'){
        //inc player score
        scorebord.player++;
        //show result
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computeChoice} fa-10x"></i>
        <p>Comuter chose <strong>${computeChoice}.</strong>`
    }else if(winner === 'computer'){
        scorebord.computer++
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computeChoice} fa-10x"></i>
        <p>Comuter chose <strong>${computeChoice}</strong>
        `
    }else{
        result.innerHTML = `
        <h1 class="text-win">It's a draw</h1>
        <i class="fas fa-hand-${computeChoice} fa-10x"></i>
        <p>Comuter chose <strong>${computeChoice}</strong>
        `
    }
    score.innerHTML = `
    <p>Playes: ${scorebord.player}</p>
    <p>Computer: ${scorebord.computer}</p>
    `;
    modal.style.display = 'block';
}

function restartgame(){
    scorebord.player = 0;
    scorebord.computer = 0;
    score.innerHTML = `
    <p>Playes: 0</p>
    <p>Computer: 0</p>
    `;
}

//clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}


//event listeners

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener("click", clearModal);
restart.addEventListener('click', restartgame)

