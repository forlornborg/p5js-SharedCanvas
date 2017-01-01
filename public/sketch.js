var mainCanvas;
var socket;
function setup(){
    mainCanvas = createCanvas(800,800);
    background(44);
    socket = io.connect('http://localhost:3000');
}

function draw(){
    noStroke();
    fill(255);
    if(mouseIsPressed){
        drawCirc();
    }
}

function drawCirc(){
    ellipse(mouseX, mouseY, 16, 16);
}

console.log("sketchJS loaded");