let hole = [];
let victoryVisualisation = document.getElementById("dead");
let loseVisualisation = document.getElementById("lost");
let victory = 0;
let lose = 0;

let count = (event) => {
    if (event.target.className === "hole hole_has-mole") {
        victory++;
        victoryVisualisation.innerHTML = victory;
        if (victory === 10) {
            alert("Winner! Winner! Chicken-Dinner!");
            setTimeout(location.reload() ,3000);
        }
    } else if (event.target.className === "hole") {
        lose++;
        loseVisualisation.innerHTML = lose;
        if (lose === 5) {
            alert("You lost");
            setTimeout(location.reload() ,3000);
        }
    }
}

for (let i = 1; i < 10; i++) {
    hole[i] = document.getElementById("hole" + i);
    hole[i].onclick = count;
}

