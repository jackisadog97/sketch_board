let default_size = 16;


function makeGrids(){
    const container = document.querySelector(".grid_container");
    let cols = container.style.gridTemplateColumns = `repeat(${default_size}, 1fr)`;
    let rows = container.style.gridTemplateRows = `repeat(${default_size}, 1fr)`;
    for(let i = 0; i < default_size * default_size; i++){
        const div = document.createElement('div');
        div.className = "grid_item";
        //div.textContent = i;
        container.appendChild(div);
    }
    black();
}
function black(){
    const grid_item = document.querySelectorAll(".grid_item");
    grid_item.forEach((item) => {
        item.addEventListener("mouseenter",(e) => {
            e.target.style.background = "black";
        });
    });
}
const button = document.querySelector("#reset");
button.addEventListener("click",(e) => {
    const black_grids = document.querySelectorAll(".grid_item");
    black_grids.forEach((grid) => {
        grid.style.background = "white";
    });
});


makeGrids()