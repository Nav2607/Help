class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    redJet = createSprite(200,500);
    redJet.addImage("player1",redJetImg);
    
    blueJet = createSprite(800,500);
    blueJet.addImage("player2",blueJetImg );
    players=[redJet,blueJet];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
 
        var x = 20;
        var y = 200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = x + 300;
            players[index -1].x = x;
            players[index - 1].y = y;
        
            if(index === player.index){
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25);

            }
           textSize(25);
           fill("white");
           text("Player 1 :" +allPlayers.player1.score,50,50);
           text("Player 2 :" +allPlayers.player2.score,50,100);
        }

        if(keyDown(UP_ARROW)&& player.index != null) {//Move Up
            console.log(player.index);
            if(player.index === 1){
                players[0].setSpeedAndDirection(2, player.angle-90);
            }
            if(player.index === 2){
                players[1].setSpeedAndDirection(2, player.angle-90);
            }

        }
           
           if(keyDown(LEFT_ARROW)&& player.index != null) {//Move Left
            player.angle -= 1;
            players[index-1].rotation = player.angle;
            
            }
            if(keyDown(RIGHT_ARROW)&& player.index != null) {//Move Right
            player.angle += 1;
            players[index-1].rotation = player.angle + 1;
            }

    }
    end(){
       console.log("Game Ended");
    }
}