const buttons = Array.from(document.querySelectorAll("button"));
const speedrun = Array.from(document.querySelectorAll(".speedrun"));

const blali1 = ["Moon_Shinex3", "Smudey", "-"];
const blali2 = ["Moon_Shinex3", "SCOOVY", "Ninge3007"];
const blaliremake = ["D-manXD", "Moon_Shinex3", "K1nGz"];

ChangeValues(blali1);

buttons[0].onclick = function() {
    ChangeValues(blali1);
}

buttons[1].onclick = function() {
    ChangeValues(blali2);
}

buttons[2].onclick = function() {
    ChangeValues(blaliremake);
}

function ChangeValues(names) {
    speedrun[0].textContent = ("Erster Platz: " + names[0]);
    speedrun[1].textContent = ("Zweiter Platz: " + names[1]);
    speedrun[2].textContent = ("Dritter Platz: " + names[2]);
}