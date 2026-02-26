let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    // Choisir deux indices différents
    let randomIndexOne = Math.floor(Math.random() * fighters.length);
    let randomIndexTwo;
    do {
        randomIndexTwo = Math.floor(Math.random() * fighters.length);
    } while(randomIndexTwo === randomIndexOne);

    // Afficher le combat
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];

    // Ajouter animation
    stageEl.classList.add("fight");
    setTimeout(() => {
        stageEl.classList.remove("fight");
    }, 300);
});