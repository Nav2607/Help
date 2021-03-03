var database;
var gameState = 0,playerCount;
var redJetImg, redJet;
var blueJetImg, blueJet;
var back_img;
var allPlayers, player;
var players =[];
var form, game;

function preload(){
redJetImg = loadImage("images/redJet.png");
blueJetImg = loadImage("images/blueJet.png");
back_img = loadImage("images/background.jpg");

  
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {


 if (gameState === 1) {
  clear();
  game.play();
 }
 if (gameState === 2) {
  game.end();
 }
 if (playerCount === 2) {
  game.update(1);
}
}