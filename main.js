console.log("Hello World")

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {

const div = document.createElement("div");
div.classList.add("grid");
container.appendChild(div);

}

const grid = document.querySelectorAll(".grid");

grid.forEach(box => {
        box.addEventListener("mouseenter", hover => box.style.backgroundColor = "grey");
        //box.addEventListener("mouseleave", leave => box.style.backgroundColor = "aqua");
    });