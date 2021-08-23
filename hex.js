const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomHex = getRandomHex();
    
    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;
});

const getRandomHex = () => {
    let hexVal = "#";

    for (let i = 0; i < 6; i++) {
        const hexChar = hex[Math.floor(Math.random()*hex.length)];

        hexVal += hexChar;
    };

    return hexVal;
};

console.log(getRandomHex());