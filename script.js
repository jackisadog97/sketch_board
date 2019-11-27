window.onload = makeGrid(16);




function makeGrid(default_size){
    const container = document.querySelector(".grid_container");
    let cols = container.style.gridTemplateColumns = `repeat(${default_size}, 1fr)`;
    let rows = container.style.gridTemplateRows = `repeat(${default_size}, 1fr)`;
        for(let i = 0; i < default_size * default_size; i++){
            const div = document.createElement('div');
            div.className = "grid_item";
            //div.textContent = i;
            container.appendChild(div);
        }
        addHoverEffect();
    
}


function addHoverEffect(setColour="#000000") {
    const grid_item = document.querySelectorAll(".grid_item");
    grid_item.forEach((item) => {
        item.addEventListener("mouseenter",(e) => {
            e.target.style.background = setColour;
        });
    });
}

const reset = document.querySelector("#reset");
reset.addEventListener("click",() => {
    const black_grids = document.querySelectorAll(".grid_item");
    black_grids.forEach((grid) => {
        grid.style.background = "white";
    });

});

const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click",() => {
    let newSize = window.prompt("How many pixels would you like on each " +
        "side?");
    const container = document.querySelector(".grid_container");
    let first = container.firstChild;

    let size = parseInt(newSize);
    while(first){
        first.remove();
        first = container.firstChild;
    }
    const colour = document.querySelector("#color");
    colour.value = "black";
    makeGrid(size);
});

const colour = document.querySelector("#color");
colour.addEventListener("input", () => addHoverEffect(colour.value));
 

