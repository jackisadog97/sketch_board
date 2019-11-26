function makeGrids(){
    const container = document.querySelector(".grid_container");
    let cols = container.style.gridTemplateColumns = "repeat(16, 1fr)";
    let rows = container.style.gridTemplateRows = "repeat(16, 1fr)";
    for(let i = 0; i < 16 * 16; i++){
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



makeGrids()