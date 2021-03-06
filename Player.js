class Player{
  constructor(x, y, biker_Image){
    this.biker = createSprite(x, y);
    this.name = null;
    this.haveGun = false;
    this.index = null;
    this.rank = null;
    this.biker.addImage(biker_Image);
    this.biker.scale = 0.75;
    bikers_Array.push(this.biker);
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "Players/players" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      haveGun: this.haveGun,
      x: this.biker.x,
      y:this.biker.y
    });
  }

 static getPlayerInfo(){
    var playerInfo= database.ref("Players");
    playerInfo.on("value",(data)=>{
      allPlayers = data.val();
    })

  }
  }