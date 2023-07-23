let color = "black";
let click = false;
function populateBoard(size){
    let sketchBoard = document.querySelector(".sketchBoard");
    let squares = sketchBoard.querySelectorAll("div");
    squares.forEach(div => div.remove());
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.innerHTML = "";

    let amount = size * size;
    for (let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.addEventListener("mousemove",colorSquare);
        square.style.backgroundColor = "white";
        sketchBoard.insertAdjacentElement("beforeend", square);
    }
};
populateBoard(16);

function changeSize(input){
    if(input <= 100){
        populateBoard(input);
    }else{
        alert("Maximum size is 100.");
    }
    };

        function colorSquare(){
            if (click){
                if(color === "rainbow"){
                    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                } else {
                    this.style.backgroundColor = color;
                }
            }
        };
function changeColor (choice){
    color = choice;
};

function reset (){
    populateBoard(16);
};

document.querySelector(".sketchBoard").addEventListener('mousedown',()=>{
    click = true;
});
document.querySelector(".sketchBoard").addEventListener('mouseup',()=>{
    click = false;
});