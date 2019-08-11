function couplet(x,y,type) {
    this.x = x;
    this.y = y;
    this.type =type;
    this.display = function (x,y) {
        fill("yellow");
        ellipse(x, y, 50, 50);
    }
    this.mouseIsPressed = function (type) {
        this.x=mouseX;
        this.y=mouseY+100;
    }
 
}