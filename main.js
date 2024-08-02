console.log("Hello World")

const container = document.querySelector(".container");
const grid = document.querySelector(".grid");


for (let i = 0; i < 16; i++) {

const div = document.createElement("div");
div.classList.add("grid");
container.appendChild(div);

}