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

let scoreDetails = localStorage.getItem('Product');
let score;
resetScore(scoreDetails);

function resetScore(scoreDetails){
    // if scoreDetails is falsy than assign the 0,0,0 values otherwise assign scoreDetails.
    score = scoreDetails ? JSON.parse(scoreDetails) : {
        win:0,
        lost:0,
        tie:0,
    };

    score.displayScore = function(){
        return `Won: ${this.win}, Lost: ${this.lost}, Tie: ${this.tie}`;
    }
    
    showResult();
}

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
    localStorage.setItem('Product', JSON.stringify(score));

    document.querySelector('#user-move').innerHTML = userMove ? `User Move: ${userMove}` : ``;
    document.querySelector('#computer-move').innerHTML = computerMove ? `Computer Move: ${computerMove}` : ``;
    document.querySelector('#result').innerHTML = outcome || ``;
    document.querySelector('#score').innerHTML = score.displayScore();
}

