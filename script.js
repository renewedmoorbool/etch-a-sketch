let canvas = document.getElementById("canvas");
const clrBtn = document.getElementById("clear");
const rainbowBtn = document.getElementById("rainbow");
let selectedMode = "";


clrBtn.addEventListener("click", clearCanvas);
rainbowBtn.addEventListener("click", rainbowMode);

createCanvas();


function createCanvas() {
    for(let i = 0; i < 16* 16; i++) {
        let block = document.createElement("div");
        block.style.border = "1px solid black";
        block.style.width = "30px";
        block.style.height = "30px";
        block.classList.add("block");

        block.addEventListener("mouseover", function(e) {
           block.classList.add("black");
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

function randomValue() {
    return Math.random() * 255;
}

function randomRGBValue() {
    return `rgb(${randomValue()},
            ${randomValue()},
            ${randomValue()})`;
}

function rainbowMode() {
    
    if(selectedMode != "rainbowMode") {
        selectedMode = "rainbowMode";
        const nodes = document.querySelectorAll(".block");
        
        nodes.forEach((node) => {
            let clonedNode = node.cloneNode();

            clonedNode.addEventListener("mouseover", function(e) {
                clonedNode.style.background = `${randomRGBValue()}`;
            });
            
            clonedNode.classList.add("block");

            node.replaceWith(clonedNode);
        });
    }

    else 
    {
        selectedMode = "normal";
        const nodes = document.querySelectorAll(".block");

        nodes.forEach((node )=>{
            let clonedNode = node.cloneNode();

            clonedNode.addEventListener("mouseover", function(e) {
                clonedNode.style.background = "black";
            })

            clonedNode.classList.add("block");
            node.replaceWith(clonedNode);
        })

    }
    
    
}

