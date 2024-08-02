console.log("Hello World")

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {

const div = document.createElement("div");
div.classList.add("grid");
container.appendChild(div);

}

const grid = document.querySelector(".grid");
grid.addEventListener("mousemove", hover);
grid.addEventListener("mouseleave", leave);

function hover(e) {
    grid.style.backgroundColor = "grey";
}

function leave(e) {
    grid.style.backgroundColor = "aqua";
    console.log(e.type)
}