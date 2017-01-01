var mainCanvas;
var socket;

function mouseDragged(){
    noStroke();
    fill(255);
    drawCirc();

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('drawing', data);
}

function setup(){
    mainCanvas = createCanvas(800,800);
    background(44);
    socket = io.connect('http://localhost:3000');
    socket.on('drawing', function(data){
        noStroke();
        fill(0);
        ellipse(data.x, data.y, 16, 16);
    })
}

function draw(){

}

function drawCirc(){
    ellipse(mouseX, mouseY, 16, 16);
}

console.log("sketchJS loaded");