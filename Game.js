class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){

        var playerCountRef = await database.ref('playerCount').once("value");


        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      
    }
  
    play(){
      form.hide();
      if (keyIsDown(RIGHT_ARROW)){
        player.biker.x = player.biker.x + 5;
      }
      else{
        player.biker.x = player.biker.x;
      }
      
      if (keyIsDown(LEFT_ARROW)){
        player.biker.velocityX = -5;
      }
      else{
        player.biker.velocityX = 0;
      }
      
      if (keyIsDown(DOWN_ARROW)){
        player.biker.y = player.biker.y + 5;
      }
      else{
        player.biker.y = player.biker.y;
      }
      
      if (keyIsDown(UP_ARROW)){
        player.biker.velocityY = -5;
      }
      else{
        player.biker.velocityY = 0;
      }


      Player.getPlayerInfo();
      console.log(allPlayers);
      /*if(allPlayers !== undefined){
        background(rgb(198,135,103));
        
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            stroke("red");
            //strokeColor("red");
            //fill("red");
            ellipse(x, y, 50, 100);
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
     */
      drawSprites();
    }
  
    end(){
      textSize(35);
      text("Game Ended", 200, 3900);
      fill(0, 102, 153);
      console.log(player.rank);
    }
  }