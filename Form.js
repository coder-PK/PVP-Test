class Form {
  constructor() {
    
     this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.title = createElement("h2");
    this.reset = createButton("Reset");
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}
  display(){
    this.title.html("PVP");
    this.title.position(displayWidth/2 - 50, 0);
    
    
    this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth - 100, 20)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      if (playerCount === 0){
        player = new Player(500, 200, biker);

      }
      else if (playerCount === 1){
        player = new Player(980, 220, biker_flip);
        player.update();
      }
      else if (playerCount === 2){
        player = new Player(750, 600, biker_Gun);
        player.haveGun = true;
        player.update();
      }
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4)
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
  }
}
