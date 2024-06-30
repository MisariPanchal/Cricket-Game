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
    tie:0
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
    alert(`Your choice is ${userMove} and Computer choice is ${computerMove}.
Therefore, ${outcome}
Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`);
}