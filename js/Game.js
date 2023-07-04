class Game {
  constructor() {}

  start() {
    // INCLUA A CLASSE DO JOGO
    player = new Player();
    form = new Form();
    form.display();
    playerCount = player.getCount();
    car1 = createSprite (width/2 - 50, height - 100); 
    car1.addImage("car1",car1Img); 
    car1.scale = 0.07; car2 = createSprite (width/2 + 100, height - 100); 
    car2.addImage("car2",car2Img);                                                       
    car2.scale = 0.07;                                                                           
    cars = [car1,car2];
 }
  getState()
  { var gameStateRef = database.ref ("gameState");
   gameStateRef.on("value", function(data){gameState = data.val();}); 
}
update(state)
{ database.ref ("/").update
({ gameState: state });
 }
 play(){
  this.handleElements();

Player.getPlayersInfo();


  if(allPlayers!==undefined){
image(track,0,-height*5,width,height*6);

var index = 0;
for (var plr in allPlayers){
  index = index +1;
  var x = allPlayers[plr].positionX;
   var y = height - allPlayers[plr].positionY;
   cars[index].position.x = x;
   cars[index].position.y = y;
}

if (keyIsDown(UP_ARROW)){
  player.positionY += 10;
  player.update();
}
  drawSprites()
 }
}
 handleElements() { form.hide();
   form.titleImg.position(40, 50);
   form.titleImg.class("gameTitleAfterEffect");
 }
}
