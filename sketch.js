var canvas;
var fireworks=[], gravity, rate=5;
var font, font_points = [];
var a_explosion; // audio
var big_meal;
var dog_img;
var erha_img;

var sceneCounter = 0;
var backhomesPeopleA = [];
var backhomesPeopleB = [];
var couplets =[]
var luckmoney_1=0;
var luckmoney_2=0;
var luckmoney_3=0;
var luckmoney_4=0;
var luckmoney_5=0;
var questionNo = 1;
var choicescores = [];
var choicescounts = [];

// var houses = [];
var house;
var move = 1;

var button = {
  x: 200,
  y: 200,
  col:255,
  display:function(){
    if(sceneCounter == 0){
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 50*sin(frameCount/0.01), 50*sin(frameCount/0.01));
    }else if(sceneCounter == 1){
      noStroke();
      fill("blue");
      ellipse(this.x, this.y, 50, 50);
      }
    else{
      noStroke();
      fill("red");
      ellipse(this.x, this.y, 50, 50);
    }
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function preload() {
  a_explosion = loadSound("assets/a_explosion.mp3");
  font = loadFont('assets/AvenirNextLTPro-Demi.otf');
  big_meal = loadImage("assets/big_meal.jpg");
  dog_img = loadImage("assets/dog.jpeg");
  erha_img = loadImage("assets/erha.jpeg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCanvas();
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  for( var i = 0; i < 2; i++){
    var x = 1000;
    var y = 500;
    backhomesPeopleA.push(new backhomeBoy(x,y));
  }
  for( var i = 0; i < 2; i++){
    var x = 0;
    var y = 500;
    backhomesPeopleB.push(new backhomeGirl(x,y));
  }
  // create new couplet 
    var x = 30;
    var y = 500;
    var x1 = 300;
    var y1 = 500;
    couplets.push(new couplet(x,y,0));
    couplets.push(new couplet(x1,y1,1));
  
}

function draw() {

  if(sceneCounter == 0){
    button.display();
    if (frameCount % (60 * rate) == 1){ 
      createFirework(rate);
    }
    document.getElementById('inputWord').style.borderColor = 'rgb(100,0,'+ (50+(frameCount%200)) + ')';
    background(0, 0, 0, 0.15);

    for(var i = fireworks.length-1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  //console.log(fireworks.length);
}else if(sceneCounter == 1){
  createFirework(1000);
  background(10);

  backhomesPeopleA[0].display();
  backhomesPeopleB[0].display();
  if(move == 1){
    backhomesPeopleA[0].move();
    backhomesPeopleB[0].move();
    if( dist(backhomesPeopleA[0].x, backhomesPeopleA[0].y, backhomesPeopleB[0].x, backhomesPeopleB[0].y) < 150){
      move = 0;
    }
  }
  if(move == 0){
  if (keyIsDown(LEFT_ARROW)){
    backhomesPeopleB[0].x =backhomesPeopleB[0].x-10;
    backhomesPeopleB[0].y=backhomesPeopleB[0].y;
    backhomesPeopleB[0].display();

    backhomesPeopleA[0].x =backhomesPeopleA[0].x-10;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y;
    backhomesPeopleA[0].display();

  }
  if(keyIsDown(RIGHT_ARROW)){
    backhomesPeopleB[0].x =backhomesPeopleB[0].x+10;
    backhomesPeopleB[0].y=backhomesPeopleB[0].y;
    backhomesPeopleB[0].display();

    backhomesPeopleA[0].x =backhomesPeopleA[0].x+10;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y;
    backhomesPeopleA[0].display();
   
  }
  if(keyIsDown(UP_ARROW)){
    backhomesPeopleB[0].x =backhomesPeopleB[0].x;
    backhomesPeopleB[0].y=backhomesPeopleB[0].ybig_meal-10;
    backhomesPeopleB[0].display();
    
    backhomesPeopleA[0].x =backhomesPeopleA[0].x;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y-10;
    backhomesPeopleA[0].display();
  
  }
  if(keyIsDown(DOWN_ARROW)){
    backhomesPeopleB[0].x =backhomesPeopleB[0].x;
    backhomesPeopleB[0].y=backhomesPeopleB[0].y+10;
    backhomesPeopleB[0].display();

    backhomesPeopleA[0].x =backhomesPeopleA[0].x;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y+10;
    backhomesPeopleA[0].display();
  }
  if(backhomesPeopleB[0].x > windowWidth || backhomesPeopleA[0].x > windowWidth){
    sceneCounter = sceneCounter + 1;
  }
}
}else if(sceneCounter == 2){
  createFirework(1000);
  background(255);
  button.display();
  new house().display(windowWidth,windowHeight);
  
  if(mouseIsPressed&&dist(mouseX,mouseY,couplets[0].x,couplets[0].y-100)<50){
      couplets[0].mouseIsPressed(0);
  }
  if(mouseIsPressed &&dist(mouseX,mouseY,couplets[1].x,couplets[1].y-100)<50){
      couplets[1].mouseIsPressed(1);
  }
  couplets[0].display(couplets[0].x,couplets[0].y);
  couplets[1].display(couplets[1].x,couplets[1].y);

}else if(sceneCounter == 3){
  createFirework(1000);
  background(255);
  button.display();
  backhomesPeopleA[0].display();
  if (keyIsDown(LEFT_ARROW)&&backhomesPeopleA[0].x>50){
    backhomesPeopleA[0].x =backhomesPeopleA[0].x-10;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y;
    backhomesPeopleA[0].display();

  }
  if(keyIsDown(RIGHT_ARROW)&&backhomesPeopleA[0].x<windowWidth-50){
    backhomesPeopleA[0].x =backhomesPeopleA[0].x+10;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y;
    backhomesPeopleA[0].display();
   
  }
  if(keyIsDown(UP_ARROW)&&backhomesPeopleA[0].y>50){
    backhomesPeopleA[0].x =backhomesPeopleA[0].x;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y-10;
    backhomesPeopleA[0].display();
  }
  if(keyIsDown(DOWN_ARROW)&&backhomesPeopleA[0].y<windowHeight-50){
    backhomesPeopleA[0].x =backhomesPeopleA[0].x;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y+10;
    backhomesPeopleA[0].display();
  }
  new luckmoneyhouse().display(windowWidth,windowHeight);
 if(backhomesPeopleA[0].x<300&&backhomesPeopleA[0].y>windowHeight-300&&backhomesPeopleA[0].y<windowHeight-50){
    sceneCounter =sceneCounter+1;
 }
}else if(sceneCounter == 4){
  createFirework(1000);
  background(255);
  button.display();
  new luckmoneyhousegetmoney().display(windowWidth,windowHeight);
  backhomesPeopleA[0].display();
  if (keyIsDown(LEFT_ARROW)&&backhomesPeopleA[0].x>50){
    backhomesPeopleA[0].x =backhomesPeopleA[0].x-10;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y;
    backhomesPeopleA[0].display();

  }
  if(keyIsDown(RIGHT_ARROW)&&backhomesPeopleA[0].x<windowWidth-50){
    backhomesPeopleA[0].x =backhomesPeopleA[0].x+10;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y;
    backhomesPeopleA[0].display();
   
  }
  if(keyIsDown(UP_ARROW)&&backhomesPeopleA[0].y>50){
    backhomesPeopleA[0].x =backhomesPeopleA[0].x;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y-10;
    backhomesPeopleA[0].display();
  }
  if(keyIsDown(DOWN_ARROW)&&backhomesPeopleA[0].y<windowHeight-50){
    backhomesPeopleA[0].x =backhomesPeopleA[0].x;
    backhomesPeopleA[0].y=backhomesPeopleA[0].y+10;
    backhomesPeopleA[0].display();
  }

 
  var luckmoneypos_x;
  var luckmoneypos_y;

  if( backhomesPeopleA[0].x <300&& backhomesPeopleA[0].y<1000&& backhomesPeopleA[0].y>700){
    luckmoney_1=1;
  }
  if(luckmoney_1==1){
    fill("red");
    text("this is a luck money image", 10, 900);
  }

  if( backhomesPeopleA[0].x <300&& backhomesPeopleA[0].y<1000&& backhomesPeopleA[0].y>700){
    luckmoney_2=2;
  }
  if(luckmoney_2==2){
    fill("red");
    text("this is a luck money image", 250, 800);
  }

  if( backhomesPeopleA[0].x <300&& backhomesPeopleA[0].y<1000&& backhomesPeopleA[0].y>700){
    luckmoney_3=3;
  }
  if(luckmoney_3==3){
    fill("red");
    text("this is a luck money image", 250, 800);
  }

  if( backhomesPeopleA[0].x <300&& backhomesPeopleA[0].y<1000&& backhomesPeopleA[0].y>700){
    luckmoney_4=4;
  }
  if(luckmoney_4==5){
    fill("red");
    text("this is a luck money image", 250, 800);
  }

  if( backhomesPeopleA[0].x <300&& backhomesPeopleA[0].y<1000&& backhomesPeopleA[0].y>700){
    luckmoney_5=1;
  }
  if(luckmoney_5==5){
    fill("red");
    text("this is a luck money image", 250, 800);
  }
}else if(sceneCounter == 5){
  createFirework(1000);
  background(0);
  image(big_meal,-100,0,windowWidth+100,windowHeight+40);
  button.display();
  // new big_meal().display();


  questionboard2();
  questions();
  foodshow();
}


else if(sceneCounter == 6){
  createFirework(1000);
  background(0);
  button.display();
  new house().display(windowWidth,windowHeight);
}

}


function questions(){
  textSize(15);
  if(questionNo==1){
    fill(0);
    text("1. A ",110,220);
    text("A",110,240);
    text("A.True",160,295);
    text("B.False",360,295);
  }else if(questionNo==2){
    fill(0);
    text("2. B ",110,220);
    text("B",110,240);
    text("A.True",160,295);
    text("B.False",360,295);
  }
}
function questionboard2(){
  fill("pink");
  rect(100,180,400,150);
  fill(255);
  rect(150,270,80,40);
  rect(350,270,80,40);
  textSize(100);
  fill(255);
}
function foodshow(){
  if( choicescores[0] == 1 && choicescounts[0] == 1 ){
    image(dog_img,600,600,100,100);
  }
  if( choicescores[1] == 1 && choicescounts[1] == 1 ){
    image(erha_img,800,600,100,100);
  }
}






function createFirework(dur) {
  let duration = dur * 1000;

  canvas = createCanvas(window.innerWidth-20, window.innerHeight-4);
  canvas.style('visibility', 'visible');
  background(0);
  a_explosion.setVolume(1);

  fireworks.push(new Firework('font', document.getElementById('inputWord').value));

  for (let i = 0; i < 6; i++) {
    setTimeout( ()=> { fireworks.push(new Firework()); }, random(50, duration * 0.5));
  }

  setTimeout( ()=> { canvas.remove(); a_explosion.setVolume(0); }, duration);
}


function mousePressed(){
  button.display();
  if(button.x - 30< mouseX && mouseX < button.x + 30 && button.y - 30 < mouseY && mouseY < button.y + 30){
    sceneCounter = sceneCounter + 1;
  }

  if(150<mouseX&&mouseX<230 && 270<mouseY&&mouseY<310){
    if(questionNo == 1){
    console.log("yes");
    choicescores[0] =  1;
    choicescounts[0] =  1;
    console.log(choicescores);
    console.log(choicescounts);
    questionNo = questionNo + 1;
    }
    else if(questionNo == 2){
      console.log("yes");
      choicescores[1] =  1;
      choicescounts[1] =  1;
      console.log(choicescores);
      console.log(choicescounts);
      questionNo = questionNo + 1;
      }

  }else if(350<mouseX&&mouseX<430 && 270<mouseY&&mouseY<310){
    console.log("No");
    questionNo = questionNo + 1;
  }


}


