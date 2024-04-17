let canvas = document.getElementById("canvas");
const clrBtn = document.getElementById("clear");
clrBtn.addEventListener("click", clearCanvas);
createCanvas();


function createCanvas() {
    for(let i = 0; i < 16* 16; i++) {
        let block = document.createElement("div");
        block.style.border = "1px solid black";
        block.style.width = "30px";
        block.style.height = "30px";
        block.classList.add("block");

        block.addEventListener("mouseover", function(e) {
            e.target.style.background = "black";
        });

        canvas.appendChild(block);
    }
}


function clearCanvas() {
    const nodes = document.querySelectorAll(".block");

    nodes.forEach((node) => {
        node.style.background = "white";
    });
}






