function house(){
    this.display = function (width,height) {
        stroke(0, 0, 0);
        strokeWeight(2);
        fill("white");

        triangle(width-500, height-550, width-200, height-550, width-350, height-700);
        rect(width-490,height-550,280,300);
        
        translate(200, -200);
        triangle(70+1000, 600, 530+1000, 600, 285+1000, 400);
        rect(110+1000,600,380,430);

        translate(-200, 200);
        rect(1050,550,380,30);
        triangle(1100,580,1380,580,1240,8000);

        translate(0, -200);
        rect(600,300,400,30);
        rect(620,330,360,650);
        rect(600,600,400,30);

   
        translate(0, 100);
        triangle(70, 600, 530, 600, 285, 400);
        rect(110,600,380,430);

        translate(-700, 200);
        rect(1050,550,380,30);
        triangle(1100,580,1380,580,1240,8000);

        translate(700, -200);
        triangle(70+1400, 600, 530+1400, 600, 285+1400, 400);
        rect(110+1400,600,380,430);
        
    }
    
  }