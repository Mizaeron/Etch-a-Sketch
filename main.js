let container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {

const div = document.createElement("div");
div.classList.add("grid");
container.appendChild(div);
}

let grid = document.querySelectorAll(".grid");

grid.forEach(box => {
        box.addEventListener("mouseenter", hover => box.style.backgroundColor = "grey");
    });

let reButton = document.querySelector("#reset").addEventListener("click", buttonClick);

function buttonClick(e) {
    let entry = prompt("Enter grid number");
    let number = +entry;
    container.remove();

    const newContainer = document.createElement("div");
    newContainer.classList.add("new-container");
    const main = document.querySelector("#main");
    main.insertBefore(newContainer, main.children[1]);
    
    for (let i = 0; i < number * number; i++) {
        const div = document.createElement("div");
        div.classList.add("newGrid");
        div.setAttribute("style",`width: calc(100% / ${number}); height: calc(100% / ${number}); border: solid 1px;`);
        newContainer.appendChild(div);
    }

let newGrid = document.querySelectorAll(".newGrid");

newGrid.forEach(box => {
    box.addEventListener("mouseenter", hover => box.style.backgroundColor = "grey");
});

}