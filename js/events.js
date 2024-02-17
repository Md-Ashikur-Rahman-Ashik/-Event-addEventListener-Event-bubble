console.log("This is from separate JS file");

function makeRed() {
  document.body.style.backgroundColor = "red";
}

const makeBlueButton = document.getElementById("makeBlue");
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const purpleButton = document.getElementById("makePurple");
// console.log(purpleButton);
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

const pinkButton = document.getElementById("makePink");
// console.log(pinkButton);
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

const greenButton = document.getElementById("makeGreen");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

document.getElementById("makeGoldenRod").addEventListener("click", function(){
    document.body.style.backgroundColor = "goldenrod";
})