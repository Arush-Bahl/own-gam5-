var gameState = 0;
var bg1, bg2, damage, kills, rank, database, playerCount,form, game, player, sht1, sht2, sht3, sht4, allPlayers, plane;
var bggg, bgi;

function preload(){

  bggg = loadImage("Images/Background.jpeg");

}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.start();
   bgi = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
   bgi.addImage(bggg);
   bgi.visible = false;
   bgi.scale = 6.75;

}

function draw() {

if(gameState == 0){

  bgi.visible = true;

}

  if(playerCount === 4){
    game.updateState(1);
    gameState = 1;
  }

  if(gameState == 1){

    game.play();

    bgi.destroy();

  }

  drawSprites();

}