function backhomeBoy(x, y) {
    this.x = x;
    this.y = y;
    this.display = function () {
      fill("yellow");
      ellipse(this.x, this.y, 50, 50);
    }
    this.move = function () {
      if (this.x > windowWidth / 2-200) {
        this.x = this.x - 2;
      }
      if(this.x <= windowWidth / 2+10){
        this.speak();
      }
    }
    this.speak = function(){
      fill("limegreen");
      textSize(20);
      text("Let's go back home", this.x, this.y-60, this.x + 50, this.y-60);
    }
  }
  
  function backhomeGirl(x,y){
    this.x = x;
    this.y = y;
    this.display = function () {
      fill("yellow");
      ellipse(this.x, this.y, 50, 50);
    }
    this.move = function () {
      if (this.x < windowWidth / 2-300) {
        this.x = this.x + 2;
      }
      if(this.x >= windowWidth / 2-400){
        this.speak();
      }
      if(this.x >= windowWidth / 2-300){
        fill("black");
        text("Go back home", 200,400,250,400);
      }
    }
    this.speak = function(){
      fill("pink");
      textSize(20);
      text("Yeaaaah!", this.x, this.y-60, this.x + 50, this.y-60);
    }
  }
  