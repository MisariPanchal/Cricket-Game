function randomChoice(){
    let randomNum = Math.random() * 3;
    if (randomNum > 0 && randomNum <= 1) {
        return 'Bat';
    }
    else if (randomNum > 1 && randomNum <= 2) {
        return 'Ball';
    }
    else {
        return 'Stump';
    }
}

let score = {
    win:0,
    lost:0,
    tie:0,
    displayScore: function(){
        return `Won: ${this.win}, Lost: ${this.lost}, Tie: ${this.tie}`;
    }
};

function result(userMove){
    let computerMove = randomChoice();
    let outcome;
    if(userMove === 'Bat'){
        if (computerMove == 'Bat') {
            outcome = `It's a tie`;
            score.tie++;
        }
        else if (computerMove == 'Ball') {
            outcome = `You won !!!`;
            score.win++;
        }
        else {
            outcome = `Computer Won !!!`;
            score.lost++;
        }
    }
    else if(userMove === 'Ball'){
        if (computerMove == 'Ball') {
            outcome = `It's a tie`;
            score.tie++;
        }
        else if (computerMove == 'Stump') {
            outcome = `You won !!!`;
            score.win++;
        }
        else {
            outcome = `Computer Won !!!`;
            score.lost++;
        }
    }
    else{
        if (computerMove == 'Stump') {
            outcome = `It's a tie`;
            score.tie++;
        }
        else if (computerMove == 'Bat') {
            outcome = `You won !!!`;
            score.win++;
        }
        else {
            outcome = `Computer Won !!!`;
            score.lost++;
        }
    }
    showResult(userMove, computerMove, outcome);
}

function showResult(userMove, computerMove, outcome){
    alert(`Your choice is ${userMove} and Computer choice is ${computerMove}.\nTherefore, ${outcome}\n${score.displayScore()}`);
}