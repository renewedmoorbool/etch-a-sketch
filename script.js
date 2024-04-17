let canvas = document.getElementById("canvas");

function createCanvas() {
    for(let i = 0; i < 16* 16; i++) {
        let block = document.createElement("div");
        block.style.border = "1px solid black";
        block.style.width = "30px";
        block.style.height = "30px";

        block.addEventListener("mouseover", function(e) {
            e.target.style.background = "black";
        });

        canvas.appendChild(block);
    }
}

createCanvas();

let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", createCanvas);