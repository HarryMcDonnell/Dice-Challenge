let score = 0;
let diceRoll = 0;
const btn = document.getElementById('btn');
const gameInfo = document.getElementById('gameInfo');
const image = document.createElement('img');
const wrapper = document.getElementById('wrapper');
btn.onclick = () => {
    document.getElementById('score').value = score;
    diceRoll = Math.ceil(Math.random()*6);
    if (diceRoll == 1 && score <= 21) {
        // const loseScreen = document.createElement('div');
        // loseScreen.classList.add('lose');
        // wrapper.appendChild(loseScreen);
        console.log('you lose')
    }
    else if (score >= 21) {
        //victory screen
        console.log('you win'); 
    }
    else {
    image.src = (`/img/dice${diceRoll}.png`);
    score +=diceRoll;
    image.classList.add('image');
    gameInfo.appendChild(image);
    console.log(diceRoll);
    console.log(score);
    }
}

//test


// let array = ["a", "b", "c"];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
    
// }

// for (const letter of array) {
//     console.log(letter);
// }