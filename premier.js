const player1 = 'Bobby';
const player2 = 'Bybbo';
let player1Life = 100;
let player2Life = 100;

console.clear();
console.log('/////////////////////////////////////');
console.log('  C\'est l\'heure du dueeeeeeeeel !');
console.log(`/////////////////////////////////////`);
console.log('');

while (player1Life > 0 && player2Life > 0) {
    const puissanceAttaque1 = Math.floor(Math.random() * 50);
    const puissanceAttaque2 = Math.floor(Math.random() * 50);

    console.log('');
    console.log(`${player1} (${player1Life})  -  ${player2} (${player2Life})`);

    const reussiteAttaque1 = Math.floor(Math.random() * 100);
    const reussiteAttaque2 = Math.floor(Math.random() * 100);

    if (reussiteAttaque1 > 10) {
        if (player1Life < 20) {
            let potion = 30;
            potion += Math.floor(Math.random() * 60);
            console.log(`${player1} se soigne de ${potion} pdv`);
            player1Life += potion;
        } else {
            console.log(`${player1} attaque et enlève ${puissanceAttaque1} points de vie`);
            player2Life = player2Life - puissanceAttaque1;
        }
    } else {
        console.log(`${player1} a raté son attaque`);
    }
    if (player2Life > 0) {
        if (reussiteAttaque1 > 10) {
            if (player2Life < 20) {
                let potion = 30;
                potion += Math.floor(Math.random() * 60);
                console.log(`${player2} se soigne de ${potion} pdv`);
                player2Life += potion;
            } else {
                console.log(`${player2} attaque et enlève ${puissanceAttaque2} points de vie`);
                player1Life = player1Life - puissanceAttaque2;
            }
        } else {
            console.log(`${player2} a raté son attaque`);
        }
    }
}

console.log("/////////////////////////////////////");
console.log(player1Life > 0 ? `${player1} est vainqueur` : `${player2} est vainqueur`);

if (player1Life > 0) {
    console.log("C'est un peu comme si c'est toi le joueur 1, alors bravo (même si tu n'as rien fait...).")
}
