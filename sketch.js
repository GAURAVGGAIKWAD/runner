var Runner,Runner_running,edges;
var path;

function preload(){
 //pre-load images
  Runner_running = loadAnimation("Runner1.png","Runner2.png",);
  pathimage = loadAnimation("path.png");
}

function setup(){
  createCanvas(600,200);
  //create sprites here
 Runner = createSprite(300,170,20,20);
 Runner.addImage("running",Runner_running);
 edges = createEdgeSprite();
 path = createSprite(600,200);
 path.addImage(pathimage);
 path.velocity = 4;
 path.scale = 1.2;
}

function draw() {
  background(0);

  console.log(path);
  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprite();
}
