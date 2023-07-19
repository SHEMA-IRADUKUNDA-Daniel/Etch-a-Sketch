function populateBoard(size){
    let sketchBoard = document.querySelector(".sketchBoard");
    
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.innerHTML = "";

    let amount = size * size;
    for (let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor = "black";
        });
        square.style.backgroundColor = "white";
        sketchBoard.insertAdjacentElement("beforeend", square);
    }
};
populateBoard(16);

function changeSize(input){
        populateBoard(input);
};
