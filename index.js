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

function bat() {

    let comupterChoice = randomChoice();
    let result;

    if (comupterChoice == 'Bat') {
        result = `It's a tie`;
    }
    else if (comupterChoice == 'Ball') {
        result = `You won !!!`;
    }
    else {
        result = `Computer Won !!!`;
    }

    alert(`Your Choice is Bat and Computer Choice is ${comupterChoice}, Therefore ${result}`);
}


function ball() {
    
    let comupterChoice = randomChoice();
    let result;

    if (comupterChoice == 'Ball') {
        result = `It's a tie`;
    }
    else if (comupterChoice == 'Stump') {
        result = `You won !!!`;
    }
    else {
        result = `Computer Won !!!`;
    }

    alert(`Your Choice is Ball and Computer Choice is ${comupterChoice}, Therefore ${result}`);

}


function stump() {

    let comupterChoice = randomChoice();
    let result;

    if (comupterChoice == 'Stump') {
        result = `It's a tie`;
    }
    else if (comupterChoice == 'Bat') {
        result = `You won !!!`;
    }
    else {
        result = `Computer Won !!!`;
    }

    alert(`Your Choice is Stump and Computer Choice is ${comupterChoice}, Therefore ${result}`);

}