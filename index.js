function bat() {
    let randomNum = Math.random() * 3;
    let comupterChoice;
    let result;

    if (randomNum > 0 && randomNum <= 1) {
        comupterChoice = 'Bat';
    }
    else if (randomNum > 1 && randomNum <= 2) {
        comupterChoice = 'Ball';
    }
    else {
        comupterChoice = 'Stump';
    }


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
    let randomNum = Math.random() * 3;
    let comupterChoice;
    let result;

    if (randomNum > 0 && randomNum <= 1) {
        comupterChoice = 'Bat';
    }
    else if (randomNum > 1 && randomNum <= 2) {
        comupterChoice = 'Ball';
    }
    else {
        comupterChoice = 'Stump';
    }


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
    let randomNum = Math.random() * 3;
    let comupterChoice;
    let result;

    if (randomNum > 0 && randomNum <= 1) {
        comupterChoice = 'Bat';
    }
    else if (randomNum > 1 && randomNum <= 2) {
        comupterChoice = 'Ball';
    }
    else {
        comupterChoice = 'Stump';
    }


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