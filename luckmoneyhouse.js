function luckmoneyhouse(){
    this.display = function (width,height) {
        stroke(0, 0, 0);
        strokeWeight(2);
        fill("white");
       
        //left move x, up move y
        var x;
        var y;
     
        triangle(width-500, height-550, width-200, height-550, width-350, height-700);
        rect(width-490,height-550,280,300);
        rect(width-490,height-550,80,80);
        rect(width-490+200,height-550,80,80);
        rect(width-437,height-430,180,180);
       
        fill("white");
      

        translate(-width+500, 200);
        triangle(width-500, height-550, width-200, height-550, width-350, height-700);
        rect(width-490,height-550,280,300);
        rect(width-490,height-550,80,80);
        rect(width-490+200,height-550,80,80);
        rect(width-437,height-430,180,180);
        translate(width-500,-200);

        scale(0.5); 
        translate(-400, 200);
        triangle(width-500, height-550, width-200, height-550, width-350, height-700);
        rect(width-490,height-550,280,300);
        rect(width-490,height-550,80,80);
        rect(width-490+200,height-550,80,80);
        rect(width-437,height-430,180,180);
        translate(400, -200);

        translate(-50, 700);
        scale(0.8);
        translate(50, -700);

        translate(-100, -150);
        scale(1.5);
        triangle(width-500, height-550, width-200, height-550, width-350, height-700);
        rect(width-490,height-550,280,300);
        rect(width-490,height-550,80,80);
        rect(width-490+200,height-550,80,80);
        rect(width-437,height-430,180,180);
        translate(100, 100);
   
        translate(500, -150);
        scale(0.8);
        triangle(width-500, height-550, width-200, height-550, width-350, height-700);
        rect(width-490,height-550,280,300);
        rect(width-490,height-550,80,80);
        rect(width-490+200,height-550,80,80);
        rect(width-437,height-430,180,180);
        translate(-500, 40);
        scale(2);
        fill("red");
        textSize(28);
        text("Luck money",10,650);
        
        fill("green");
        textSize(20);
        text("Luck money",280,400);
    }
    
  }